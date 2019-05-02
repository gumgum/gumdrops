const path = require('path');

module.exports = ({ config, mode }) => {
    config.module.rules.push({
        test: /\.scss/,
        use: [
            'style-loader',
            'css-loader',
            {
                loader: 'sass-loader',
                options: {
                    outputStyle: 'expanded'
                }
            }
        ]
    });
    return config;
};
