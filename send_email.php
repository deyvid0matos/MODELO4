<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $name = htmlspecialchars($_POST['name']);
    $email = htmlspecialchars($_POST['email']);
    $phone = htmlspecialchars($_POST['phone']);
    $area = htmlspecialchars($_POST['area']);
    $message = htmlspecialchars($_POST['message']);

    $to = "deyvid54@live.com"; // Substitua pelo seu e-mail
    $subject = "Mensagem do formulário: $area";
    $headers = "From: $email\r\n";
    $headers .= "Reply-To: $email\r\n";
    $headers .= "Content-Type: text/plain; charset=UTF-8\r\n";

    $body = "Você recebeu uma nova mensagem do formulário:\n\n";
    $body .= "Nome: $name\n";
    $body .= "Email: $email\n";
    $body .= "Telefone: $phone\n";
    $body .= "Assunto: $area\n\n";
    $body .= "Mensagem:\n$message\n";

    if (mail($to, $subject, $body, $headers)) {
        echo "Mensagem enviada com sucesso!";
    } else {
        echo "Erro ao enviar a mensagem. Tente novamente mais tarde.";
    }
} else {
    echo "Método de requisição inválido.";
}
?>
