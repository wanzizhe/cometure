require(["jquery-3.3.1", "carousel"], function ($, Carousel) {
    var imgs1 = ["img/1.jpg","img/2.jpg","img/3.jpg","img/4.jpg"];
    var setting1 = {
        selector: "#container",
        imgArr: imgs1,
        speed: 500,
        buttonStyle: "square",//circle
        arrowsPos: "bottom"//center
    };
    var carousel1 = new Carousel(setting1);
    carousel1.init();//初始化方法

    var imgs2 = ["img/1.jpg","img/2.jpg","img/3.jpg"];
    var setting2 = {
        selector: "#container2",
        imgArr: imgs2,
        speed: 1000,
        buttonStyle: "square",//circle
        arrowsPos: "bottom"//center
    };
    var carousel2 = new Carousel(setting2);
    carousel2.init();
});