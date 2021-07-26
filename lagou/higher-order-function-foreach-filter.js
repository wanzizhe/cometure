function forEach (arr, fn) {
    for(var i = 0; i < arr.length; i ++){
        fn(arr[i]);
    }
}

// let arr = [1,2,3,4];
// forEach(arr, function (item) {
//     console.log(item, 'item');
// })

function filter (arr, fn) {
    let res = [];
    for(var i = 0; i < arr.length; i ++){
        if(fn(arr[i])){
            res.push(arr[i])
        };
    }
    return res
}

let arr = [1,2,3,4];
let arr1 = filter(arr, function (item) {
    return item % 2 === 0
})

console.log(arr1, 'arr1');