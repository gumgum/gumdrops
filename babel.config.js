module.exports = function (api) {
    const env = api.env();
    return {
        presets: [
            '@babel/preset-env',
            '@babel/preset-typescript',
            '@babel/preset-react',
            ['react-app', { flow: false, typescript: true }]
        ],
        plugins: [
            '@babel/plugin-proposal-class-properties',
            [
                'module-resolver',
                {
                    alias: {
                        types: './src/types',
                        stories: './src/stories',
                        hooks: './src/hooks',
                        styles: './src/styles'
                    }
                }
            ]
        ],
        env: {
            test: {
                presets: [
                    [
                        '@babel/preset-env',
                        {
                            modules: 'commonjs'
                        }
                    ]
                ]
            }
        }
    };
};