let currentIndex = 0;
const images = document.querySelectorAll('.gallery-image');
const paginationContainer = document.querySelector('.pagination');

// Küçük numaraları oluştur
images.forEach((_, index) => {
    const dot = document.createElement('div');
    dot.addEventListener('click', () => goToImage(index));
    paginationContainer.appendChild(dot);
});

const paginationDots = document.querySelectorAll('.pagination div');
updatePagination();

// Resim değiştirme fonksiyonları
function changeImage(next = true) {
    images[currentIndex].classList.remove('active');
    paginationDots[currentIndex].classList.remove('active');

    if (next) {
        currentIndex = (currentIndex + 1) % images.length;
    } else {
        currentIndex = (currentIndex - 1 + images.length) % images.length;
    }

    images[currentIndex].classList.add('active');
    paginationDots[currentIndex].classList.add('active');
}

function goToImage(index) {
    images[currentIndex].classList.remove('active');
    paginationDots[currentIndex].classList.remove('active');

    currentIndex = index;

    images[currentIndex].classList.add('active');
    paginationDots[currentIndex].classList.add('active');
}

function updatePagination() {
    paginationDots[currentIndex].classList.add('active');
}

// 3 saniyede bir otomatik geçiş
setInterval(() => changeImage(true), 3000);

// **Klavye Yön Tuşlarıyla Geçiş**
document.addEventListener("keydown", (event) => {
    if (event.key === "ArrowRight") {
        changeImage(true); // Sağ ok tuşu → sonraki resme geç
    } else if (event.key === "ArrowLeft") {
        changeImage(false); // Sol ok tuşu → önceki resme geç
    }
});

// **Dokunmatik Kaydırma Desteği (Mobil İçin)**
let startX = 0;

document.querySelector("#gallery").addEventListener("touchstart", (event) => {
    startX = event.touches[0].clientX;
});

document.querySelector("#gallery").addEventListener("touchend", (event) => {
    let endX = event.changedTouches[0].clientX;
    let diff = startX - endX;

    if (diff > 50) {
        changeImage(true); // Parmağı sola kaydır → sonraki resim
    } else if (diff < -50) {
        changeImage(false); // Parmağı sağa kaydır → önceki resim
    }
});
