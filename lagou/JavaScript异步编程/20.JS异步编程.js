console.log('1')
setTimeout(function time1 () {
    console.log('2');
}, 1000)
setTimeout(function time2 () {
    console.log('3');
    setTimeout(function time3 () {
        console.log('4');
    }, 1000)
}, 1000)
console.log('5')