var webpack = require('webpack');
var webpackConfig = require('./webpack.dev');
// var webpackConfig = require('./webpack.prod');

webpack(webpackConfig, function (err, stats) {
    if (err) throw err

    if (stats.hasErrors()) {
        const info = stats.toJson();
        console.log('errors')
        throw info.errors;
    }
    if (stats.hasWarnings()) {
        const info = stats.toJson();
        console.log('warnings')
        throw info.warnings;

    }
})