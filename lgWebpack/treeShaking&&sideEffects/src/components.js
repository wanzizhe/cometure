export const Button = () => {
    return document.createElement('button');
    // 未引用代码
    console.log('dead-code');
}
// 未引用代码
export const Link = () => {
    return document.createElement('a')
}
// 未引用代码
export const Heading = level => {
return document.createElement('h' + level)
}
//去除冗余代码是生产环境优化的重要工作，webpack的tree-shaking就可以实现这一个功能
//打包后，components 模块中冗余的代码根本没有输出。这就是经过 Tree-shaking 处理过后的效果。
//很多外部引用的第三方库（Lodash）只用几个常用的工具函数，其他部分都是冗余代码，
//tree-shaking极大的减少了打包后的文件体积