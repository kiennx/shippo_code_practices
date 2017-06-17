let path = require('path');
let webpack = require('webpack');

export default {
    entry: './005/src/main.js',
    resolve:
        {
            alias: {
                'handlebars' : 'handlebars/dist/handlebars.js'
            }
        },
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'dist')
    },
    module: {
        rules: [
                { test: /\.hbs$/, loader: "handlebars-loader" }
        ]
    },
    plugins: [
        new webpack.ProvidePlugin({
            $: "jquery"
        })
    ]
};