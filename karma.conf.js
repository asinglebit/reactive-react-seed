const webpack = require('webpack');

module.exports = function(config) {
    config.set({
        browsers: ['Chrome'],
        singleRun: true,
        frameworks: ['jasmine', 'sinon', 'chai'],
        client: {
            chai: {
                includeStack: true
            }
        },
        files: [
            './src/**/*.spec.js'
        ],
        preprocessors: {
            './src/**/*.spec.js': ['webpack', 'sourcemap']
        },
        reporters: ['progress', 'html', 'coverage'],
        webpack: {
            devtool: 'source-map',
            module: {
                rules: [{
                    test: /\.(js|jsx)$/,
                    exclude: /node_modules/,
                    loader: 'babel-loader',
                    enforce: 'pre'
                }, {
                    test: /\.scss$/,
                    loader: 'null-loader',
                    enforce: 'pre'
                }, {
                    test: /\.js$/,
                    exclude: /(test|node_modules)\//,
                    loader: 'istanbul-instrumenter-loader',
                    query: {
                        esModules: true
                    },
                    enforce: 'post'
                }]
            }
        },
        htmlReporter: {
            outputDir: 'reports',
            templatePath: null,
            focusOnFailures: true,
            namedFiles: true,
            pageTitle: null,
            urlFriendlyName: false,
            preserveDescribeNesting: false,
            foldAll: false
        },
        coverageReporter: {
            reporters: [{
                type: 'html',
                dir: 'coverage/'
            }, {
                type: 'text-summary'
            }, {
                type: 'text'
            }]
        }
    });
};
