<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $name = $_POST["name"];
    $email = $_POST["email"];
    $message = $_POST["message"];

    $to = "18j45a0407@gmail.com.com"; // Replace with your email address
    $subject = "New Contact Us Form Submission";
    $headers = "From: $email";

    mail($to, $subject, $message, $headers);
    
    // Optionally, you can redirect the user to a thank-you page
    // header("Location: thank-you.html");
    exit;
}
?>
