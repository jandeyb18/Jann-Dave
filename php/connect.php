<?php
    $name = $_POST['name'];
    $email = $_POST['email'];
    $message = $_POST['message'];

    //DATABASE CONNECTION
    $conn = new mysqli('localhost','root','','contact_form');
    if($conn->connect_error){
        die('Connection Failed : '.$conn->connect_error);

    }else{
        $stmt = $conn->prepare("insert into registration(name, email, message)values(?, ?, ?)");
        $stmt->bind_param("sss",$name, $email, $message);
        $stmt->execute();
        echo "Registration Successful!";
        $stmt->close();
        $conn->close();
    }
?>

