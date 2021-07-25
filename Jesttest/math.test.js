// function expect (result) {
//     return {
//         toBe: function (actual) {
//             if(result !== actual){
//                 throw new Error(`预期结果和实际值不一样，预期的是${actual}，实际结果是${result}`)
//             }
//         }
//     }
// }

// function test (desc, fn) {
//     try{
//         fn()
//         console.log(`${desc}测试通过`);
//     }catch(e) {
//         console.log(`${desc}测试失败，${e}`);
//     }
// }   

// test('测试add方法中的 1 + 2', () => {
//     expect(add(1,2)).toBe(5)
// })


// const math = require('./math.js');
// const {add, minus, multi} = math;

import {add, minus, multi} from './math.js'

test('测试add方法中的 1 + 2', () => {
    expect(add(1,2)).toBe(3)
})

test('测试minus方法中的 2 - 2', () => {
    expect(minus(2,2)).toBe(0)
})

test('测试multi方法中的 1 * 2', () => {
    expect(multi(1,2)).toBe(2)
})
