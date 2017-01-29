const common = require('./karma.common.config.js')

common.browsers = ['PhantomJS', 'Chrome', 'Firefox'];
common.reporters = ['mocha', 'coverage'];
common.autoWatch = true;
common.singleRun = false;

common.coverageReporter = {
    reporters: [{
        type: 'text-summary'
    }, {
        type: 'text'
    }]
};

module.exports = function(config) {
    config.set(common);
}
