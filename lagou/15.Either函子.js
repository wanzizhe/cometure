class Left {
    static of (value) {
        return new Left(value);
    }
    constructor (value) {
        this._value = value
    }
    map (fn) {
        return this;
    }
}

class Right {
    static of (value) {
        return new Right(value);
    }
    constructor (value) {
        this._value = value
    }
    map(fn) {
        return Right.of(fn(this._value));
    }
}

let res1 = Left.of(12).map(x => x + 2);
let res2 = Right.of(12).map(x => x + 3);

console.log(res1, 'res1');
console.log(res2, 'res2');