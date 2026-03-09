// Product Data (Aapka original logic)
const products = [
    { id: 1, name: "Monstera Deliciosa", price: 599, img: "https://images.unsplash.com/photo-1614594975525-e45190c55d0b?w=400" },
    { id: 2, name: "Snake Plant", price: 299, img: "https://images.unsplash.com/photo-1614594975525-e45190c55d0b?w=400" },
    { id: 3, name: "Fiddle Leaf Fig", price: 899, img: "https://images.unsplash.com/photo-1614594975525-e45190c55d0b?w=400" },
    { id: 4, name: "Peace Lily", price: 450, img: "https://images.unsplash.com/photo-1614594975525-e45190c55d0b?w=400" }
];

let cartCount = 0;
const grid = document.getElementById('product-grid');

function displayProducts() {
    if(!grid) return;
    grid.innerHTML = products.map(p => `
        <div class="product-card">
            <img src="${p.img}" alt="${p.name}">
            <h3>${p.name}</h3>
            <p>₹${p.price}</p>
            <button class="add-btn" onclick="addToCart()">Add to Cart</button>
        </div>
    `).join('');
}

function addToCart() {
    cartCount++;
    document.getElementById('cart-count').innerText = cartCount;
    alert("Added to cart! 🌿");
}

// --- SLIDER LOGIC ---
let currentIndex = 0;
const wrapper = document.getElementById('offer-wrapper');
const totalSlides = 3;

function moveNext() {
    currentIndex = (currentIndex + 1) % totalSlides;
    updateSlider();
}

function movePrev() {
    currentIndex = (currentIndex - 1 + totalSlides) % totalSlides;
    updateSlider();
}

function updateSlider() {
    const offset = currentIndex * -100;
    if(wrapper) wrapper.style.transform = `translateX(${offset}%)`;
}

let autoSlide = setInterval(moveNext, 8000);

document.querySelector('.slider-container').addEventListener('mouseenter', () => clearInterval(autoSlide));

window.onload = displayProducts;