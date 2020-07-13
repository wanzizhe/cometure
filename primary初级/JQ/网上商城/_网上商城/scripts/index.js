/**
 * Created by xiecheng on 2017/7/18.
 */
$(function(){
    //换肤
    $("#skin li").on("click",function(){
        $this=$(this);
        $("#cssfile").attr("href","styles/skin/"+$this.attr("id")+".css");
        $this.addClass("selected").siblings().removeClass("selected");
    });
    //输入框
    $("#inputSearch").on("focus",function(){
         if(this.value=="请输入商品名称"){
             this.value="";
         }
    }).on("blur",function(){
        if(this.value==""){
            this.value="请输入商品名称";
        }
    });
    //导航菜单
    $("#nav li").hover(function(){
        $(".jnNav",$(this)).css("display","block");
    },function(){
       $(".jnNav",$(this)).css("display","none");
    });
   //轮播图
    $("#menu a").on("mouseover",function(){
        $(this).addClass("chos").siblings().removeClass("chos");
    });
    var timer =setInterval(function(){

    },1000);
    //品牌活动
   $("#jnBrandTab li").on("click",function(){
       $(this).addClass("chos").siblings().removeClass("chos");
        $("#jnBrandList").animate({
           left:-$("#jnBrandList li").innerWidth() * 4 * $(this).index()
       },1000);
   });
});







