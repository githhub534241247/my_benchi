<?php
    include("public.php");

    $user = $_POST["user"];
    
    $db=getConnect("xiangmu");

    $sql="select user from users where user='$user'";
    
    $result =mysqli_query($db,$sql);
  
    $row = mysqli_fetch_array($result);
    
    if($row){
        echo 1;
    }else{
        echo 0;
    }


?>