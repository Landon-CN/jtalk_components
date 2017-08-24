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
    quiet: true
});

app.use(devMid);

const server = app.listen(port);