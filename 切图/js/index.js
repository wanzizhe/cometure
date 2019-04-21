(function(){
    //var oNum=document.getElementById("num");
    //var aLi=oNum.getElementsByTagName("li");
    var oPho=document.getElementById("photo");
    var aImg=oPho.getElementsByTagName("img");
    var oLef=document.getElementById("left");
    var oRig=document.getElementById("right");
    var nowindex=0;
    function circle(){
        for(var i=0;i<aImg.length;i++){
            //aLi[i].className="";
            aImg[i].className="";
        }
        //aLi[nowindex].className="selected";
        aImg[nowindex].className="selected";
    }
    //for(var i=0;i<aLi.length;i++){
    //    aLi[i].index=i;
    //    aLi[i].onclick=function(){
    //        nowindex=this.index;
    //        circle();
    //    };
    //}
    oLef.onclick=function(){
        nowindex--;
        if(nowindex==-1){
            nowindex=aImg.length-1;
        }
        circle();
    };
    oRig.onclick=function(){
        nowindex++;
        if(nowindex==aImg.length){
            nowindex=0;
        }
        circle();
    };
    oLef.onselectstart=oRig.onselectstart=function(){
        return false;
    };
    function move(){
        timer=setInterval(function(){
            oRig.onclick();
        },1000);
    }
    var oBan=document.getElementById("banner");
    oBan.onmouseover=function(){
        clearInterval(timer);
    };
    oBan.onmouseout=function(){
        move();
    };
    move();

})();

