import { updateCartCount } from "./cartUtiliy";
import { initMobileNavbarToggle } from "./navbartoogle";


const selectedProduct=JSON.parse(localStorage.getItem("selectedProducts"));
if(!selectedProduct){
    window.location.href="index.html";//redirect if no product found.
}

else{

    //update the html elements with the data from the selected products
   document.getElementById("product-img").src=selectedProduct.image;
   document.getElementById("product-img").alt=selectedProduct.name;
   document.getElementById("product-heading").textContent=selectedProduct.name;
   document.getElementById("price").textContent=`$ ${selectedProduct.price}`;
   document.getElementById("description").textContent=selectedProduct.description;
   document.getElementById("stock").textContent=selectedProduct.stock;

   // Initial quantity
let currentQty = 1;

// Get max stock from the page (already set from selectedProduct.stock)
const maxStock = parseInt(document.getElementById('stock').textContent);

// Parent container for quantity buttons
const quantityContainer = document.querySelector('.quantity-button');
const valueBtn = quantityContainer.querySelector('.valuebtn');

// Use event delegation (for the increment and decrement button)
quantityContainer.addEventListener('click', (e) => {
  const target = e.target;

  if (target.classList.contains('increment')) {
    if (currentQty < maxStock) {
      currentQty++;
      valueBtn.textContent = currentQty;
    }
  }

  if (target.classList.contains('decrement')) {
    if (currentQty > 1) {
      currentQty--;
      valueBtn.textContent = currentQty;
    }
  }
});

//functionality for the add to cart button
document.querySelector(".addTo-cart--btn").addEventListener("click", () => {
  let cart = JSON.parse(localStorage.getItem("cartItems")) || [];
  const existingIndex = cart.findIndex(item => item.id === selectedProduct.id);
  const unitPrice = selectedProduct.price;
  const quantityToAdd = currentQty;

  if (existingIndex !== -1) {
    const existingItem = cart[existingIndex];

    // ✅ Check if quantity is same as selected
    if (existingItem.quantity === quantityToAdd) {
      alert("This product is already added with the same quantity.");
      return;
    }

    // ✅ Check if the new quantity exceeds stock
    if (quantityToAdd > selectedProduct.stock) {
      alert("You have reached the stock limit.");
      return;
    }

    // ✅ Update to selected quantity
    existingItem.quantity = quantityToAdd;
    existingItem.totalPrice = unitPrice * quantityToAdd;

  } else {
    const productToAdd = {
      id: selectedProduct.id,
      name: selectedProduct.name,
      image: selectedProduct.image,
      price: selectedProduct.price,
      quantity: quantityToAdd,
      totalPrice: unitPrice * quantityToAdd,
      stock: selectedProduct.stock,
    };

    cart.push(productToAdd);
  }

  localStorage.setItem("cartItems", JSON.stringify(cart));
  //calling function for the update cart icon.
 updateCartCount();
     
 window.addEventListener('storage', (e) => {
     if (e.key === 'cartItems') {
      updateCartCount();
       }
      });
      
});

}

 //calling function for the update cart icon.
 updateCartCount();
     
 window.addEventListener('storage', (e) => {
     if (e.key === 'cartItems') {
      updateCartCount();
       }
      });


//toggling for the mobile navbar icon.
initMobileNavbarToggle();






