/**
 * Created by asus on 2017/6/18.
 */
(function() {
    var oSmall_picture = document.getElementById("small-picture");
    var aImg = oSmall_picture.getElementsByTagName("img");
    var oBig_picture = document.getElementById("big-picture");
    var aImg2 = oBig_picture.getElementsByTagName("img")[0];
    var oLeft = document.getElementById("left");
    var oRight = document.getElementById("right");
    var nowindex = 0;
    for (var i = 0; i < aImg.length; i++) {
        aImg[i].index = i;
        aImg[i].onclick = function () {
            aImg2.src = aImg[this.index].src;
            for (var i = 0; i < aImg.length; i++) {
                aImg[i].className = "";
            }
            this.className = "selected";
            nowindex = this.index;
        };
    }
    oLeft.onclick = oRight.onclick = function () {
        if (this == oLeft) {
            nowindex--;
            if (nowindex == -1) {
                nowindex = aImg.length - 1;
            }
            if (nowindex == 3) {
                animate(oSmall_picture, {left: -(aImg[0].offsetWidth + 10)});
            }
            if (nowindex == 0) {
                animate(oSmall_picture, {left:0});
            }
        }
        else {
            nowindex++;
            if (nowindex == aImg.length) {
                nowindex = 0;
            }
            if (nowindex == 1) {
                animate(oSmall_picture, {left: -(aImg[0].offsetWidth + 10)});
            }
            if (nowindex == 0) {
                animate(oSmall_picture, {left:0});
            }
        }

        aImg2.src = aImg[nowindex].src;
        for (var i = 0; i < aImg.length; i++) {
            aImg[i].className = "";
        }
        aImg[nowindex].className = "selected";
    };
    oLeft.onselectstart = oRight.onselectstart = function () {
        return false;
    };
})();