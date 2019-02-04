function tooltip(selector) {
    $(selector).hover(function (e) {
        //定义成this.tip是为了让所有函数都可以取到
        this.tip = $(this).attr("title")?$(this).attr("title"):$(this).html();
        if ($(".tip").length == 0) {
            var $tooltip = $("<div class='tip'></div>").html(this.tip);
            $tooltip.appendTo($("body"));
        } else {
            $(".tip").html(this.tip);
        }
        $(".tip").offset({
            left : e.pageX + 10,
            top : e.pageY + 10
        });
        $(this).removeAttr("title");
    }, function () {
        $(this).attr("title",this.tip);        
        $(".tip").remove();
    }).on("mousemove",function(e){
        $(".tip").offset({
            left : e.pageX + 10,
            top : e.pageY + 10
        });
    });
}