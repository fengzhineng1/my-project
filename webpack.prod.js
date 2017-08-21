const Merge = require('webpack-merge')
const CommonConfig = require('./webpack.config.js')
const webpack = require('webpack')

module.exports = Merge(CommonConfig,{
    plugins: [
        new webpack.optimize.UglifyJsPlugin({
            output: {
                comments: false
            },
            warnings: false
        })
    ]
})