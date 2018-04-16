requirejs.config({
    paths: {
        jquery: "jquery-1.11.2"
    }
});
define(["jquery"], function () {
    return {
        open: function (settings) {
            var defaulstSettings = { //如果没传值的默认参数
                width: 500,
                height: 400,
                title: "弹出层",
                content: ""
            }
            // 合并参数
            $.extend(defaulstSettings, settings);
            //dom结构动态生成
            var html = '<div class="dialog-container">' +
                '<div class="dialog-mask"></div>' +
                '<div class="dialog-box">' +
                '<div class="dialog-title">' +
                '<div class="dialog-item">' + defaulstSettings.title + '</div>' +
                '<div class="dialog-close">[X]</div>' +
                '</div>' +
                '<div class="dialog-content"></div>' +
                '</div>' +
                '</div>'
            $("body", "html").append(html);
            $(".dialog-box").css({
                width: defaulstSettings.width,
                height: defaulstSettings.height
            });
            if (defaulstSettings.content.indexOf(".html") != -1) {
                $(".dialog-content").load(defaulstSettings.content);
            } else {
                $(".dialog-content").html(defaulstSettings.content);
            }
            $(".dialog-close").on("click",function(){
                // $(".dialog-container").remove();
                $(this).parents(".dialog-container").remove();
            });
        }
    };
});