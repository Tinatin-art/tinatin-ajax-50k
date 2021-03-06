"use strict";

const path = require('path');

module.exports = {
    mode: 'development',
    entry: './index.js',
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'dist'),
    },

    watch: true,
    devtool: "source-map",

    module: {}
};