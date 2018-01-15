/**
 * Created by asus on 2017/6/24.
 */
(function(){
    var oChoose=document.getElementById("choose");
    var aMenu=oChoose.getElementsByClassName("menu");
    var aList=document.getElementsByClassName("list");
    var bFlag=false;//false为合上   ture为打开
    for(var i=0;i<aMenu.length;i++){
        aMenu[i].index=i;
        aMenu[i].bFlag=false;
        aMenu[i].onclick=function(){
            if(this.bFlag){
                aList[this.index].style.display="none";
            }
            else{
                aList[this.index].style.display="block";
            }
            this.bFlag=!this.bFlag;
        };
    }
})();