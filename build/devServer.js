const webpack = require('webpack');
const webpackDevServer = require('webpack-dev-server');
const webpackDevMid = require('webpack-dev-middleware');
const express = require('express');

const devConf = require('./webpack.dev');
let webpackConf = devConf;

const app = express();
const port = process.env.PORT || 5000;
const compiler = webpack(webpackConf);

const devMid = webpackDevMid(compiler, {
    quiet: true,
    noInfo: true,
    publicPath: webpackConf.output.publicPath
});
const hotMid = require("webpack-hot-middleware")(compiler, {
    log: () => {}
});

app.use(devMid);

app.use(hotMid);

// force page reload when html-webpack-plugin template changes
compiler.plugin('compilation', function (compilation) {
    compilation.plugin('html-webpack-plugin-after-emit', function (data, cb) {

        hotMid.publish({
            action: 'reload'
        })
        cb()
    })
})

const server = app.listen(port);