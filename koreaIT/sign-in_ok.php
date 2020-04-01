<?php
      include 'is_login.php';
    $id = $_POST["userId"];
    $pw = $_POST["userPw"];
    $toggle = false;
    if($id=="apple"){
        $toggle = true;
        Header("Location:./sign-in.php"); 
        $_SESSION['username'] = $id;
    }
    else{
        $toggle = false;
    }    
?>
