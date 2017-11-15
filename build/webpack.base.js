const webpack = require('webpack');
const {
    CheckerPlugin
} = require('awesome-typescript-loader')
const autoprefixer = require('autoprefixer');
const paths = require('./paths');
const path = require('path');
const ExtractTextPlugin = require("extract-text-webpack-plugin");


const lessUse = [{
    loader: require.resolve('css-loader'),
    options: {
        importLoaders: 1,
        minimize: process.env.NODE_ENV === 'production'
    },
}, {
    loader: require.resolve('postcss-loader'),
    options: {
        ident: 'postcss', // https://webpack.js.org/guides/migrating/#complex-options
        plugins: () => [
            require('postcss-flexbugs-fixes'),
            autoprefixer({
                browsers: [
                    '>1%',
                    'last 4 versions',
                    'Firefox ESR',
                    'not ie < 9', // React doesn't support IE8 anyway
                ],
                flexbox: 'no-2009',
            }),
        ],
    },
}, {
    loader: require.resolve('less-loader')
}];

const cssLoader = {
    test: /\.css$/,
    use: process.env.NODE_ENV === 'production' ? ExtractTextPlugin.extract({
        fallback: require.resolve('style-loader'),
        use: ['css-loader']
    }) : ['style-loader', 'css-loader']
}



const lessLoader = {
    test: /\.less$/,
    use: process.env.NODE_ENV === 'production' ? ExtractTextPlugin.extract({
        fallback: require.resolve('style-loader'),
        use: lessUse
    }) : [{
        loader: require.resolve('style-loader')
    }].concat(lessUse)
}


module.exports = {
    entry: [paths.srcPath],
    output: {
        filename: 'static/[name].js',
        path: paths.outputPath,
        publicPath: '/'
    },
    resolve: {
        extensions: ['.ts', '.tsx', '.js', '.jsx'],
        alias: {
            'jtalk_components': path.resolve(__dirname, '../components')
        }
    },
    devtool: 'source-map',
    module: {
        loaders: [{
                enforce: "pre",
                test: /\.(ts|tsx)$/,
                use: ['tslint-loader'],
                include: path.resolve(__dirname, '../components'),
                exclude: path.resolve(__dirname, '../node_modules')
            },
            {
                test: /\.(ts|tsx)$/,
                use: ['awesome-typescript-loader'],
                include: [path.resolve(__dirname, '../site'), path.resolve(__dirname, '../components')],
                exclude: path.resolve(__dirname, '../node_modules')
            },
            {
                test: [/\.bmp$/, /\.gif$/, /\.jpe?g$/, /\.png$/],
                loader: require.resolve('url-loader'),
                options: {
                    limit: 10000,
                    name: 'static/media/[name].[hash:8].[ext]',
                },
            },
            lessLoader,
            cssLoader,
            {
                exclude: [
                    /\.html$/,
                    /\.(js|jsx)(\?.*)?$/,
                    /\.(ts|tsx)(\?.*)?$/,
                    /\.css$/,
                    /\.less$/,
                    /\.json$/,
                    /\.bmp$/,
                    /\.gif$/,
                    /\.jpe?g$/,
                    /\.png$/,
                ],
                loader: require.resolve('file-loader'),
                options: {
                    name: 'static/media/[name].[hash:8].[ext]',
                },
            },
        ]
    },
    plugins: [
        new CheckerPlugin()
    ]
}