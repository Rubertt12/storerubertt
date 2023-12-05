<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $name = $_POST["name"];
    $email = $_POST["email"];
    $message = $_POST["message"];

    $to = "ruberttramires4@gmail.com";
    $subject = "Nova mensagem do formulário de contato";

    $headers = "From: $email" . "\r\n" .
               "Reply-To: $email" . "\r\n" .
               "X-Mailer: PHP/" . phpversion();

    $email_content = "Nome: $name\n";
    $email_content .= "Email: $email\n";
    $email_content .= "Mensagem:\n$message";

    mail($to, $subject, $email_content, $headers);
}
?>
