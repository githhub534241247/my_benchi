<?php
    include("public.php");

    $user = $_POST["user"];
    $pass = $_POST["pass"];
    
    $db=getConnect("xiangmu");
    
    $sql="select *from users where user='$user'";
// echo $sql;
    $result =mysqli_query($db,$sql);

    $row=mysqli_fetch_array($result);

    if($row){
        if($row["pass"]==$pass){
            //用户密码正确
            echo "<script>alert('欢迎回来，尊贵的会员！！！');location.href='../html/shouye.html'</script>";
        }else{
            //密码不正确
            echo "<script>alert('密码不正确，错三次后，自动锁死用户！！！');location.href='../html/denglu.html'</script>";
        }
    }else{//用户不存在
        echo "<script>alert('账户密码错误，请重新输入！') ;location.href='../html/denglu.html'</script>";
    }


    // if($row){
    //     //注册成功，调到登陆也。
    //     echo "<script>alert('欢迎回来，尊贵的会员！！！');location.href='../html/xiangqing.html'</script>";
    // }else{
    //     echo "<script>alert('不幸的是，登陆失败！') ;location.href='denglu.html'</script>";
    // }


?>