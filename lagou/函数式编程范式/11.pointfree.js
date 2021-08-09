// Point Free: 我们可以把数据处理的过程定义成与数据无关的合成运算，不需要用到代表数据的那个参数
// 只要把简单的运算步骤合成到一起，在使用这种模式之前我们需要定义一些辅助的基本函数
// 1.不需要指明处理的数据
// 2.只需要合成运算过程
// 3.需要定义一些辅助的基本运算函数

//将Hello   World转化成  hello_world

const fp = require('lodash/fp');
const f = fp.flowRight(fp.replace(/\s+/g, '_') , fp.toLower);

console.log(f('Hello   World'));