const {merge} = require('webpack-merge');
const common = require('./webpack.base.js');

module.exports = merge(common, {
    mode: 'production',
    entry: {
        main: './src/main.js'
    },
    output: {
        library: {
            type: 'umd',
            export: "default"
        },
        clean: true
    }
});