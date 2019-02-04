requirejs.config({
    paths : {
        jquery: "jquery-1.11.2"
    }
});
define(["jquery"],function($){
    function Carousel(settings) {
        this.defaultSettings = {
            selector: document.body,
            imgArr: [],
            speed: 500,
            buttonStyle: "square",//circle
            arrowsPos: "bottom"//center
        };
        $.extend(this.defaultSettings, settings);
        this.$container = $('<div class="carousel-container"></div>');
        this.$imgs = $('<div class="carousel-imgs"></div>');
        this.$nav = $('<ul class="carousel-nav"></ul>');
        this.$arrows = $('<div class="carousel-arrows"></div>');
        this.$left = $('<div class="carousel-left">&lt;</div>');
        this.$right = $('<div class="carousel-right">&gt;</div>');
    }

    Carousel.prototype.init=function(){
        this.nowIndex = 0;
       this.$container.append(this.$imgs).append(this.$nav).append(this.$arrows);
       this.$arrows.append(this.$left).append(this.$right);
        //将照片和数字序号遍历到结构里
        for(var i=0;i<this.defaultSettings.imgArr.length;i++){
            this.$imgs.append("<img src='"+ this.defaultSettings.imgArr[i] +"'>");
            this.$nav.append("<li>"+ (i + 1) +"</li>");
        }
        //初始状态  照片为第一个显示 数字第一个为橘黄
       this.$imgs.eq(0).addClass("selected");
       this.$nav.eq(0).addClass("selected");
        //如果按钮形状为圆  将方块变为圆然后内容清空
        if(this.defaultSettings.buttonStyle=="circle"){
            $("li",this.$nav).css({
                borderRadius:"50%"
            }).html("");
        }
        this.$left.addClass(this.defaultSettings.arrowsPos);
        this.$right.addClass(this.defaultSettings.arrowsPos);

        $(this.defaultSettings.selector).append(this.$container);
        $("li",this.$nav).on("mouseover",function(e){
            this.nowIndex=$(e.target).index();
            changeImg.call(this);
        }.bind(this));


        this.$left.on("click", function(){
            this.nowIndex--;
            if(this.nowIndex == -1){
                this.nowIndex = this.defaultSettings.imgArr.length - 1;
            }
            changeImg.call(this);
        }.bind(this));

        this.$right.on("click", function(){
            this.nowIndex++;
            if(this.nowIndex == this.defaultSettings.imgArr.length){
                this.nowIndex = 0;
            }
            changeImg.call(this);
        }.bind(this));


        this.$container.hover(function(){
            clearInterval(this.timer);
        }.bind(this),function(){
            play.call(this);
         }.bind(this));
        play.call(this);

        function play(){
            this.timer=setInterval(function(){
                this.$right.trigger("click");
            }.bind(this),this.defaultSettings.speed);
        }

        function changeImg(){
            $("li", this.$nav).eq(this.nowIndex).addClass("selected").siblings().removeClass("selected");
            $("img", this.$imgs).eq(this.nowIndex).addClass("selected").siblings().removeClass("selected");
        }
    };
    return Carousel;
});