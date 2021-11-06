'use strict';

let fitlerPopup = document.querySelector('.filterPopup');
let fitlerLabel = document.querySelector('.filterLabel');
let filterIcon = document.querySelector('.filterIcon');

fitlerLabel.addEventListener('click', function () {
    fitlerPopup.classList.toggle('hidden');
    fitlerLabel.classList.toggle('filterLabelPink');
    filterIcon.classList.toggle('filterIconPink');

    if (filterIcon.getAttribute('src') === 'images/filter.svg') {
        filterIcon.setAttribute('src', 'images/filterHover.svg')
    } else {
        filterIcon.setAttribute('src', 'images/filter.svg')
    }
});

let filterHeaders = document.querySelectorAll('.filterCategoryHeader');
filterHeaders.forEach(function (header) {
    header.addEventListener('click', function (event) {
        event.target.nextElementSibling.classList.toggle('hidden');
    })
});

let filterSizes = document.querySelector('.filterSizes');
let filterSizeWrap = document.querySelector('.filterSizeWrap');
filterSizeWrap.addEventListener('click', function () {
    filterSizes.classList.toggle('hidden');
});



let cart = {
    itemsInCartCount: 0,
    totalPrice: 0,
    currentItemName: null,
    currentItemPrice: 0,
    currentItemAmount: 0,
    currentItemTotal: 0
};

let featuredItems = document.querySelectorAll('.featuredItem');
let cartIconCounter = document.querySelector('.cartIconWrap > span');
cartIconCounter.innerText = 0;

let cartIcon = document.querySelector('.cartIcon');
cartIcon.addEventListener('click', showCart);

let cartEl = document.createElement('div');
cartEl.innerText = 'test';
cartEl.classList.add('cart');
const leftHeader = document.querySelector('.leftHeader');
leftHeader.parentNode.insertBefore(cartEl, leftHeader.nextSibling);

function showCart() {
    cartEl.classList.toggle("cart-visible");
    cartEl.innerHTML = cartElMarkup();
}

function cartElMarkup() {

    return `<div class='cart-container'>
    <div class='cart-elements'>productName</div>
    <div class='cart-elements'>Quantity</div>
    <div class='cart-elements'>Price per piece</div>
    <div class='cart-elements'>Total</div>
    </div>
    <div class='cart-container'>
    <div class='cart-elements'>${cart.currentItemName}</div>
    <div class='cart-elements'>${cart.currentItemAmount}</div>
    <div class='cart-elements'>${cart.currentItemPrice}</div>
    <div class='cart-elements'>$${cart.currentItemTotal}</div>
    </div>
    <div class='cart-container'>
    <div class='cart-elements total'>Total price in cart: $${cart.totalPrice}</div>
    </div>`
}

let itemImgName = null; // only difference between items is its image names

featuredItems.forEach(addToCart)

/**
 * listens to clicks on image of every featured item and calls clickHandler on every click
 * if previous click was on a different image - resets currentItemAmount and currentItemTotal
 */
function addToCart(item) {
    const itemImg = item.querySelector('.featuredImgWrap');
    itemImg.addEventListener('click', () => {
        cartIconCounter.innerText = parseInt(cartIconCounter.innerText) + 1;
        const image = itemImg.querySelector('img');
        if (image.getAttribute('src') != itemImgName) {
            cart.currentItemAmount = 0;
            cart.currentItemTotal = 0;
        }
        itemImgName = image.getAttribute('src')
        clickHandler(item);
        cartEl.innerHTML = cartElMarkup();
    });
}
/**
 * adds all needed info to cart object
 */
function clickHandler(item) {
    cart.itemsInCartCount += 1;
    cart.currentItemAmount += 1;
    cart.currentItemName = item.querySelector('.featuredName').innerText;
    cart.currentItemPrice = item.querySelector('.featuredPrice').innerText;
    cart.totalPrice += parseFloat(cart.currentItemPrice.substring(1));
    cart.currentItemTotal += parseFloat(cart.currentItemPrice.substring(1));
};

