(function () {
    var oSmallPic = document.getElementById("small-pic");
    var aSmallImg = oSmallPic.getElementsByTagName("img");
    var oBigPic = document.getElementById("big-pic");
    var oBigImg = oBigPic.getElementsByTagName("img")[0];
    var oLeft = document.getElementById("left");
    var oRight = document.getElementById("right");
    var nowindex = 0;
    var oBigPic = document.getElementById("big-pic");
    var oDrag = document.getElementById("drag");
    var oMagnify = document.getElementById("magnify");
    var oNew = document.getElementById("new");
    var oNewInfo = document.getElementById("new-info");
    var oMagnifyImg = oMagnify.getElementsByTagName("img")[0];
    for (var i = 0; i < aSmallImg.length; i++) {
        aSmallImg[i].index = i;
        aSmallImg[i].onclick = function(){
            nowindex = this.index;
            changeImg();
        };
    }
    oLeft.onclick = oRight.onclick = function (){
        if (this == oRight){
            nowindex++;
            if(nowindex == aSmallImg.length){
                nowindex = 0;
            }
        }else{
            nowindex--;
            if(nowindex == -1){
                nowindex = aSmallImg.length-1;
            }
        }
            changeImg();
    };
    function changeImg(){
        oBigImg.src = aSmallImg[nowindex].src;
        oMagnifyImg.src = aSmallImg[nowindex].src; 
        for(var i = 0; i < aSmallImg.length; i++){
            aSmallImg[i].className = "";
        }
        aSmallImg[nowindex].className = "selected";
        if(nowindex == 0){
            // oSmallPic.style.left = "0";
            animate(oSmallPic,{
                left : 0
            });
        }else{
            // oSmallPic.style.left = -(aSmallImg[0].offsetWidth + 10) +"px";
            animate(oSmallPic,{
                left : -(aSmallImg[0].offsetWidth + 10)
            });    
        }
    }
    oBigPic.onmouseover = function (){
        oDrag.style.display = "block";
        oMagnify.style.display = "block";        
    };
    oBigPic.onmouseout = function (){
        oDrag.style.display = "none";
        oMagnify.style.display = "none"; 
    };
    //e.client取到的距离是鼠标距离浏览器的宽度，随着滚动条滚动，
    //它的值会发生变化，e.page取到的距离是鼠标距离页面最顶端的距离
    //它不会随着页面滚动而发生变化
    oBigPic.onmousemove = function (e){
        e = e||window.event;
        var left = e.pageX - oDrag.offsetWidth/2 - oNewInfo.offsetLeft;
        var top = e.pageY - oDrag.offsetHeight/2 - oNew.offsetTop;
        if(left <= 0){
            left = 0;
        }
        if(top <= 0){
            top = 0;
        }
        var maxX = oBigPic.offsetWidth - oDrag.offsetWidth;
        if(left >= maxX){
            left = maxX;
        }
        var maxY = oBigPic.offsetHeight - oDrag.offsetHeight;
        if(top >= maxY){
            top = maxY;
        }
        oDrag.style.top = top + "px";
        oDrag.style.left = left + "px";  
        var smallX = left/maxX;   
        var smallY = top/maxY;
        oMagnifyImg.style.left = -(oMagnifyImg.offsetWidth-oMagnify.offsetWidth)*smallX + "px";
        oMagnifyImg.style.top = -(oMagnifyImg.offsetHeight-oMagnify.offsetHeight)*smallY  + "px";        
    };
})();