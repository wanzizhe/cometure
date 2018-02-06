(function () {
    var aClassify = document.getElementsByClassName("classify");
    var aSubmenu = document.getElementsByClassName("submenu");
    for (var i = 0; i < aClassify.length; i++) {
        aClassify[i].index = i;
        aClassify[i].bFlag = false;
        aClassify[i].addEventListener("click", function () {
            if(this.bFlag){
                aSubmenu[this.index] && animate(aSubmenu[this.index],{
                    height:0
                })
            }else{
                aSubmenu[this.index] && animate(aSubmenu[this.index],{
                    height:230
                })
            }  
            this.bFlag = !this.bFlag;
        })
    }
})();