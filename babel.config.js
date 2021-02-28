module.exports = function (api) {
    const env = api.env();
    return {
        presets: [
            '@babel/preset-env',
            '@babel/preset-typescript',
            '@babel/preset-react',
            ['react-app', { flow: false, typescript: true }]
        ],
        plugins: ['@babel/plugin-proposal-class-properties'],
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
