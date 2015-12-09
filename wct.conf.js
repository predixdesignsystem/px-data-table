module.exports = {
    verbose: true,
    plugins: {
        local: {
            browsers: ['chrome']
        },
        sauce: {
            disabled: true
        }
    },
    suites: ['test/px-data-table-fixture-detail.html']
};
