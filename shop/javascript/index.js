(function () { //函数立即调用，防止污染全局变量
    var oProduct = document.getElementById("product");
    var aBut = oProduct.getElementsByTagName("button");
    var aInput = oProduct.getElementsByTagName("input");
    var aSpan = oProduct.getElementsByTagName("span");
    var aPrice = [];
    var aCartPrice = document.getElementById("cart-price");
    var aCartNum = document.getElementById("cart-num");
    var aClear = document.getElementById("clear");
    for (var i = 0; i < aSpan.length; i++) {
        if (aSpan[i].className == "price") {
            aPrice.push(aSpan[i]);
        }
    }
    for (var i = 0; i < aBut.length; i++) {
        aBut[i].index = i;
        aBut[i].onclick = function () {
            // console.log(aPrice[this.index].innerHTML);
            // console.log(aInput[this.index].value);
            // console.log(aCartPrice.innerHTML);
            aCartPrice.innerHTML = parseFloat(aCartPrice.innerHTML) + parseFloat(aPrice[this.index].innerHTML) * parseInt(aInput[this.index].value);
            aCartNum.innerHTML = parseInt(aCartNum.innerHTML) + parseInt(aInput[this.index].value);
        }
    }
    aClear.onclick = function () {
        aCartPrice.innerHTML="0.00";
        aCartNum.innerHTML = "0";
    }
})();