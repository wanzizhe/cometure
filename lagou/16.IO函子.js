// IO函子中的_value是一个函数，把函数作为值来处理
const fp = require('lodash/fp');
class IO {
    static of (x) {
        return new IO(function (){
            return x
        })
    }
    constructor (fn) {
        this._value = fn;
    }
    map (fn) {
        return new IO(fp.flowRight(fn, this._value))
    }
}

let io = IO.of(process).map(p => p.execPath)
console.log(io._value(), 'io')

// const fp = require('lodash/fp') 
// class IO {
//     static of (x) {
//     return new IO(function () {
//     return x })
//     }
//     constructor (fn) {
//     this._value = fn }
//     map (fn) {
//     // 把当前的 value 和 传入的 fn 组合成一个新的函数 
//     return new IO(fp.flowRight(fn, this._value))
//     } }
//     let io = IO.of(process).map(p => p.execPath) 
//     console.log(io._value())