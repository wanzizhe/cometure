<?php
//跨域一定是为了数据交换
// php通过get的方式接收到name,age的值（从a到b）
   $username = $_GET["name"];
   $age = $_GET["age"];
//    echo("alert('$age')");

//php通过get方法调用a域的函数
   $callback = $_GET["callback"];
   //在函数中传参数，如果$username能从b传到a，证明完成跨域
   echo"$callback('$username')";
?>