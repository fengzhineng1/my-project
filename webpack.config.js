const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const CleanWebpackPlugin = require('clean-webpack-plugin')
const ManifestPlugin = require('webpack-manifest-plugin')
const ExtractTextPlugin = require('extract-text-webpack-plugin')
const webpack = require('webpack')

const extractCSS = new ExtractTextPlugin('[name].css')
const cssLoader = ExtractTextPlugin.extract({
    fallback: 'style-loader',
    use: 'css-loader'
})
const lessLoader = ExtractTextPlugin.extract({
    fallback: 'style-loader',
    use: ['css-loader','less-loader']
})

console.log('process.env.NODE_ENV:::',process.env.NODE_ENV)

module.exports = {
    /* 打包的入口*/
    entry: {
        app:'./src/index.js'
    },
    output: {
        filename: process.env.NODE_ENV === 'production' ? '[name].[chunkhash].js':'[name].bundle.js',
        path: path.resolve(__dirname,'dist'),
        publicPath: '/'
    },
    resolve:{
        extensions: ['.js','jsx','json'],
        modules: [path.join(__dirname,'src'), 'node_modules'],
        alias:{

        }
    },
    plugins: [
        new CleanWebpackPlugin(['dist']),
        new HtmlWebpackPlugin({
            title: 'output'
        }),
        extractCSS,
        // new webpack.HotModuleReplacementPlugin()     
    ],
    module: {
        rules:[
            {
                test: /\.css$/,
                use: cssLoader
            },
            {
                test: /\.less$/,
                use: lessLoader
            },
            {
                test: /\.(png|svg|jpg|gif)$/,
                use: [
                    'file-loader'
                ]
            },
            {
                test: /\.js$/,
                use: ['babel-loader'],
                exclude: /node_modules/
            }
        ]
    }
}