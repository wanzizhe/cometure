requirejs.config({
    paths: {
        jquery: 'jquery-1.11.2'
    }
});
define(["jquery"],function($){
    function Second(settings){
        this.defaulstSettings={
            width: 500,
            height: 400,
            title: "我的弹出层",
            content: ""
        };
        $.extend(this.defaulstSettings,settings);
        this.$container=$('<div class="container"></div>');
        this.$box=$(' <div class="box"></div>');
        this.$title=$('<div class="title"></div>');
        this.$word=$('<div class="word">弹出层</div>');
        this.$close=$('<div class="close">[X]</div>');
        this.$content=$('<div class="content"></div>');
    }
    Second.prototype.open=function(){
        this.$container.append(this.$box).append(this.$content).appendTo(document.body);
        this.$box.append(this.$title).append(this.$content);
        this.$title.append(this.$word).append(this.$close);
        this.$box.css({
            width: this.defaulstSettings.width,
            height: this.defaulstSettings.height
        });
        this.$word.html(this.defaulstSettings.title);
        if(this.defaulstSettings.content.indexOf(".html") != -1){
            this.$content.load(this.defaulstSettings.content);
        }else{
            this.$content.html(this.defaulstSettings.content);
        }
        var that=this;
        this.$close.on("click",function(){
            that.close();
        });
    };
   Second.prototype.close = function(){
        this.$container.remove();
    };
    return Second;

});
