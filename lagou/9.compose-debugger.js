const _ = require('lodash');

// 将 NEVER SAY DIE 转化为 never-say-die

//用空格将字符串进行分割
const split = _.curry((sep, str) => _.split(str, sep));

//转换成小写
// _.toLower

//用-分隔
const join = _.curry((sep, arr) => _.join(arr, sep));

//debugger函数
const debug = _.curry((desc, v) => {
    console.log(`${desc}------${v}`);
    return v;
})

//debug后发现toLower后是个字符串，需要转化成数组
const map = _.curry((fn, arr)=> _.map(arr, fn));

const f = _.flowRight(join('-'), debug('map返回结果'), map(_.toLower) , debug('split返回结果'), split(' '));

console.log(f('NEVER SAY DIE'));