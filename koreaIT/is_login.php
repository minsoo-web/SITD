<?php
  session_start();
  if( isset( $_SESSION[ 'username' ] ) ) {
    $is_login = TRUE;
    $userID = $_SESSION[ 'username' ];
  }
?>