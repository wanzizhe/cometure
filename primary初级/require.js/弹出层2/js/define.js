requirejs.config({
    paths: {
        jquery: 'jquery-1.11.2'
    }
});
define(["jquery"],function($){
    function Define(settings) {
        this.defaultSettings = {
            width: 500,
            height: 400,
            title: "my弹出层",
            content: ""
        };
        $.extend(this.defaultSettings, settings);
        this.$container = $('<div class="container"></div>');
        this.$box = $('<div class="box"></div>');
        this.$title = $('<div class="title"></div>');
        this.$word =$( '<div class="word">My弹出层</div>');
        this.$close =$( ' <div class="close">[X]</div>');
        this.$content=$('<div class="contain"></div>');
    }
    Define.prototype.open=function(){
        this.$container.append(this.$box).appendTo(document.body);
        this.$box.append(this.$title);
        this.$title.append(this.$word).append(this.$close);
        this.$box.css({
            width:this.defaultSettings.width,
            height:this.defaultSettings.height
        });
        this.$word.html(this.defaultSettings.title);
        if(this.defaultSettings.content.indexOf(".html")!=-1){
            this.$content.load(this.defaultSettings.content);
        }else{
            this.$content.html(this.defaultSettings.content);
        }
        this.$close.on("click",function(){
            this.close();
        }.bind(this));
    };
    Define.prototype.close=function(){
        this.$container.remove();
    };
    return Define;
});