class RemoveCommentsPlugin {
    apply (compiler) {
        //emit钩子会在webpack即将向输出目录输出文件时执行，tap注册钩子函数，
        //两个参数，第一个是插件的名称，第二个是挂载在钩子上的函数
      compiler.hooks.emit.tap('RemoveCommentsPlugin', compilation => {
        // compilation => 可以理解为此次打包的上下文
        for (const name in compilation.assets) {
            //只对js文件起作用
          if (name.endsWith('.js')) {
            const contents = compilation.assets[name].source()//文件内容
            const noComments = contents.replace(/\/\*{2,}\/\s?/g, '')
            compilation.assets[name] = {
              source: () => noComments,
              size: () => noComments.length
            }
          }
        }
      })
    }
  }
module.exports = RemoveCommentsPlugin;