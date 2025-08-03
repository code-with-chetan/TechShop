//Get all the cart items from localStorage.

export function getCartItems(){
    return JSON.parse(localStorage.getItem("cartItems"))||[];
}

//save the updated cart items to local storage.
export function saveCartItems(items){
    localStorage.setItem("cartItems",JSON.stringify(items));
}


//function for the handling the cart icon .(update the cart icon value )

export function updateCartCount(){
    const cartIcon=document.getElementById("cart-page--icon");
    const cartItems=JSON.parse(localStorage.getItem("cartItems"))||[];
    const productCount=cartItems.length; //number of product currently available in cart page.
    cartIcon.textContent=productCount;

}