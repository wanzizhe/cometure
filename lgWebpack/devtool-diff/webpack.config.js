const HtmlWebpackPlugin = require('html-webpack-plugin')

const allModes = [
  'eval',
  'cheap-eval-source-map',
  //'cheap-module-eval-source-map'选择这个理由：
  //运用框架，需要调试没有经过loader转换之前的代码，运用cheap是不需要错误问题具体到列，可以提高构建速度
  'cheap-module-eval-source-map',
  'eval-source-map',
  'cheap-source-map',
  'cheap-module-source-map',
  'inline-cheap-source-map',
  'inline-cheap-module-source-map',
  'source-map',
  //'inline-source-map',它跟普通的 source-map 效果相同，只不过这种模式下 Source Map 文件
  //不是以物理文件存在，而是以 data URLs 的方式出现在代码中。跟 eval-source-map 一样
  'inline-source-map',
  //'hidden-source-map'我们在开发工具中看不到 Source Map 的效果，但是它也确实生成了 Source Map 文件，
  //这就跟 jQuery 一样，虽然生成了 Source Map 文件，但是代码中并没有引用对应的 Source Map 文件，开发者可以自己选择使用
  'hidden-source-map',
  //'nosources-source-map' 在这个模式下，我们能看到错误出现的位置（包含行列位置），
  //但是点进去却看不到源代码。这是为了保护源代码在生产环境中不暴露
  'nosources-source-map'
]

module.exports = allModes.map(item => ({
  devtool: item, //运用不同的模式进行对比
  mode: 'none',
  entry: './src/main.js',
  output: {
    filename: `js/${item}.js`
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        use: {
          //加配置 babel-loader 的目的是稍后能够辨别其中一类模式的差异。
          //eval没有生成source-map文件，所以只能定位文件路径
          //eval-source-map生成了source-map文件，可以定位到具体文件的具体行列
          //有cheap证明只能定位到行，不能定位到具体的列，构建速度提升很多
          //名字中带module的模式，解析出来的源代码是没有经过loader加工后的结果，和源代码一模一样
          //没带modules的模式，是经过babel-loader处理后的，和源代码有一些差异
          loader: 'babel-loader', 
          options: {
            presets: ['@babel/preset-env']
          }
        }
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      filename: `${item}.html`
    })
  ]
}))
