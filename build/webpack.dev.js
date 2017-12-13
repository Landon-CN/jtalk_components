const webpack = require('webpack');
const baseConfig = require('./webpack.base');
const merge = require('webpack-merge');
const FriendlyErrorsWebpackPlugin = require('friendly-errors-webpack-plugin');
const paths = require('./paths');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');
const { CheckerPlugin } = require('awesome-typescript-loader');

baseConfig.entry = [
    'react-hot-loader/patch',
    path.resolve(__dirname, './devClient.js')
].concat(baseConfig.entry);

const devConfig = merge(baseConfig, {
    devtool: "#source-map",
    plugins: [
        new FriendlyErrorsWebpackPlugin(),
        new webpack.HotModuleReplacementPlugin(),
        new HtmlWebpackPlugin({
            favicon: paths.faviconPath,
            filename: 'index.html',
            template: paths.indexHtml,
            inject: true
        }),
        new webpack.DefinePlugin({
            'process.env.NODE_ENV': '"development"'
        })
    ]
});

// hot-reload
// 这里需要特别注意loaders顺序
devConfig.module.loaders[1].use.unshift({
    loader: 'react-hot-loader/webpack'
});


module.exports = devConfig;