const promise = new Promise(function(resolve, reject){
    // resolve(100);
    reject(new Error('promise reject'));
})
promise.then((value)=>{
    console.log(value);
}, (error)=> {
    console.log(error);
})