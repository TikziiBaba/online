<?php
use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;

// PHPMailer sınıfını dahil et
require 'vendor/autoload.php';

// Mesajı al
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $message = $_POST['message'];

    // PHPMailer sınıfı oluştur
    $mail = new PHPMailer(true);

    try {
        // Sunucu yapılandırması
        $mail->isSMTP();
        $mail->Host = 'smtp.gmail.com'; // SMTP sunucu adresi (burada Gmail örneği)
        $mail->SMTPAuth = true;
        $mail->Username = 'dedyusuf99@gmail.com'; // SMTP sunucusu için kullanıcı adı
        $mail->Password = '309560Sa'; // SMTP sunucusu için parola
        $mail->SMTPSecure = PHPMailer::ENCRYPTION_STARTTLS;
        $mail->Port = 587;

        // Gönderen bilgisi
        $mail->setFrom('no-reply@tikzidev.online', 'Tikzidev');
        $mail->addReplyTo('no-reply@tikzidev.online', 'Tikzidev');

        // Alıcı bilgisi
        $mail->addAddress('dedyusuf99@gmail.com@tikzidev.online'); // Buraya kendi e-posta adresinizi yazın

        // E-posta başlığı ve içeriği
        $mail->isHTML(true);
        $mail->Subject = 'Yeni Mesaj';
        $mail->Body    = 'Yeni gelen mesaj: <br>' . nl2br(htmlspecialchars($message));

        // E-posta gönderme
        if ($mail->send()) {
            echo 'Mesaj başarıyla gönderildi.';
        } else {
            echo 'Mesaj gönderilemedi.';
        }
    } catch (Exception $e) {
        echo "Mesaj gönderilemedi. Hata: {$mail->ErrorInfo}";
    }
}
?>
