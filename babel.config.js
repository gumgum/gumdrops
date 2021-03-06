module.exports = function (api) {
    const env = api.env();
    return {
        presets: ['@babel/preset-env', '@babel/preset-typescript', '@babel/preset-react'],
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
                            targets: { node: 'current' },
                            modules: 'commonjs'
                        }
                    ]
                ]
            }
        }
    };
};
