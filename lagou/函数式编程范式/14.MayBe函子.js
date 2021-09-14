// MayBe函子，可以处理外部传入空值的情况
class MayBe {
    static of (value) {
        return new MayBe(value)
    }
    constructor(value){
        this._value = value;
    }
    map (fn) {
        return this.isnothing() ? MayBe.of(null) : MayBe.of(fn(this._value));
    }
    isnothing () {
        return this._value === undefined || this._value === null
    }
}

let res = MayBe.of(5)
            .map(x => x + 1);
console.log(res, 'res')

let res2 = MayBe.of(null)
            .map(x => x.toUpperCase());
console.log(res2, 'res2')

//怎么确定具体是哪一步传入了null？？？
let res3 = MayBe.of(6)
            .map(x => x + 1)
            .map(x => null)
            .map(x => x * x)
console.log(res3, 'res3')