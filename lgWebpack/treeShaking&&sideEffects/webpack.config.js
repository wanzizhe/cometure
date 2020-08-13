
const path = require('path');
const {CleanWebpackPlugin} = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
module.exports = {
    entry: './src/main.js', //./不可以省略
    output: {
        filename: 'bundle.js',
        path: path.join(__dirname, 'output'),
      },
    mode: 'none',
    devServer:{
        contentBase: 'static',
    },
    // optimization属性中集中配置了webpack的内置优化功能
    optimization: {
        //输出结果中只导出外部使用了的成员，未使用的也会导出，但是没使用，用minimize可以自动压缩掉这些没有用到的代码
        usedExports: true,//标记树上的枯树枝枯树叶
        //普通打包只是将一个模块最终放入一个单独的函数中，如果我们的模块很多，就意味着在输出结果中会有很多的模块函数。
        //concatenateModules 配置的作用就是尽可能将所有模块合并到一起输出到一个函数中，这样既提升了运行效率，又减少了代码的体积。
        // 尽可能合并每一个模块到一个函数中
        concatenateModules: true,
        //压缩打包结果
        minimize: false//负责把枯树枝和枯树叶摇下来，
    },
    module: {
        rules:[
            {
               test: /\.css$/ ,
               use: [
                   'style-loader',
                   'css-loader'
                ]
            },
            //首先你需要明确一点：Tree-shaking 实现的前提是 ES Modules，
            //也就是说：最终交给 Webpack 打包的代码，必须是使用 ES Modules 的方式来组织的模块化。
            //最新版本的 babel-loader 并不会导致 Tree-shaking 失效。
            //如果你不确定现在使用的 babel-loader 会不会导致这个问题，
            //最简单的办法就是在配置中将 @babel/preset-env 的 modules 属性设置为 false，
            //确保不会将 ES Modules 转化成 commonJS，也就确保了 Tree-shaking 的前提。
            {
                test: /\.js$/,
                use: {
                  loader: 'babel-loader',
                  options: {
                    presets: [
                      ['@babel/preset-env', { modules: false }] //可以设置modules: 'commonjs'这样tree-shaking就会失效
                    ]
                  }
                }
              }
        ]
    },
    plugins: [
        new CleanWebpackPlugin(),
        new HtmlWebpackPlugin({
            template: './src/index.html'
        }),
    ]
}