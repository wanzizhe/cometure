const fp = require('lodash/fp');
const fs = require('fs');

//定义IO函子
// class IO {
//     static of (x) {
//         return new IO(function (){
//             return x
//         })
//     }
//     constructor (fn) {
//         this._value = fn;
//     }
//     //fn为传入的 p => p.execPath 函数，this._value为传入of的process参数返回的函数
//     map (fn) {
//         return new IO(fp.flowRight(fn, this._value))
//     }
// }

class IO {
    static of (x) {
        return new IO(function () {
            return x;
        })
    }
    constructor(fn) {
        this._value = fn;
    }
    map (fn) {
        return new IO (fp.flowRight(fn, this._value));
    }
    //将嵌套函子扁平化
    join () {
        return this._value();
    }
    //同时调用map和join方法
    flatMap (fn) {
        return this.map(fn).join()
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
console.log(res('package.json')._value()._value()) 

//调用起来很不方便，产生了Monad函子，可以将函子嵌套的问题变扁平化（当一个函子返回一个函子的时候，就应该想到monad函子）
//一个函子如果具有join和of两个方法并遵守一些定律就是一个monad函子

let r = readFile('package.json')
            // .map(x => x.toUpperCase())
            .map(fp.toUpper) //返回一个值用map
            .flatMap(print) //返回一个函子用flatMap
            .join()
console.log(r, 'r')