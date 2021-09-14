const _ = require('lodash');

//要柯里化的函数
function getSum (a, b, c) {
    return a + b + c;
}

let curried = _.curry(getSum);

// console.log(curried(1, 2, 3));
// console.log(curried(1, 2)(3));
// console.log(curried(1)(2)(3));

const match = _.curry(function (reg, str) {
    return str.match(reg)
})

//检测是否有空格
const haveSpace = match(/\s+/g);
//检测是否有数字
const haveNumber = match(/\d+/g);

console.log(haveSpace('ndjknwae jsdoc sdioa'));

console.log(haveNumber('23kncks445nkjk233'))

// const filter = _.curry(function(func, arr){
//     return arr.filter(func);
// })

// console.log(filter(haveSpace, ['jsjs sjsj', 'sjjsjs_jjwjwj']))

// const findSpace = filter(haveSpace);

// console.log(findSpace(['jsjs sjsj', 'sjjsjs_jjwjwj']));

//实现一个_.curry函数
function curry (func) {
    return function curried (...args) {
        if(args.length < func.length){
            return function () {
                return curried(...args.concat(Array.from(arguments)));
            }
        }
        return func(...args)
    }
}

const filter = curry(function(func, arr){
    return arr.filter(func);
})

console.log(filter(haveSpace, ['jsjs sjsj', 'sjjsjs_jjwjwj']))

const findSpace = filter(haveSpace);

console.log(findSpace(['jsjs sjsj', 'sjjsjs_jjwjwj']));