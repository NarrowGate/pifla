
const VueLoaderPlugin = require('vue-loader/lib/plugin');


module.exports = {

    mode: 'development',

    entry: {
        home: './js/home.js',
        about: './js/about.js',
        todolist: './js/to-do-list.js'
    },

    output: {
        path: __dirname + '/dist',
        filename: "[name].bundle.js"
    },

    resolve: {
        alias: {
            'vue$': 'vue/dist/vue.esm.js'
        },
        extensions: ['*', '.js', '.vue', '.json']
    },

    module: {
        rules: [
            {
                test: /\.vue$/,
                loader: 'vue-loader'
            }
        ]
    },

    plugins: [
        new VueLoaderPlugin()
    ],

watch: true

// watchOptions: {
//     aggregateTimeout: 1000,
//     poll: true
// }


}