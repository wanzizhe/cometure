
const path = require('path');
const {CleanWebpackPlugin} = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
module.exports = {
    entry: './src/main.js', //./不可以省略
    output: {
        filename: 'bundle.js',
        path: path.join(__dirname, 'output'),
      },
    mode: 'none',
    module: {
        rules:[
            // css-loader只会把css模块加载到js代码中，而并没有使用这个模块
            //style-loader会应用刚刚的模块
            {
               test: /\.css$/ ,
               //同一个模块使用多个loader需要注意顺序，是从后往前去执行的
               use: [
                   'style-loader',
                   'css-loader'
                ]
            },
            {
                test: /\.md$/,
                use: './markdown-loader'
            }
        ]
    },
    plugins: [
        //每次打包之后都将之前的全删除，放入最新打包好的文件
        new CleanWebpackPlugin(),
        //HtmlWebpackPlugin在打包后的文件夹中生成html文件，并且自动引入打包后的js文件
        //HtmlWebpackPlugin可以引入html模板，通过参数配置相关的可配置项，通过参数filename生成多个html文件
        //不用这个插件，每次打包后的只有js文件，还需要维护外面的html文件和打包后的js文件两个文件
        new HtmlWebpackPlugin({
            title: 'wanzizheHymlWebpackPlugin',
            // meta:{
            //     viewport:'width=device-width'
            // }
            template: './src/index.html'
        }),
        new HtmlWebpackPlugin({
            filename: 'about.html'
        }),
        //CopyWebpackPlugin将webpack打包后需要一并复制的文件（静态资源文件，icon）放在输出目录中
        new CopyWebpackPlugin({
            patterns: [{
                from: 'static/1.jpeg',
                to: 'output'
            }]
        })
    ]
}