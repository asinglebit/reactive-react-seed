/**
 * Libraries
 */

const webpack = require('webpack');
const path = require('path');

/**
 * Determining the environment
 */

const EVENT = process.env.npm_lifecycle_event || '';
const IS_PROD = EVENT.includes('prod');

/**
 * Common constants
 */

const SOURCE_PATH = path.join(__dirname, './src');
const DIST_PATH = path.join(__dirname, './dist');

/**
 * Common plugins
 */

const plugins = [
    new webpack.optimize.CommonsChunkPlugin({
        name: 'vendor',
        minChunks: Infinity,
        filename: 'vendor.bundle.js'
    }),
    new webpack.DefinePlugin({
        'process.env': {
            NODE_ENV: JSON.stringify(IS_PROD && 'production' || 'development')
        }
    }),
    new webpack.NamedModulesPlugin()
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
        new webpack.HotModuleReplacementPlugin()
    );
}

module.exports = function() {
    return {
        devtool: IS_PROD ? 'source-map' : 'eval',
        context: SOURCE_PATH,
        entry: {
            js: './index.js',
            vendor: ['react']
        },
        output: {
            path: DIST_PATH,
            filename: '[name].bundle.js'
        },
        module: {
            rules: [{
                test: /\.html$/,
                exclude: /node_modules/,
                use: {
                    loader: 'file-loader',
                    query: {
                        name: '[name].[ext]'
                    }
                }
            }, {
                test: /\.css$/,
                exclude: /node_modules/,
                use: [
                    'style-loader',
                    'css-loader'
                ]
            }, {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: [
                    'babel-loader'
                ]
            }]
        },
        resolve: {
            extensions: ['.webpack-loader.js', '.web-loader.js', '.loader.js', '.js', '.jsx'],
            modules: [
                path.resolve(__dirname, 'node_modules'),
                SOURCE_PATH
            ]
        },
        plugins,
        performance: IS_PROD && {
            maxAssetSize: 2000000,
            maxEntrypointSize: 2000000,
            hints: 'warning'
        },
        stats: {
            colors: {
                green: '\u001b[32m'
            }
        },
        devServer: {
            contentBase: './src',
            historyApiFallback: true,
            port: 3000,
            compress: IS_PROD,
            inline: !IS_PROD,
            hot: !IS_PROD,
            stats: {
                assets: true,
                children: false,
                chunks: false,
                hash: false,
                modules: false,
                publicPath: false,
                timings: true,
                version: false,
                warnings: true,
                colors: {
                    green: '\u001b[32m'
                }
            }
        }
    };
};
