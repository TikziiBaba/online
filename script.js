window.onload = function () {
    // Arka plan efektini ekle
    const backgroundEffect = document.getElementById('backgroundEffect');
    backgroundEffect.style.background = 'url("h1.gif") no-repeat center center'; // GIF dosyasının yolunu kontrol et
    backgroundEffect.style.backgroundSize = 'cover';
    backgroundEffect.style.position = 'fixed';
    backgroundEffect.style.top = 0;
    backgroundEffect.style.left = 0;
    backgroundEffect.style.width = '100%';
    backgroundEffect.style.height = '100%';
    backgroundEffect.style.zIndex = -1;

    // Yazıları dinamik olarak ekle
    const overlayText = document.getElementById('overlayText');
    
    // "Bekir.dev" yazısını ekle
    const h1 = document.createElement('h1');
    h1.textContent = 'Bekir.dev';
    h1.style.fontSize = '3rem';
    h1.style.textShadow = '2px 2px 10px rgba(0, 0, 0, 0.8)';
    overlayText.appendChild(h1);

    // "Key Login" yazısını ekle
    const h2 = document.createElement('h2');
    h2.textContent = 'Key Login';
    h2.style.fontSize = '1.5rem';
    h2.style.marginTop = '0';
    h2.style.marginBottom = '30px';
    h2.style.fontWeight = 'normal';
    overlayText.appendChild(h2);
    
    // Ortalamak için gerekli stil ayarlarını ekle
    overlayText.style.position = 'absolute';
    overlayText.style.top = '40%';
    overlayText.style.left = '50%';
    overlayText.style.transform = 'translate(-50%, -50%)';
    overlayText.style.textAlign = 'center';
    overlayText.style.color = 'white';
    overlayText.style.zIndex = 1;

    // Anahtar giriş alanı (Enter tuşuna basıldığında kontrol et)
    const keyInput = document.getElementById('keyInput');
    const keyInputContainer = document.getElementById('keyInputContainer');

    // Eğer sayfa success.html ise, inputu gizle
    if (window.location.pathname.includes('success.html')) {
        keyInputContainer.style.display = 'none';  // inputu gizle
    }

    keyInput.addEventListener('keydown', function (event) {
        if (event.key === 'Enter') { // Enter tuşuna basıldığında
            const key = keyInput.value.trim();
            const correctKey1 = 'bekirdev'; // Doğru anahtar 1
            const correctKey2 = 'bekirbaba'; // Doğru anahtar 2

            if (key === correctKey1) {
                // Şifre doğru girildiğinde, inputu gizle ve success.html'ye yönlendir
                keyInputContainer.style.display = 'none';
                window.location.href = 'success.html'; // Hedef HTML dosyasına yönlendir
            } else if (key === correctKey2) {
                // Şifre "bekirbaba" ise, farklı bir hedefe yönlendir
                keyInputContainer.style.display = 'none';
                window.location.href = 'different_page.html'; // Farklı hedef HTML dosyasına yönlendir
            } else {
                alert('Hatalı anahtar! Tekrar deneyin.');
            }
        }
    });
};
