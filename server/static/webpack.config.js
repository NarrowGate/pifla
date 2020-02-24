module.exports = {
    entry: {
        home: './js/home.js',
        about: './js/about.js'
    },
    output: {
        path: __dirname + '/dist',
        filename: "[name].bundle.js"
    }
}