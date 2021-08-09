// lodash中的方法和lodash的fp模块对比

// lodash中的方法，变量在前，函数在后（数据优先，函数在后）
const _ = require('lodash');
const arr = ['A', 'B', 'C'];
let arrL = _.map(arr, _.toLower);
console.log(arrL, 'arrL');
let arrL2 = _.map(arr);
console.log(arrL2, 'arrL2');

//lodash的fp模块，里面的函数都是柯里化之后的
const fp = require('lodash/fp');
const arrLFP = fp.map(fp.toLower)(arr);
console.log(arrLFP, 'arrLFP');
const arrLFP2 = fp.map(fp.toLower, arr);
console.log(arrLFP2, 'arrLFP2');

//改造之前的函数

const f = fp.flowRight(fp.join('-'), fp.map(_.toLower), fp.split(' '));
console.log(f('NEVER SAY DIE'), 'NEVER SAY DIE');

// lodash和lodash/fp模块中map方法的区别
//lodash中的map第二个函数参数接收三个参数（数组每一项，索引，整个数组）
console.log(_.map(['1', '2', '3'], parseInt))
//fp中的map第一个函数参数只接受一个参数
console.log(fp.map(parseInt, ['1', '2', '3']))