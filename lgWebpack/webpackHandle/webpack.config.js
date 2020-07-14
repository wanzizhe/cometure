
const path = require('path');
module.exports = {
    entry: './src/main.js', //./不可以省略
    output: {
        filename: 'bundle.js',
        path: path.join(__dirname, 'output'),
      },
    mode: 'none'

}