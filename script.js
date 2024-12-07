document.getElementById('messageForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Sayfanın yenilenmesini engeller

    // Textbox'tan veriyi al
    const userMessage = document.getElementById('userMessage').value;

    // AJAX ile PHP'ye veri gönder
    const xhr = new XMLHttpRequest();
    xhr.open("POST", "send_email.php", true);
    xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");

    // PHP'ye veri gönderme
    xhr.send("message=" + encodeURIComponent(userMessage));

    // İstek başarılı olursa kullanıcıya bilgi ver
    xhr.onload = function() {
        if (xhr.status === 200) {
            alert("Mesajınız başarıyla gönderildi!");
            document.getElementById('userMessage').value = ''; // Textbox'ı temizle
        } else {
            alert("Mesaj gönderilemedi. Lütfen tekrar deneyin.");
        }
    };
});
