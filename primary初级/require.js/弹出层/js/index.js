requirejs.config({
    paths: {
        jquery: 'jquery-1.11.2'
    }
});
require(["jquery","first"],function($,first){   //require为入口文件
          $("#btn").on("click",function(){
              var settings = {
                   width: 500,
                   height: 300,
                   title: "弹出层",
                  content: "login.html"
              };
               first.open(settings);
          });
});