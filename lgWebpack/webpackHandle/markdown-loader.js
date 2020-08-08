const marked = require('marked');
module.exports = source => {
    //source就是.md文件里面的内容
    console.log(source);
    //html字符串
    const html = marked(source);
    //返回值就是最终被打包的内容，应该是一段js代码
    // return 'hello makrdown loader';
    // return 'console.log("hello makrdown loader")';

    //用JSON.stringify可以将字符串转化成标准的JSON字符串，这样里面的换行符什么的可以识别
    //字符串拼接成js代码
    const code = `export default ${JSON.stringify(html)}`;
    return code;
}