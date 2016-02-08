module.exports = {
    verbose: false,
    plugins: {
        local: {
            browsers: ['chrome', 'firefox']
        },
        sauce: {
            disabled: true
        }
    },
    suites: [
      'test/px-data-table-fixture.html'
    ]
};
