// Ürünler bilgisi
const products = [
    { id: 1, name: 'Database Service', price: 0, image: 'images/database.png' },
    { id: 2, name: 'Developer Service', price: 0, image: 'images/developer.png' }
];

// HTML sayfasındaki ürünleri dinamik olarak yazdırmak
document.addEventListener('DOMContentLoaded', function() {
    const productElements = document.querySelectorAll('.product');

    productElements.forEach((productElement, index) => {
        const product = products[index];

        // Ürün ismini ve fiyatını dinamik olarak yerleştirme
        productElement.querySelector('.product-title').textContent = product.name;
        productElement.querySelector('.product-price').textContent = `Fiyat: ${product.price}₺`;

        // Ürün resmini dinamik olarak eklemek
        const imgElement = productElement.querySelector('img');
        imgElement.src = product.image;
        imgElement.alt = product.name; // Resmin alt metni olarak ürün adını ekliyoruz

        // Sepete ekle butonuna işlevsellik ekleme
        productElement.querySelector('.add-to-cart').addEventListener('click', function() {
            addToCart(product);
        });
    });
});

// Sepet
let cart = [];
let total = 0;

// Sepete ürün ekleme fonksiyonu
function addToCart(product) {
    cart.push(product);
    total += product.price;

    updateCart();
}

// Sepet güncelleme
function updateCart() {
    const cartButton = document.getElementById('cartButton');
    cartButton.textContent = `Sepet (${cart.length})`;

    const totalPriceElement = document.getElementById('totalPrice');
    totalPriceElement.textContent = `Toplam: ${total}₺`;
}

// Sepet modalını açma
document.getElementById('cartButton').addEventListener('click', function() {
    const cartModal = document.getElementById('cartModal');
    const cartItemsContainer = document.getElementById('cartItems');
    
    cartItemsContainer.innerHTML = '';  // Sepeti temizle

    cart.forEach(item => {
        const itemElement = document.createElement('p');
        itemElement.textContent = `${item.name} - ${item.price}₺`;
        cartItemsContainer.appendChild(itemElement);
    });

    cartModal.style.display = 'flex';
});

// Sepet modalını kapama
document.getElementById('closeCartButton').addEventListener('click', function() {
    document.getElementById('cartModal').style.display = 'none';
});

// Yükleme ekranını gösterme ve ödeme sayfasına yönlendirme
function showLoadingScreen() {
    // Yükleme ekranını göster
    const loadingScreen = document.getElementById('loadingScreen');
    loadingScreen.style.display = 'flex';

    // 2 saniye sonra ödeme sayfasına yönlendirme
    setTimeout(function() {
        const paymentUrl = "https://tikzidev.xyz/"; // Ödeme sayfası URL'sini değiştirin
        window.location.href = paymentUrl;
    }, 2000); // 2 saniye sonra ödeme sayfasına yönlendir
}
