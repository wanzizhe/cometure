// Functor 函子
// class Container {
//     //value是包含在内部的不对外公布的，私有的
//     constructor (value) {
//         this._value = value
//     }
//     //map方法是一个处理值（value）的函数，返回一个函子
//     map (fn) {
//         return new Container(fn(this._value))
//     }
// }

// let res = new Container(5)
//     .map(x => x + 1)
//     .map(x => x * x)

// console.log(res, 'res'); //Container { _value: 36 } 'res',返回的是一个新的函子对象

class Container {
    //为了避免去new一个对象，因为这样很面向对象，封装了of方法
    static of (value) {
        return new Container(value)
    }
    constructor (value) {
        this._value = value
    }
    map (fn) {
        return Container.of(fn(this._value))
    }
}

let res = Container.of(5)
    .map(x => x + 2)
    .map(x => x * x)

console.log(res, 'res2');//Container { _value: 49 } 'res2'

//如果传入了 null或者undefined怎么办？？？
Container.of(null)
    .map(x => x.toUpperCase());//这里是会报错的，因为null没有toUpperCase的方法，引出了MagBe函子
