import { getCartItems, saveCartItems, updateCartCount } from "./cartUtiliy";
import { initMobileNavbarToggle } from "./navbartoogle";

const productTemplate=document.querySelector("#productCartTemplate");
const productCartContainer=document.querySelector("#productCartContainer");

let cartItems=getCartItems(); //getting cart items from local storage and assign to variable cart items.

function renderCart(){
    cartItems = getCartItems();
  productCartContainer.innerHTML="";
  
  if(!cartItems.length){
    productCartContainer.innerHTML="<h2>Your cart is empty!</h2>";
     updateCartCount(); 
     updateTotalAmount(0);
    return;
  }

  cartItems.forEach((products)=>{
    const {id,name,image,price,totalPrice,quantity,stock}=products;
    const clone=document.importNode(productTemplate.content,true);

    clone.querySelector(".productImage").src=image;
    clone.querySelector(".productImage").alt=name;
    clone.querySelector(".productName").textContent=name;
    clone.querySelector(".productPrice").textContent = `$${totalPrice.toFixed(2)}`;
    clone.querySelector(".productQuantity").textContent=quantity;


    //Increment
    clone.querySelector(".cartIncrement").addEventListener("click",()=>{
      if(products.quantity<stock){
        products.quantity++;
        products.totalPrice = Number((products.quantity * products.price).toFixed(2));
        saveCartItems(cartItems);
        renderCart();
      }
    });


    //Decrement
    clone.querySelector(".cartDecrement").addEventListener("click",()=>{
      if(products.quantity > 1){
        products.quantity--;
        products.totalPrice = Number((products.quantity * products.price).toFixed(2));
        saveCartItems(cartItems);
        renderCart();
      }
    });

    //Remove
    clone.querySelector(".remove-to-cart-button").addEventListener("click",()=>{
      cartItems=cartItems.filter(item=>item.id!==id);
      saveCartItems(cartItems);
      renderCart();
    });

    productCartContainer.appendChild(clone);

   });

    // Update total amount dynamically
   const totalAmount = cartItems.reduce((acc, item) => acc + item.totalPrice, 0);
   updateTotalAmount(totalAmount);

  // Helper function to update total amount display
    function updateTotalAmount(amount) {
    const subtotalElement = document.getElementById("subtotalAmount");
    if (subtotalElement) {
    subtotalElement.textContent = amount > 0 ? `$${amount.toFixed(2)}` : "$0.00";
   }
  }

  //calling the function for the cart icon update.
updateCartCount();

}

renderCart();


window.addEventListener('storage', (e) => {
  if (e.key === 'cartItems') {
    updateCartCount();
  }
});


//toggling navbar
initMobileNavbarToggle();
