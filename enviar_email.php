<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $name = filter_var($_POST["name"], FILTER_SANITIZE_STRING);
    $email = filter_var($_POST["email"], FILTER_SANITIZE_EMAIL);
    $message = filter_var($_POST["message"], FILTER_SANITIZE_STRING);

    if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
        die("E-mail inválido");
    }

    $to = "ruberttramires4@gmail.com";
    $subject = "Nova mensagem do formulário de contato";
    $headers = "From: " . htmlspecialchars($email) . "\r\n" .
               "Reply-To: " . htmlspecialchars($email) . "\r\n" .
               "X-Mailer: PHP/" . phpversion();
    $email_content = "Nome: $name\n";
    $email_content .= "Email: $email\n";
    $email_content .= "Mensagem:\n$message";

    if (mail($to, $subject, $email_content, $headers)) {
        echo "E-mail enviado com sucesso";
    } else {
        echo "Falha ao enviar o e-mail";
    }
}
?>
