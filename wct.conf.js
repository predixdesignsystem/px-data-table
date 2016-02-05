module.exports = {
    verbose: true,
    plugins: {
        local: {
            browsers: ['chrome', 'firefox']
        },
        sauce: {
            disabled: true
        }
    },
    suites: [
      'test/px-data-table-test-suite.html'
    ]
};
