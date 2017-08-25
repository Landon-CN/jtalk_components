const webpack = require('webpack');
const baseConfig = require('./webpack.base');
const merge = require('webpack-merge');
const FriendlyErrorsWebpackPlugin = require('friendly-errors-webpack-plugin');
const paths = require('./paths');
const HtmlWebpackPlugin = require('html-webpack-plugin');

baseConfig.entry.index = [baseConfig.entry.index, './build/devClient'];

const devConfig = merge(baseConfig, {
    devtool: "#cheap-eval-source-map",
    plugins: [
        new FriendlyErrorsWebpackPlugin(),
        new webpack.HotModuleReplacementPlugin(),
        new HtmlWebpackPlugin({
            filename: 'index.html',
            template: paths.indexHtml,
            inject: true
        }),
    ]
});

module.exports = devConfig;