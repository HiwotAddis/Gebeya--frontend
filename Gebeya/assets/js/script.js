function toggleNav() {
  const nav = document.querySelector('.nav');
  nav.style.display = (nav.style.display === 'flex') ? 'none' : 'flex';
}


function redirectToCart() {
  window.location.href = "../cart.html"; // Replace "/cart" with the URL of your cart page
}
function redirectToCheckOut() {
  window.location.href = "../checkout.html"; // Replace "/cart" with the URL of your cart page
}
// Select elements
const minusButton = document.querySelector('.minus');
const plusButton = document.querySelector('.plus');
const quantityInput = document.querySelector('.quantity input');

// Add event listener for minus button
minusButton.addEventListener('click', () => {
  let currentValue = parseInt(quantityInput.value, 10);
  if (currentValue > parseInt(quantityInput.min, 10)) {
    quantityInput.value = currentValue - 1;
  }
});

// Add event listener for plus button
plusButton.addEventListener('click', () => {
  let currentValue = parseInt(quantityInput.value, 10);
  quantityInput.value = currentValue + 1;
});
