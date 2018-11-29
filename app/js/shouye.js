

// var yincang = $("yincang");
// var h2u1 = $("h2u1");
// var index = 0;
// function Daogou() {
//     this.h2u1 = h2u1;
// }
// Daogou.prototype.Click = function () {
//     this.h2u1.children.eq("index");
//     if (index == 0) {
//         $("yincang").css("dispaly", "block");
//     }

// }



//导航
// window.onload = function () {
//     $(".li1").click = function () {
//         Show_Hidden($("#yincang"));
//         return false;
//     }
// }

//多次点击
$(".li1").click(function () {
    $("#yincang").toggle(800);
});




// $(".li1").toggle(function () {
//     $("#yincnag").css("display", "block");
// }, function () {
//     $("#yincang").css("display", "none");
// });



// $(".li1").click(function () {
//     // if ($("#yincang").css("display") == $("#yincang").css("display", "block")) {
//     //     $("#yincang").css("display", "none");
//     // } else {
//     //     $("#yincang").css("display", "block");
//     // };
//     $("#yincang").toggle().css("display", "block");
// })
// $(".li1").click(function () {
//     $("#yincang").css("display", "none");
// })

// window.onload = function () {
//     var olink = document.getElementById("link");
//     var odiv = document.getElementById("thediv");
//     olink.onclick = function () {
//         Show_Hidden(odiv);
//         return false;
//     }
// }

//淡化轮播图
var li = $("#novd ul li");
var oli = $("#novd ol li");
var index = 0;

var timer = setInterval(autoPlay, 2000);

function autoPlay() {
    if (index == li.size() - 1) {
        index = 0;
    } else {
        index++;
    }
    li.eq(index).fadeIn().siblings().fadeOut();
    oli.eq(index).addClass("lunboxiabiao").siblings().removeClass("lunboxiabiao");
    // $(".lfetc").click().li.eq(index - 1);
};
//显示隐藏，暂停动画
$("#novd").mouseover(function () {
    $(".fxb").css("opacity", "100");
    clearInterval(timer);
});
$("#novd").mouseout(function () {
    $(".fxb").css("opacity", "0");
    timer = setInterval(autoPlay, 2000);
});

//点击换图
$(".toLeft").click(function () {
    if (index == 0) {
        index = li.size() - 1;
    } else {
        index--;
    }
    li.eq(index).fadeIn().siblings().fadeOut();
    oli.eq(index).addClass("lunboxiabiao").siblings().removeClass("lunboxiabiao");
})
$(".toRight").click(function () {
    if (index == li.size() - 1) {
        index = 0;
    } else {
        index++;
    }
    li.eq(index).fadeIn().siblings().fadeOut();
    oli.eq(index).addClass("lunboxiabiao").siblings().removeClass("lunboxiabiao");
})




// var h2u1a = $("#h2u1 li");
// var yincang = $("#yincang");

// function Yincang() {
//     this.lia = h2u1a;
// }
// Yincang.prototype.Click = function () {
//     yincang.css("display", "block");
// }
// $("#box").mouseenter(function () {
//     alert("1");
// })
// $("#box ul li").click(function () {
//     $("#yin").css("display", "block");
// })






















