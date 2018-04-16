// 只有支持AMD模块的文件才会被require引入
requirejs.config({
    paths:{
        jquery:"jquery-1.11.2"//把全名写在这里，赋值给jquery(完全不可改变)
    }
});
require(["jquery","dialog"],function($,Dialog){//这里引入上面的jquery，函数中返回的参数，可写可不写
    $("#btn").on("click",function(){
        var settings = {//定义成对象，方便添加删除属性，以及解决的实参与形参不对应问题
            width:800,
            height:300,
            title:"我的弹出层",
            content:"login.html"
        };
        //dialog.open(settings);//这让更直观，所以dialog要返回一个对象并且对象中有一个open方法
        var dialog = new Dialog(settings);
        dialog.open();
    });
});

// require(["jquery-1.11.2"],function(){//文件引入为全名的时候，函数中无需写返回的参数
//     $("#btn").on("click",function(){
//         alert(123);
//     });
// });