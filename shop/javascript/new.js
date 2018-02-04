(function () {
    var oSmallPic = document.getElementById("small-pic");
    var aSmallImg = oSmallPic.getElementsByTagName("img");
    var oBigPic = document.getElementById("big-pic");
    var oBigImg = oBigPic.getElementsByTagName("img")[0];
    var oLeft = document.getElementById("left");
    var oRight = document.getElementById("right");
    var nowindex = 0;
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
})();