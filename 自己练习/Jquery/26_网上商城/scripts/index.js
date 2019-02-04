$(function () {
    //搜索框
    $("#inputSearch").on("focus", function () {
        if (this.value == this.defaultValue) {
            this.value = "";
        }
    }).on("blur", function () {
        if (this.value == "") {
            this.value = this.defaultValue;
        }
    });

    //换肤
    if ($.cookie("skin")) {
        var skin = $.cookie("skin");
        changeSkin(skin);
        // $("#cssfile").attr("href","styles/skin/"+skin +".css");
        // $("#" + skin).addClass("selected").siblings().removeClass("selected");
    }
    $("#skin li").on("click", function () {
        $.cookie("skin", "$(this).attr('id')", {
            expires: 30
        });
        changeSkin($(this).attr("id"));
        // $("#cssfile").attr("href","styles/skin/"+$(this).attr("id") +".css");
        // $(this).addClass("selected").siblings().removeClass("selected");
    });

    function changeSkin(skin) {
        $("#cssfile").attr("href", "styles/skin/" + skin + ".css");
        $("#" + skin).addClass("selected").siblings().removeClass("selected");
    };

    //导航菜单
    $("#nav li").hover(function () {
        $(".jnNav", $(this)).stop().fadeIn();
    }, function () {
        $(".jnNav", $(this)).stop().fadeOut();
    });

    //hot
    $(".promoted").append("<span class='hot'></spanclass>")


    //轮播图
    //调整图片的层级
    var $img = $("#JS_imgWrap img");
    $img.each(function (index, elem) {
        $(elem).css({
            zIndex: 5 - index
        });
    });
    //切换
    var nowindex = 0;
    var timer;
    $("#menu a").on("mouseover", function () {
        nowindex = $(this).index();
        changeImg();
    });
    play();

    $("#jnImageroll").on("mouseover", function () {
        clearInterval(timer);
    }).on("mouseout", function () {
        play();
    });

    function play() {
        timer = setInterval(function () {
            nowindex++;
            if (nowindex == $img.length) {
                nowindex = 0;
            }
            changeImg();
        }, 1000);
    }

    function changeImg() {
        $("#menu a").eq(nowindex).addClass("chos").siblings().removeClass("chos");
        $img.eq(nowindex).fadeIn().siblings().fadeOut();
    }

    //tooltip
    // $("#jnNoticeInfo li a").hover(function (e) {
    //     this.tip = $(this).attr("title");
    //     if ($(".tip").length == 0) {
    //         var $tooltip = $("<div class='tip'></div>").html(this.tip);
    //         $tooltip.appendTo($("body"));
    //     } else {
    //         $(".tip").html(this.tip);
    //     }
    //     $(".tip").offset({
    //         left : e.pageX + 10,
    //         top : e.pageY + 10
    //     });
    //     $(this).removeAttr("title");
    // }, function () {
    //     $(this).attr("title",this.tip);        
    //     $(".tip").remove();
    // }).on("mousemove",function(e){
    //     $(".tip").offset({
    //         left : e.pageX + 10,
    //         top : e.pageY + 10
    //     });
    // });

    tooltip("#jnNoticeInfo li a");
    tooltip(".jnCatainfo a");

    //品牌活动
    $("#jnBrandTab li").on("click",function(){
        $(this).addClass("chos").siblings().removeClass("chos");
        //CSS方法是移动到多少距离
        $("#jnBrandList").animate({
            left :  - $("#jnBrandList li").innerWidth() * 4 * $(this).index()
        },1000,function(){});
    });

});