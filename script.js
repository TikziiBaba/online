// Ürünler bilgisi
const products = [
    { id: 1, name: 'Database Service', price: 0, image: 'images/database.png' },
    { id: 2, name: 'Developer Service', price: 0, image: 'images/developer.png' }
];

// HTML sayfasındaki ürünleri dinamik olarak yazdırmak
document.addEventListener('DOMContentLoaded', function () {
    const productElements = document.querySelectorAll('.product');
    const loadingScreen = document.getElementById('loadingScreen');

    // Başlangıçta yükleme ekranını gizle
    loadingScreen.style.display = 'none';

    // Ürün bilgilerini dinamik olarak yerleştirme
    productElements.forEach((productElement, index) => {
        const product = products[index];

        // Ürün ismi ve fiyatını ekleme
        productElement.querySelector('.product-title').textContent = product.name;
        productElement.querySelector('.product-price').textContent = `Fiyat: ${product.price}₺`;

        // Ürün resmini ekleme
        const imgElement = productElement.querySelector('img');
        imgElement.src = product.image;
        imgElement.alt = product.name;

        // "Sepete Ekle" butonuna işlev ekleme
        productElement.querySelector('.add-to-cart').addEventListener('click', function () {
            addToCart(product);
        });
    });
});

// Sepet ve toplam fiyat verileri
let cart = [];
let total = 0;

// Sepete ürün ekleme fonksiyonu
function addToCart(product) {
    cart.push(product);
    total += product.price;

    updateCart();
}

// Sepeti güncelleme fonksiyonu
function updateCart() {
    const cartButton = document.getElementById('cartButton');
    cartButton.textContent = `Sepet (${cart.length})`;

    const totalPriceElement = document.getElementById('totalPrice');
    totalPriceElement.textContent = `Toplam: ${total}₺`;
}

// Sepet modalını açma fonksiyonu
document.getElementById('cartButton').addEventListener('click', function () {
    const cartModal = document.getElementById('cartModal');
    const cartItemsContainer = document.getElementById('cartItems');

    // Sepet içeriğini temizle
    cartItemsContainer.innerHTML = '';

    // Sepetteki ürünleri listele
    cart.forEach(item => {
        const itemElement = document.createElement('p');
        itemElement.textContent = `${item.name} - ${item.price}₺`;
        cartItemsContainer.appendChild(itemElement);
    });

    // Modalı göster
    cartModal.style.display = 'flex';
});

// Sepet modalını kapama fonksiyonu
document.getElementById('closeCartButton').addEventListener('click', function () {
    const cartModal = document.getElementById('cartModal');
    cartModal.style.display = 'none';
});

// Yükleme ekranını gösterme ve ödeme sayfasına yönlendirme
function showLoadingScreen() {
    // Yükleme ekranını göster
    const loadingScreen = document.getElementById('loadingScreen');
    loadingScreen.style.display = 'flex';

    // 2 saniye sonra ödeme sayfasına yönlendir
    setTimeout(function () {
        const paymentUrl = "https://tikzidev.xyz/"; // Ödeme sayfası URL'si
        window.location.href = paymentUrl;
    }, 2000); // 2 saniye bekle
}
