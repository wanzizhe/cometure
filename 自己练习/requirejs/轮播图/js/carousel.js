requirejs.config({
    paths: {
        jquery: "jquery-3.3.1"
    }
});
define(["jquery"], function ($) {
    function Carousel(settings) {
        var defaultSettings = {
            selector: document.body,
            imgArr: [],
            speed: 500,
            buttonStyle: "square", //circle
            arrowsPos: "bottom" //center
        }
        $.extend(this.defaultSettings, settings);
        this.$container = '<div class="carousel-container"></div>';
        this.$imgs = '<div class="carousel-imgs"></div>';
        this.$menu = '<ul class="carousel-menu"></ul>';
        this.$arrows = '<div class="carousel-arrows"></div>';
        this.$left = '<div class="carousel-left">&lt;</div>';
        this.$right = '<div class="carousel-right">&gt;</div>';
    }
    Carousel.prototype.init = function () {
        var nowindex = 0;
        this.$container.append(this.$imgs).append(this.$menu).append(this.$arrows);
        this.$arrows.append(this.$left).append(this.$right);
        for (var i = 0; i <= this.defaultSettings.imgArr.length; i++) {
            this.$imgs.append("<img src='" + this.defaultSettings.imgArr[i] + "'>");
            this.$menu.append("<li>" + (i + 1) + "</li>");
        }
        $("img", this.$imgs).eq(0).addClass("selected");
        $("li", this.$menu).eq(0).addClass("selected");
        $(this.defaultSettings.selector).append(this.$container);
        //事件
        $(".carousel-menu li").on("click", function () {
            nowindex = $(this).index();
            changeImg();
        });
        this.$left.on("click", function () {
            nowindex--;
            if (nowindex == -1) {
                nowindex = this.defaultSettings.imgArr.length - 1;
            }
            changeImg();
        }.bind(this));
        this.$right.on("click", function () {
            nowindex++;
            if (nowindex == this.defaultSettings.imgArr.length) {
                nowindex = 0;
            }
            changeImg();
        }.bind(this));

        this.$container.hover(function () {
            clearInterval(this.timer);
        }.bind(this), function () {
            this.timer = setInterval(function () {
                this.$right.trigger("click");
            }.bind(this), this.defaultSettings.speed)
        }.bind(this));
        this.timer = setInterval(function () {
            this.$right.trigger("click");
        }.bind(this), this.defaultSettings.speed)

        //私有方法
        function changeImg() {
            $(".carousel-menu li").eq(nowindex).addClass("selected").siblings().removeClass("selected");
            $(".carousel-imgs img").eq(nowindex).addClass("selected").siblings().removeClass("selected");
        };
    };
    return Carousel;
});