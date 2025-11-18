let cartIcon = document.querySelector("#cart-icon");
let cart = document.querySelector(".cart");
let cartClose = document.querySelector("#cart-close");

cartIcon.addEventListener("click", () => {
  cart.classList.add("active");
});
cartClose.addEventListener("click", () => {
  cart.classList.remove("active");
});

let addCartButton = document.querySelectorAll(".add-cart");

addCartButton.forEach((button) => {
  button.addEventListener("click", (event) => {
    const productBox = event.target.closest(".product-box");
    addToCart(productBox)
  });
});
