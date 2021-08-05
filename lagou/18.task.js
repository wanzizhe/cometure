//Task处理异步，读取package.json文件中的version字段

const fs = require('fs');
const {task} = require('folktale/concurrency/task');
const { find, split } = require('lodash/fp');

function readFile(fileName){
    //resolver提供了resolve和reject方法
    return task(resolver => {
        fs.readFile(fileName, 'utf-8', (err, data) => {
            if (err) resolver.reject(err);
            resolver.resolve(data);
        })
    })
}

readFile('package.json')
    .map(split('\n'))
    .map(find(x => x.includes('version')))
    .run()
    .listen({
        onRejected: err => {
            console.log(err)
        },
        onResolved: value => {
            console.log(value)
        }
    })