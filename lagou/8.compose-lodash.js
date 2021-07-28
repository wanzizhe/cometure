const _ = require('lodash');

const toUpper = s => s.toUpperCase();
const reverse = arr => arr.reverse();
const first = arr => arr[0];

// const compose = _.flowRight(toUpper, first, reverse);

// console.log(compose(['aaa', 'bbb', 'ccc']));

//封装flowRight函数

// function compose (...args) {
//     return function (value) {
//         return args.reverse().reduce(function (res, fn) {
//             return fn(res);
//         }, value)
//     }
// }

const compose = (...args) => value => (args.reverse().reduce((res, fn) => fn(res), value))

const myCompose = compose(toUpper, first, reverse);

console.log(myCompose(['aaa', 'bbb', 'ccc']));

