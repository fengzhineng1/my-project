const express = require('express');
const webpack = require('webpack');
const webpackDevMiddleware = require('webpack-dev-middleware');

const app = express();
const config = require('./webpack.dev.js')
const compiler = webpack(config)
console.log(process.env.NODE_ENV)

app.use(webpackDevMiddleware(compiler,{
    publicPath: config.output.publicPath
}))

app.listen(3003,function(){
    console.log('example:::')
})