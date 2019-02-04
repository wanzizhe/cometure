// sort.js依赖于isarray.js文件
define(["isarray"], function (isArray) {//函数参数接收来自isArray的返回值
    function sort(arr) {
        // 数组升序排列
        if (isArray(arr)) {
            return arr.sort(function (a, b) {
                return a - b;
            });
        }else{
            return "传入的参数不是数组";
        }
    }
    return sort;//把sort返回给text.js，也就是需要用到sort的文件
})
