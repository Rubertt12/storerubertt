<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $nome = $_POST["nome"];
    $email = $_POST["email"];
    $mensagem = $_POST["mensagem"];

    $assunto = "Novo Pedido de Contato";
    $corpo = "Nome: $nome\n";
    $corpo .= "E-mail: $email\n";
    $corpo .= "Mensagem:\n$mensagem";

    $headers = "From: ruberttramires@hotmail.com"; // Substitua pelo seu endereço de e-mail

    mail("ruberttramires@hotmail.com", $assunto, $corpo, $headers);

    // Redirecionar o usuário após o envio
    header("Location: obrigado.html");
}
?>
