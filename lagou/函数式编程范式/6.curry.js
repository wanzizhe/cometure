//改造 checkAge 函数
function checkAge(age) {
    let min = 18;
    return age >= min;
}

// 普通纯函数
// function checkAge (min, age) {
//     return age >= min;
// }
// console.log(checkAge(18, 10));
// console.log(checkAge(18, 20));


// 柯里化方式
// function checkAge(min) {
//     return function (age) {
//         return age >= min;
//     }
// }
// let checkAge18 = checkAge(18);
// let checkAge20 = checkAge(20);

// console.log(checkAge18(10));
// console.log(checkAge18(20));
// console.log(checkAge20(10));

// ES6
checkAge = min => (age => age >= min);

let checkAge18 = checkAge(18);
let checkAge20 = checkAge(20);

console.log(checkAge18(10));
console.log(checkAge18(20));
console.log(checkAge20(10));
