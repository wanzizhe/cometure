requirejs.config({
    paths: {
        jquery: 'jquery-1.11.2'
    }
});
require(["jquery","first"],function($,first){   //requireΪ����ļ�
          $("#btn").on("click",function(){
              var settings = {
                   width: 500,
                   height: 300,
                   title: "������",
                  content: "login.html"
              };
               first.open(settings);
          });
});