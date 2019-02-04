requirejs.config({
    paths : {
        jquery: "jquery-1.11.2"
    }
});
require(["jquery","carousel"],function($,Carousel){
    var imgs1=["img/1.jpg","img/2.jpg","img/3.jpg","img/4.jpg"];
    var settings1={
        selector:"#container",
        imgArr:imgs1,
        speed:500,
        buttonStyle:"square",//circle
        arrowsPos:"bottom"//center
    };
    var carousel1=new Carousel(settings1);
    carousel1.init();

    var imgs2=["img/1.jpg","img/2.jpg","img/3.jpg"];
    var settings2={
        selector:"#container",
        imgArr:imgs2,
        speed:1000,
        buttonStyle:"circle",//circle
        arrowsPos:"center"//center
    };
    var carousel2=new Carousel(settings2);
    carousel2.init();

});