requirejs.config({
    paths: {
        jquery: 'jquery-1.11.2'
    }
});
require(["jquery","second"],function($,Second){
    $("#btn").on("click",function(){
        var settings = {
            width: 300,
            height: 300,
            title: "弹出层",
            content: "login.html"
        };
        var dialog = new Second(settings);
        dialog.open();
});
});
