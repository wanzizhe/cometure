requirejs.config({
    paths: {
        jquery: 'jquery-1.11.2'
    }
});
define(["jquery"],function($){
    return {
        open:function(settings){
            var defaulstSettings={
                width: 500,
                height: 400,
                title: "我的弹出层",
                content: ""
            };
            $.extend(defaulstSettings,settings);
            var html='<div class="container">'+
            ' <div class="box">'+
                    '<div class="title">'+
                    '<div class="word">弹出层</div>'+
                    '<div class="close">[X]</div>'+
                    '</div>'+
                    '<div class="content"></div>'+
                    '</div>'+
                    '</div>';
            $(document.body).append(html);
            $(".box").css({
                width:defaulstSettings.width,
                height:defaulstSettings.height
            });
            if(defaulstSettings.content.indexOf(".html")!=-1){
                $(".content").load(defaulstSettings.content);
            }else{
                $(".content").html(defaulstSettings.content);
            }
            $(".close").on("click",function(){
                $(this).parents(".container").remove();
            });
        }

    };
});