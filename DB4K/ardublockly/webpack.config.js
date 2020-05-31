const path = require('path');

module.exports = {
    entry: './import.js',
    mode: 'development',
    output: {
        filename: 'js/main.js',
        path: path.resolve(__dirname, '.'),
    },
    node: {
        fs: 'empty',
        promise:'empty',
        promises_aplus_tests:'empty'
    },
    module: {
        rules: [
            {
                test: /\.css$/,
                use: [
                    'style-loader',
                    'css-loader',
                    'node-sass',
                ],
            },
        ],
    },
    externals: [
        (function () {
            var IGNORES = [
                'electron'
            ];
            return function (context, request, callback) {
                if (IGNORES.indexOf(request) >= 0) {
                    return callback(null, "require('" + request + "')");
                }
                return callback();
            };
        })()
    ]
};