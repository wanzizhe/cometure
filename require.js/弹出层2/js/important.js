requirejs.config({
    paths: {
        jquery: 'jquery-1.11.2'
    }
});
require(["jquery","define"],function($,Define){
    $("#btn").on("click",function(){
        var settings={
            width:600,
            height:300,
            title:"注册",
            content:"login.html"
        };
       var define=new Define(settings);
        define.open();
    });
});
