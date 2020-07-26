
const path = require('path');
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
    }
}