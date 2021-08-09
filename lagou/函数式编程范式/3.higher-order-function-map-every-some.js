// map函数

// const map = (arr, fn) => {
//     let res = [];
//     for(let i = 0; i < arr.length; i ++){
//         res.push(fn(arr[i]));
//     }
//     return res;
// }

const map = (arr, fn) => {
    let res = [];
    for(let v of arr){
        res.push(fn(v));
    }
    return res;
}

let arr = [1,2,3,4];
let mapArr = map(arr, (i) => i * i);
console.log(mapArr, 'mapArr');


// every函数
// function every (arr, fn) {
//     for(let i = 0; i < arr.length; i ++){
//         if(fn(arr[i])){
//             return true;
//         };
//     }
// }

const every = (arr, fn) => {
    let res = true;
    for(let v of arr){
        res = fn(v);
        if(!res){
            break
        }
    }
    return res;
}
const everyArr = every(arr, (item) => item > 3);
console.log(everyArr, 'everyArr')



// some函数
const some = (arr, fn) => {
    let res = false;
    for(let v of arr){
        res = fn(v);
        if(res){
            break
        }
    }
    return res;
}
const someArr = some(arr, (item) => item > 3);
console.log(someArr, 'someArr')
