/**
 * Libraries
 */

const path = require('path');
const webpack = require('webpack');
const DashboardPlugin = require('webpack-dashboard/plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const FlowBabelWebpackPlugin = require('flow-babel-webpack-plugin');
const autoprefixer = require('autoprefixer');

/**
 * Common constants
 */

const constants = require('./config/application/constants');

/**
 * Determining the environment
 */

const EVENT = process.env.npm_lifecycle_event || '';
const IS_PROD = EVENT.includes('prod');

/**
 * Common plugins
 */

const plugins = [
    new webpack.optimize.CommonsChunkPlugin({
        name: 'vendor',
        minChunks: Infinity,
        filename: 'vendor-[hash].js'
    }),
    new webpack.DefinePlugin({
        'process.env': {
            NODE_ENV: JSON.stringify(IS_PROD && 'production' || 'development')
        }
    }),
    new webpack.NamedModulesPlugin(),
    new HtmlWebpackPlugin({
        template: path.join(constants.SOURCE_PATH, 'index.html'),
        path: constants.BUILD_PATH,
        filename: 'index.html'
    }),
    new ExtractTextPlugin({
        filename: 'styles-[hash].css',
        allChunks: true
    }),
    new webpack.LoaderOptionsPlugin({
        options: {
            postcss: [
                autoprefixer({
                    browsers: [
                        'last 3 version',
                        'ie >= 10'
                    ]
                })
            ],
            context: constants.SOURCE_PATH
        }
    }),
    new FlowBabelWebpackPlugin()
];

/**
 * Build specific plugins
 */

if (IS_PROD) {
    plugins.push(
        new webpack.LoaderOptionsPlugin({
            minimize: true,
            debug: false
        }),
        new webpack.optimize.UglifyJsPlugin({
            compress: {
                warnings: false,
                screw_ie8: true,
                conditionals: true,
                unused: true,
                comparisons: true,
                sequences: true,
                dead_code: true,
                evaluate: true,
                if_return: true,
                join_vars: true
            },
            output: {
                comments: false
            }
        })
    );
} else {
    plugins.push(
        new webpack.HotModuleReplacementPlugin(),
        new DashboardPlugin()
    );
}

/**
 * Exporting configuration
 */

module.exports = function() {
    return {
        devtool: IS_PROD ? 'source-map' : 'eval',
        context: constants.SOURCE_PATH,
        entry: {
            js: './index.js',
            vendor: [
                'babel-polyfill',
                'react-dom',
                'react-redux',
                'react',
                'redux',
                'rxjs',
                'isomorphic-fetch'
            ]
        },
        output: {
            path: constants.DIST_PATH,
            publicPath: '/',
            filename: 'app-[hash].js'
        },
        module: {
            rules: [{
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: [
                    'babel-loader'
                ]
            }, {
                test: /\.(png|gif|jpg|svg)$/,
                include: constants.IMG_PATH,
                use: 'url-loader?limit=20480&name=assets/[name]-[hash].[ext]'
            }, {
                test: /\.scss$/,
                use: ExtractTextPlugin.extract({
                    fallback: 'style-loader',
                    use: 'css-loader!postcss-loader!sass-loader'
                })
            }]
        },
        resolve: {
            extensions: ['.webpack-loader.js', '.web-loader.js', '.loader.js', '.js', '.jsx'],
            modules: [
                path.resolve(__dirname, 'node_modules'),
                constants.SOURCE_PATH
            ]
        },
        plugins,
        devServer: {
            contentBase: './src',
            historyApiFallback: true,
            port: 3000,
            compress: IS_PROD,
            inline: !IS_PROD,
            hot: !IS_PROD,
            stats: {
                assets: true,
                children: true,
                chunks: true,
                hash: false,
                modules: false,
                publicPath: false,
                timings: true,
                version: true,
                warnings: true,
                colors: {
                    green: '\u001b[32m'
                }
            }
        }
    };
};
