function ajax (url) {
    return new Promise(function (resolve, rejected) {
        let xhr = new XMLHttpRequest();
        xhr.open('GET', url);
        xhr.responseType = 'json';
        xhr.onload = function () {
            if(this.status === 200){
                resolve(this.response)
            }else{
                rejected(new Error(this.statusText))
            }
        }
        xhr.send();
    })
}

// ajax('./promise.json').then((res)=> {
//     console.log(res, 'res')
// }, (error)=> {
//     console.log(error, 'error')
// })

ajax('./promise.json')
    .then((res)=> {
        console.log(res, 'res1');
        return ajax('./promise.json')
    })
    .then((res)=> {
        console.log(res, 'res2')
        return ajax('./promise.json')
    })
    .then((res)=> {
        console.log(res, 'res3')
        return 'res'
    })
    .then((res)=> {
        console.log(res, 'res4')
    })