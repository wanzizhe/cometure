/**
 * Created by asus on 2017/6/22.
 */
(function(){
    var oNew_product=document.getElementById("new-product");
    var aButton=oNew_product.getElementsByClassName("orange-cart");
    var oMoney=document.getElementById("money");
    var oNum=document.getElementById("num");
    var aInput=oNew_product.getElementsByTagName("input");
    var aSpan=oNew_product.getElementsByTagName("span");
    var oP=document.getElementById("clear_cart");
    var price=[];
    for(var i=0;i<aSpan.length;i++){
        if(aSpan[i].className=="price"){
            price.push(aSpan[i]);
        }
    }
    for(var i=0;i<aButton.length;i++){
        aButton[i].index=i;
        aButton[i].onclick=function(){
               oMoney.innerHTML= parseFloat(oMoney.innerHTML)+price[this.index].innerHTML*aInput[this.index].value;
               oNum.innerHTML=parseFloat(oNum.innerHTML)+parseInt(aInput[this.index].value);
        };
    }
    oP.onclick=function(){
        oMoney.innerHTML="0.00";
        oNum.innerHTML="0";
    };
})();