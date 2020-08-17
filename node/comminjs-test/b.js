const {sum, mul} = require('./a.js');
const _ = require('lodash');

const num = sum(10, 20);

const num2 = mul(10, 20);

const arr = _.concat([1,2],[3,4]);

console.log(num);
console.log(num2);
console.log(arr, 'arr');