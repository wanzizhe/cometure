// folktale 中的 compose(等同于lodash中的flowRight函数) curry
const { compose, curry} = require('folktale/core/lambda');
const { first, toUpper} = require('lodash/fp');

//第一个参数是第二个函数参数的个数，第二个是函数参数
let f = curry(2, (x, y) => {
    return x + y;
});

console.log(f(1, 2));
console.log(f(1)(2))

//把一个数组中的第一个值取出来转换成大写
let res = compose(toUpper, first);
console.log(res(['aaaa', 'bbbb', 'cccc']), 'res');