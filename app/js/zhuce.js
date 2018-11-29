
var uname = $id("uname");
var checkUname = $id("checkUname");
var info_user = $id("info_user");
//用户名可用提示标签
var succ_user = $id("succ_user");
// var succ_user = $(".succsucc_user");
//用户名不可用提示标签
var error_user = $id("error_user");
var error_user2 = $id("error_user2");
//form表单
var form = $id("form");


var sormSub = false;
var mimade = false;
var youxiang = false;

//--------------------------用户名检测---------------------------
var unamReg = /^\w{6,20}$/;

uname.onfocus = function () {
    succ_user.style.dispaly = "none";
    info_user.style.display = "block";
    error_user.style.display = "none";
    error_user2.style.display = "none";
    // checkUname.style.display = "none";
}
uname.onblur = function () {
    //隐藏验证提示信息
    info_user.style.display = "none";
    //检测用户名是否合法
    if (unamReg.test(this.value)) {//用户名合法
        //显示 合法的提示信息
        succ_user.style.display = "block";
        sormSub = true;
    } else {//用户名不合法
        //显示不合法的提示信息
        error_user.style.display = "block";
        // succ_user.style.display = "none";
        sormSub = false;
    }

    ajax({
        method: "post",
        url: "../php/checkUnameq.php",
        data: {
            user: this.value
        },
        success: function (res) {
            //alert(res);
            if (res == "1") {
                succ_user.style.display = "none";
                error_user2.style.display = "block";
                // checkUname.style.display = "block";
            } else {
                // succ_user.style.display = "block";
                error_user2.style.display = "none";
                // checkUname.style.display = "none";
            }
        }
    });
}
// var unamReg = /^\w{6,20}$/;

// 	uname.onfocus = function () {
// 		info_user.style.display = "block";
// 		error_user.style.display = "none";
// 		succ_user.style.display = "none";
// 	}
// 	uname.onblur = function () {
// 		//隐藏验证提示信息
// 		info_user.style.display = "none";
// 		//检测用户名是否合法
// 		if (unamReg.test(this.value)) {//用户名合法
// 			//显示 合法的提示信息
// 			succ_user.style.display = "block";
// 			sormSub = true;
// 		} else {//用户名不合法
// 			//显示不合法的提示信息
// 			error_user.style.display = "block";
// 			sormSub = false;
// 		}
// 	}
//--------------------------密码检测---------------------------	


var pwd = $id("pwd");
var info_pass = $id("info_pass");
var succ_pass = $id("succ_pass");
var error_pass = $id("error_pass");
var q1 = $id("q1");
var q2 = $id("q2");
var q3 = $id("q3");
var s1 = $id("s1");
var s2 = $id("s2");
var s3 = $id("s3");

var pwdReg = /^\S{6,20}$/;


pwd.onfocus = function () {
    info_pass.style.display = "block";
    error_pass.style.display = "none";
    succ_pass.style.display = "none";
}
pwd.onblur = function () {
    info_pass.style.display = "none";
    //检测密码是否合法
    if (pwdReg.test(this.value)) {//密码合法
        //显示合法信息提示
        succ_pass.style.display = "block";
        mimade = true;
    } else {//密码不合法
        //显示不合法信息提示
        error_pass.style.display = "block";
        mimade = false;
    }
}

pwd.onkeyup = function () {
    //6到20位
    if (this.value.length >= 6 && this.value.length <= 20) {
        q1.innerHTML = "●";
        s1.style.color = "green";
        //当满足6-60位后再检测是否有两种字符
        if (checkPass()) {
            s2.style.color = "green";
            console.log(this.value.length)
            //当满足6-60位有两种字符以上字符个数大于9个
            if (this.value.length > 9) {
                s3.style.color = "green";
            } else {
                s3.style.color = "#CCCCCC";
            }
        } else {
            s2.style.color = "#CCCCCC";
        }
    } else {
        q1.innerHTML = "○";
        s1.style.color = "#CCCCCC";
    }

}
//检测是否有两种字符
function checkPass() {
    if (pwd.value.search(/[A-Z]/) != -1 && pwd.value.search(/[a-z]/) != -1) {
        return true;
    } else if (pwd.value.search(/[A-Z]/) != -1 && pwd.value.search(/[0-9]/) != -1) {
        return true;
    } else if (pwd.value.search(/[a-z]/) != -1 && pwd.value.search(/[0-9]/) != -1) {
        return true;
    } else if (pwd.value.search(/[a-z]/) != -1 && pwd.value.search(/[^0-9a-zA-Z\s]/) != -1) {
        return true;
    } else if (pwd.value.search(/[A-Z]/) != -1 && pwd.value.search(/[^0-9a-zA-Z\s]/) != -1) {
        return true;
    } else if (pwd.value.search(/[0-9]/) != -1 && pwd.value.search(/[^0-9a-zA-Z\s]/) != -1) {
        return true;
    } else {
        return false;
    }
}
//--------------------------邮箱检测---------------------------	

var email = $id("email");
var error_email = $id("error_email");
var succ_email = $id("succ_email");
var info_email = $id("info_email");
var all_email = $id("all_email");
var emailText = document.getElementsByClassName("emailText");
var li = document.getElementsByTagName("li");

var emailReg = /^[\w\-\.]+@[\w\-]+(\.[a-zA-Z]{2,4}){1,2}$/;

email.onfocus = function () {
    info_email.style.display = "block";
    succ_email.style.display = "none";
    error_email.style.display = "none";

}
email.onblur = function () {
    info_email.style.display = "none";
    setTimeout(function () {
        all_email.style.display = "none";
    }, 100);
    //检测密码是否合法
    if (emailReg.test(this.value)) {//密码合法
        //显示合法信息提示
        succ_email.style.display = "block";
        error_email.style.display = "none";
        youxiang = true;
    } else {//密码不合法
        //显示不合法信息提示
        error_email.style.display = "block";
        succ_email.style.display = "none";
        youxiang = false;
    }
}
var index = 0;
email.onkeyup = function (e) {

    var e = e || event;
    var code = e.keyCode || e.which || e.charCode;

    all_email.style.display = "block";

    var emailVal = this.value;

    for (var i = 0; i < emailText.length; i++) {
        emailText[i].innerHTML = emailVal;
    }

    all_email.onmouseover = function (e) {
        var e = e || event;
        var target = e.target || e.srcElement;
        if (target.nodeName.toLowerCase() == "li") {
            for (var i = 0; i < li.length; i++) {
                li[i].style.background = "white";
            }
            target.style.background = "#C1C1C1";

            target.onclick = function () {
                email.value = this.innerText;
                all_email.style.display = "none";
                email.onblur();
            }
        }
    }

    //console.log(code);
    switch (code) {
        case 38:
            for (var i = 0; i < li.length; i++) {
                li[i].style.background = "white";
            }
            if (index == 0) {
                index = li.length - 1;
            } else {
                index--;
            }
            li[index].style.background = "#C1C1C1";
            break;
        case 40:
            for (var i = 0; i < li.length; i++) {
                li[i].style.background = "white";
            }
            li[index].style.background = "#C1C1C1";
            console.log(index);
            if (index == li.length - 1) {
                index = 0;
            } else {
                index++;
            }

            break;
        case 13:
            email.value = li[index].innerText;
            all_email.style.display = "none";
            email.onblur();
            break;
    }
}
form.onsubmit = function () {
    if (sormSub && mimade && youxiang) {
        return true;
    } else {
        return false;
    }
}
