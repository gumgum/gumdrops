// PRs welcome!

// import system dependencies
const {
    lstatSync,
    readdirSync,
    createReadStream,
    createWriteStream,
    writeFile,
    rename
} = require('fs');
const { join, resolve: resolvePath } = require('path');
const { spawn } = require('child_process');

// Import rollup plugins
const rollup = require('rollup');
const babel = require('rollup-plugin-babel');
const resolve = require('rollup-plugin-node-resolve');
const commonjs = require('rollup-plugin-commonjs');
const uglify = require('rollup-plugin-uglify');

// Import package.json file for its configurations
const pkg = require('../package.json');

// set flag to either publish on npm or create a tarball
const shouldPublish = !!parseInt(process.env.PUBLISH_PACK);
// check if a version tag is provided
const hasVersionTag = !!process.env.TAG;

// Define reusable constants
const COMPONENTS = 'components';
// Formats used to build modules
const formats = ['cjs'];

// Configuration shared across builds
const commonConfig = {
    // Make sure the 3rd party libs externals dependencies and prevent bundling them
    external: [
        ...Object.keys(pkg.devDependencies),
        ...Object.keys(pkg.dependencies),
        ...Object.keys(pkg.peerDependencies)
    ],
    plugins: [
        resolve({
            extensions: ['.js', '.jsx', '.json']
        }),
        commonjs({
            include: 'node_modules/**',
            namedExports: {
                'node_modules/react/index.js': [
                    'Children',
                    'Component',
                    'PropTypes',
                    'createElement'
                ],
                'node_modules/react-dom/index.js': ['render']
            }
        }),
        babel({
            exclude: 'node_modules/**',
            plugins: [
                'external-helpers',
                ['transform-react-remove-prop-types', { removeImport: true }]
            ]
        })
    ]
};

// Logs a message to inform of the build state
const log = message => console.log(`---- ${message} ----`);

// Finds if given path is a directory
const isDirectory = source => lstatSync(source).isDirectory();

// Finds directories inside a given directory path
const getDirectories = source =>
    readdirSync(source)
        .map(name => join(source, name))
        .filter(isDirectory);

// Finds files inside a given directory path
const getFiles = source =>
    readdirSync(source)
        .map(name => join(source, name))
        .filter(f => !isDirectory(f));

// Lists all files inside the components/ directory
const listFiles = () => {
    log('Finding files in .components/ directory');
    const directories = getDirectories(COMPONENTS);
    const files = directories.reduce((list, directory) => [...list, ...getFiles(directory)], [
        ...getFiles(COMPONENTS)
    ]);
    return files;
};

// Builds the filepath for the given file
const getFileNameData = (file, format) => {
    const originalPath = file
        .split('/')
        .reverse()[0]
        .replace('jsx', 'js');
    const [name] = originalPath.split('.');
    const filepath = `dist/${originalPath}`;
    return { filepath, name };
};

// Builds the Rollup configuration for a new file
function createFileConfiguration(input, format, outputName, fileName) {
    return {
        inputOptions: {
            input,
            ...commonConfig
        },
        outputOptions: {
            globals: {
                react: 'React',
                classnames: 'cx',
                'prop-types': 'PropTypes',
                'react-modal': 'ReactModal',
                'react-dom': 'reactDom'
            },
            sourcemap: true,
            name: fileName || outputName,
            file: outputName,
            format
        }
    };
}

// Creates ESM configs for components
function buildESMConfigurations() {
    const format = 'es';
    return listFiles().reduce((acc, file) => {
        const { filepath, name } = getFileNameData(file, format);
        const config = createFileConfiguration(file, format, filepath, name);
        return [...acc, config];
    }, []);
}

// Copy a file to the dist/ dir
function copyFile(source, target) {
    target = target || `dist/${source}`;
    const read = createReadStream(`./${source}`);
    const write = createWriteStream(target);
    return new Promise((resolve, reject) => {
        read.on('error', reject);
        write.on('error', reject);
        write.on('finish', resolve);
        read.pipe(write);
    }).catch(error => {
        read.destroy();
        write.end();
        throw error;
    });
}

// Create a simplified package.json for the package
function createPackageFile() {
    const packageData = JSON.stringify(
        {
            name: pkg.name,
            version: pkg.version,
            description: pkg.description,
            main: pkg.main.replace('dist/', ''),
            module: pkg.module.replace('dist/', ''),
            repository: pkg.repository,
            dependencies: pkg.dependencies,
            peerDependencies: pkg.peerDependencies
        },
        null,
        2
    );
    return new Promise((resolve, reject) => {
        const write = writeFile('dist/package.json', packageData, 'utf-8', resolve);
    }).catch(error => {
        throw error;
    });
}

// Copy extra files to dist dir
function createExtraFiles() {
    log('Generating extra files');
    const filePromises = ['README.md', 'CHANGELOG.md'].map(f => copyFile(f));
    filePromises.push(createPackageFile());
    return Promise.all(filePromises);
}

// Run an NPM process on the dist/ dir
function runNPMProcess(script, ...args) {
    const childProcess = spawn('npm', [script, ...args], { sdio: 'inherit', cwd: 'dist/' });
    return new Promise((resolve, reject) => {
        let stdOut = '';
        // Capture STDOUT
        childProcess.stdout.on('data', err => {
            stdOut += err.toString();
        });
        let fullError = '';
        // Capture STDERR data to send in case of failure
        childProcess.stderr.on('data', err => {
            fullError += err.toString();
        });
        childProcess.on('error', reject);
        childProcess.on('close', () => (fullError ? reject(fullError) : resolve(stdOut)));
    });
}

// Change a file's path
function moveFile(oldPath, newPath) {
    return new Promise((resolve, reject) => {
        rename(oldPath, newPath, err => (err ? reject : resolve));
    });
}

// Create a Tarball of the dist/ dir
async function packDistDir() {
    log('Packing dist/ directory');
    await runNPMProcess('pack');
    // Move tarball to root dir
    const tarName = `${pkg.name}-${pkg.version}.tgz`;
    log(`Saving tarball to ./${tarName}`);
    return moveFile(`./dist/${tarName}`, tarName);
}

// Publish package to NPM
// only if PUBLISH_PACK env var is set to true
function publishDist() {
    log('Running NPM publish');
    if (hasVersionTag) {
        const versionTag = process.env.TAG;
        log(`Publishing version: ${versionTag} / ${pkg.version}`);
        return runNPMProcess('publish', '--tag', versionTag);
    } else {
        return Promise.reject(
            '---- Version tag must be provided as an ENV VAR: env TAG=latest yarn run publish-pack ----'
        );
    }
}

// Main function
// Calls Rollup with a specific configuration for each file in the components/ directory
// This creates a common-js and an ES module for each file, to allow importing them individually
// Additionally, it creates an index.js in file to allow importing the whole library (and allow retrocompatibility),
// A UMD build (index.umd.js) is created to allow loading the library in browsers
async function build() {
    try {
        const configurations = [
            // Probably only the index is needed for UMD
            // Build UMD configuration
            createFileConfiguration(
                `${COMPONENTS}/index.js`,
                'umd',
                'dist/gumdrops.umd.js',
                pkg.name
            ),
            // Build CJS
            createFileConfiguration(`${COMPONENTS}/index.js`, 'cjs', 'dist/index.cjs.js', pkg.name),
            // Build ESM
            ...buildESMConfigurations()
        ];

        log('Building modules');
        log('Please wait');
        // create a bundle
        for (config of configurations) {
            const bundle = await rollup.rollup(config.inputOptions);

            // generate code and a sourcemap
            const { code, map } = await bundle.generate(config.outputOptions);

            // or write the bundle to disk
            await bundle.write(config.outputOptions);
        }

        // Generate README, CHANGELOG, package.json of dist dir
        await createExtraFiles();
        if (shouldPublish) {
            // publish dist dir to npm
            const message = await publishDist();
            log('Built version:\n' + message.trim());
        } else {
            // package dist dir in tarball (npm pack)
            await packDistDir();
        }
        log('Done!');
    } catch (err) {
        log('Finished with errors: ');
        console.error(err);
    }
}

return build();
