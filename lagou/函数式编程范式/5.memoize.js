// 纯函数相同的输入返回相同的输出，所有可以对相同的输出进行缓存
const _ = require('lodash');

function circle (r) {
    console.log(r, 'r')//这里只执行了一次输出，证明对于相同的值进行了缓存
    return Math.PI * r * r;
}

// let memoCircle = _.memoize(circle);

// //调用了三次
// console.log(memoCircle(10));
// console.log(memoCircle(10));
// console.log(memoCircle(10));

//封装下memoize方法
function memoize (fn) {
    let obj = {};
    return function (...args) {
        console.log(args, 'args')
        console.log(arguments, 'arguments')
        let key = JSON.stringify(args);
        obj[key] = obj[key] || fn.apply(fn, args);
        return obj[key];
    }
}
let memoCircle = memoize(circle);
//调用了三次
console.log(memoCircle(10));
console.log(memoCircle(10));
console.log(memoCircle(10));


