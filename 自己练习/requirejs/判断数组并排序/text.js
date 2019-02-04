//require写法
// 入口文件依赖于sort.js
// require(["sort"],function(sort){
//     // var arr = [1,4,5,3];
//     var arr = "svdearvgs";
//     console.log(sort(arr));
// });

//seajs写法
define(function(require){
    var arr = [1,5,3,8];
    var sort = require("sort");
    console.log(sort(arr));
});

//AMD(Asynchronization Module Definition)  异步模块定义  requirejs提出的  依赖前置
//CMD(Common Module Definition)  通用模块化定义  seajs提出的  依赖就近
//
//
//
//