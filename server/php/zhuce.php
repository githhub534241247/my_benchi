<?php
    include("public.php");

    $user = $_POST["user"];
    $pass = $_POST["pass"];
    $notpass = $_POST["notpass"];
    $email = $_POST["email"];
    
    $db=getConnect("xiangmu");
    
    $sql="insert into users (user,pass,notpass,email) values ('$user','$pass','$notpass','$email')";
// echo $sql;
    $row =mysqli_query($db,$sql);

    
    if($row){
        //注册成功，调到登陆也。
        echo "<script>alert('恭喜你，注册成功！！！');location.href='../html/denglu.html'</script>";
    }else{
        echo "<script>alert('不幸的是，注册失败！') ;location.href='zhuce.html'</script>";
    }


?>