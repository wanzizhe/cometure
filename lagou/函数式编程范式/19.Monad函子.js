const fp = require('lodash/fp');
const fs = require('fs');

//定义IO函子
class IO {
    static of (x) {
        return new IO(function (){
            return x
        })
    }
    constructor (fn) {
        this._value = fn;
    }
    //fn为传入的 p => p.execPath 函数，this._value为传入of的process参数返回的函数
    map (fn) {
        return new IO(fp.flowRight(fn, this._value))
    }
}

// 先定义一个读取文件函数
let readFile = function (fileName) {
    return new IO (function () {
        return fs.readFileSync(fileName, 'utf-8');
    })
}

//定义一个打印函数
let print = function (x) {
    return new IO (function () {
        console.log(x);
        return x;
    })
}

let res = fp.flowRight(print, readFile);
//(res('package.json')返回的是一个IO函子包裹一个IO函子 IO(IO(x))
console.log(res('package.json')._value()._value()) //调用起来很不方便