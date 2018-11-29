
// var index = 0;
$(".bo1>ul li").mouseover(function () {
    // if (index == $(".bo1>ul li").size() - 1) {
    //     index = 0;
    // } else {
    //     index++;
    // }
    var index = $(this).index(".bo1>ul li");
    $(".bo1>ul li:eq(" + index + ")").addClass("xiaotu").siblings().removeClass("xiaotu");
    $(".bo1 .zhanshi>li:eq(" + index + ")").addClass("zhanshitu").siblings().removeClass("zhanshitu");
    $(".bo1 .boxf3 li:eq(" + index + ")").addClass("datu").siblings().removeClass("datu");
})

$(".boxf1").mouseover(function () {
    $("#box3 .bo1 .boxf2").css("display", "block");
    $("#box3 .bo1 .boxf3").css("display", "block");
});


$(".boxf1").mousemove(function (e) {
    var e = e || event;
    // var x = e.pageX;
    // var y = e.pageY;
    // var l = e.pageX - $(".boxf2").position().left;
    var l = e.pageX - $(".boxf1").offset().left - $(".boxf2").width() / 2;
    var t = e.pageY - $(".boxf1").offset().top - $(".boxf2").height() / 2;
    // $(".boxf2").css("left", "l");
    // console.log($(".boxf2").position().left);
    // console.log(e.pageX);//鼠标的坐标
    //console.log(e.clientX);//鼠标坐标
    // console.log($(".boxf2").offset().width);//用法错误，undefind
    // console.log(l);//成功拿到l.
    // console.log(t);//成功拿到t.
    // var l = e.pageX - $id("box").offsetLeft - $id("mask").offsetWidth / 2;

    //边界


    //小框的偏移量
    var xiaopl = $(".boxf2").position().left;
    var xiaopt = $(".boxf2").position().top;

    // console.log(xiaopl);
    //判断边界  

    var maxeel = $(".boxf1").width() - $(".boxf2").width();
    var maxeet = $(".boxf1").height() - $(".boxf2").height();

    //定义偏移大小,
    l = l < 0 ? 0 : (l > maxeel ? maxeel : l);
    t = t < 0 ? 0 : (t > maxeet ? maxeet : t);
    //不知道为什么就是实现不了。
    // if (xiaopl <= 0) {
    //     $(".boxf2").css( "left", "161.5 + 'px'");
    //     // xiaopl = 0;
    // };
    // if (xiaopl >= maxl) {
    //     $(".boxf2").css({ left: maxl + "px" });
    // };
    // console.log(maxl);
    // console.log(xiaopl);
    // console.log($(".boxf2").offset().left);
    // console.log($(".boxf2").offset().top);

    // console.log($(".boxf2").position().left);
    // console.log($(".boxf2").position().top);
    // console.log($(".boxf2").css("left"));
    // console.log($(".boxf2").css("top"));


    //写入left和top
    $(".boxf2").css({ left: l + "px", top: t + "px" });

    var bigImgL = l * $(".datu img").width() / $(".boxf1").width();
    var bigImgT = t * $(".datu img").height() / $(".boxf1").height();

    // console.log($(".boxf3").width());
    // console.log($(".boxf1").width());

    $(".datu img").css({ left: -bigImgL + "px" });
    $(".datu img").css({ top: -bigImgT + "px" });
    // console.log($(".boxf3 img").height());

})
$(".boxf1").mouseout(function () {
    $("#box3 .bo1 .boxf2").css("display", "none");
    $("#box3 .bo1 .boxf3").css("display", "none");
})




