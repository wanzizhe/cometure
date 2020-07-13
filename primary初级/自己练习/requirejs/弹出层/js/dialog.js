requirejs.config({
    paths: {
        jquery: "jquery-1.11.2"
    }
});
define(["jquery"], function ($) {
    //定义类
    function Dialog(settings) {
        this.defaulstSettings = { //如果没传值的默认参数
            width: 500,
            height: 400,
            title: "弹出层",
            content: ""
        };
        $.extend(this.defaulstSettings, settings);
        this.$container = $('<div class="dialog-container"></div>');
        this.$mask = $('<div class="dialog-mask"></div>');
        this.$box = $('<div class="dialog-box"></div>');
        this.$title = $('<div class="dialog-title"></div>');
        this.$item = $('<div class="dialog-item"></div>');
        this.$close = $('<div class="dialog-close">[X]</div>');
        this.$content = $('<div class="dialog-content"></div>');
    }
    Dialog.prototype.open = function () {
        this.$container.append(this.$mask).append(this.$box).appendTo(document.body);
        this.$box.append(this.$title).append(this.$content);
        this.$title.append(this.$item).append(this.$close);
        this.$box.css({
            width: this.defaulstSettings.width,
            height: this.defaulstSettings.height
        });
        this.$item.html(this.defaulstSettings.title);
        if (this.defaulstSettings.content.indexOf(".html") != -1) {
            $(this.$content).load(this.defaulstSettings.content);
        } else {
            $(this.$content).html(this.defaulstSettings.content);
        }
        // this.$close.on("click",function(){
        //     this.$container.remove();
        // }.bind(this));
        this.$close.on("click",function(){
            this.close();
        }.bind(this));
    };
    Dialog.prototype.close = function(){
        this.$container.remove();        
    }
    return Dialog;









    // return {
    //     open: function (settings) {
    //         var defaulstSettings = { //如果没传值的默认参数
    //             width: 500,
    //             height: 400,
    //             title: "弹出层",
    //             content: ""
    //         }
    //         // 合并参数
    //         $.extend(defaulstSettings, settings);
    //         //dom结构动态生成
    //         var html = '<div class="dialog-container">' +
    //             '<div class="dialog-mask"></div>' +
    //             '<div class="dialog-box">' +
    //             '<div class="dialog-title">' +
    //             '<div class="dialog-item">' + defaulstSettings.title + '</div>' +
    //             '<div class="dialog-close">[X]</div>' +
    //             '</div>' +
    //             '<div class="dialog-content"></div>' +
    //             '</div>' +
    //             '</div>'
    //         $("body", "html").append(html);
    //         $(".dialog-box").css({
    //             width: defaulstSettings.width,
    //             height: defaulstSettings.height
    //         });
    //         if (defaulstSettings.content.indexOf(".html") != -1) {
    //             $(".dialog-content").load(defaulstSettings.content);
    //         } else {
    //             $(".dialog-content").html(defaulstSettings.content);
    //         }
    //         $(".dialog-close").on("click",function(){
    //             // $(".dialog-container").remove();
    //             $(this).parents(".dialog-container").remove();
    //         });
    //     }
    // };
});