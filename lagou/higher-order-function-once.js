function once (fn) {
    let flag = false;
    return function (arg) {
        if(!flag){
            flag = true;
            fn(arg);
        }
    }
}

let pay = once (function (money) {
    console.log(`支付了${money}`)
})
pay(5)
pay(5)
pay(5)