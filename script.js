window.onload = function () {
    // Arka plan efekti
    const backgroundEffect = document.getElementById('backgroundEffect');
    if (backgroundEffect) { // Element kontrolü
        backgroundEffect.style.background = 'url("h1.gif") no-repeat center center';
        backgroundEffect.style.backgroundSize = 'cover';
        backgroundEffect.style.position = 'fixed';
        backgroundEffect.style.top = 0;
        backgroundEffect.style.left = 0;
        backgroundEffect.style.width = '100%';
        backgroundEffect.style.height = '100%';
        backgroundEffect.style.zIndex = -1;
    }

    // Yazılar
    const overlayText = document.getElementById('overlayText');
    if (overlayText) {
        const h1 = document.createElement('h1');
        h1.textContent = 'Bekir.dev';
        h1.style.fontSize = '3rem';
        h1.style.textShadow = '2px 2px 10px rgba(0, 0, 0, 0.8)';
        overlayText.appendChild(h1);

        const h2 = document.createElement('h2');
        h2.textContent = 'Key Login';
        h2.style.fontSize = '1.5rem';
        h2.style.marginTop = '0';
        h2.style.marginBottom = '30px';
        h2.style.fontWeight = 'normal';
        overlayText.appendChild(h2);

        overlayText.style.position = 'absolute';
        overlayText.style.top = '40%';
        overlayText.style.left = '50%';
        overlayText.style.transform = 'translate(-50%, -50%)';
        overlayText.style.textAlign = 'center';
        overlayText.style.color = 'white';
        overlayText.style.zIndex = 1;
    }

    // Key Input
    const keyInput = document.getElementById('keyInput');
    const keyInputContainer = document.getElementById('keyInputContainer');
    if (window.location.pathname.includes('success.html') && keyInputContainer) {
        keyInputContainer.style.display = 'none';
    }

    if (keyInput) {
        keyInput.addEventListener('keydown', function (event) {
            if (event.key === 'Enter') {
                const key = keyInput.value.trim();
                const correctKey1 = 'bekirdev';
                const correctKey2 = 'bekirbaba';

                if (key === correctKey1) {
                    keyInputContainer.style.display = 'none';
                    window.location.href = 'success.html';
                } else if (key === correctKey2) {
                    keyInputContainer.style.display = 'none';
                    window.location.href = 'different_page.html';
                } else {
                    alert('Hatalı anahtar! Tekrar deneyin.');
                }
            }
        });
    }
};
