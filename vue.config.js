const path = require('path')
const  webpack = require('webpack')
module.exports = {
    outputDir:'bundle',
    configureWebpack: {
        //在这个对象中可以编写原生webpack配置
        plugins: [
            new webpack.BannerPlugin({
                banner:'琅琊-langteeth'
            })
        ]
    },
    publicPath: './',
    pages: {
        index: {
            entry:'src/main.js',
            template:'public/index.html',
            filename:'index.html',
            title:'score',
            chunks:['chunk-vendors', 'chunk-common','index']
        }


    }
}