// 把一个字符串首字母提取并转换成大写，使用. 作为分隔符
// world wild web ==> W. W. W

const fp = require('lodash/fp');

// const res = fp.flowRight(fp.join('. '), fp.map(fp.first), fp.map(fp.toUpper), fp.split(' '));

//将两个都需要map的函数进行合并
const res = fp.flowRight(fp.join('. '), fp.map(fp.flowRight(fp.first, fp.toUpper)), fp.split(' '));

console.log(res('world wild web'));