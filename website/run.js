const config = require('./webpack.config');
const webpack = require('webpack');
debugger
const compiler = webpack(config);
compiler.run((err,stat)=>{
    console.log(stat.toJson())
})