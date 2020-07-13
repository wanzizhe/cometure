(function(){
    var aClose = document.getElementsByClassName("close");
    var aCartProduct = document.getElementsByClassName("cart-product");
    var oMyCart = document.getElementById("my-cart");
    for(var i = 0;i < aClose.length; i++){
        aClose[i].index = i;
        aClose[i].onclick = function(){
            oMyCart.removeChild(aCartProduct[this.index]);
            for(var i = 0;i < aClose.length; i++){
                aClose[i].index = i;
            }
        };        
    }
})();