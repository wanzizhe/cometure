/**
 * Created by asus on 2017/10/6.
 */
$(function(){
    $(".first img").hover(function(){
        $(".marker").css("display","block");
    },function(){
        $(".marker").css("display","none");
    });
});
