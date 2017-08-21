const Merge = require('webpack-merge')
const CommonConfig = require('./webpack.config.js')
const path = require('path')

module.exports = Merge(CommonConfig,{
    devtool: 'inline-source-map',
    devServer: {
        contentBase: path.join(__dirname, "dist"),
        compress: true,
        port: 9000,
        // hot: true     
    },
    plugins: [
        new webpack.DefinePlugin({
            'process.env.NODE_ENV': JSON.stringify('development')
        })
    ]
})