const webpack = require('webpack');
const baseConfig = require('./webpack.base');
const merge = require('webpack-merge');
const FriendlyErrorsWebpackPlugin = require('friendly-errors-webpack-plugin');

const devConfig = merge(baseConfig, {
    devtool: "#cheap-eval-source-map",
    plugins: [
        new FriendlyErrorsWebpackPlugin()
    ]
});

module.exports = devConfig;