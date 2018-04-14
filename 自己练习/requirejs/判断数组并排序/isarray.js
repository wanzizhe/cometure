// 判断数组的方式：
//arr.constructor返回的是Array构造函数
// arr instanceof Array  返回true
define([], function () {
    function isArray(arr) {
        if (arr.constructor == Array && arr instanceof Array) {
            return true;
        }
        return false;
    }
    return isArray;//只有return之后，在sort模块中才能调用
});