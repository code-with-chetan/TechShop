import { updateCartCount } from "./cartUtiliy";

const productTemplate=document.querySelector("#product-template");
const productContainer=document.querySelector(".product-container");
let globalProducts = [];

export const showProducts=(products)=>{
    if(!products){
        return false;
    }

     // ✅ Save products globally for other use
       globalProducts = products;

    products.forEach((currentProduct)=>{
        const{brand,category,description,id,image,name,price,stock}=currentProduct;
        
        //clone the products content
        const productClone=document.importNode(productTemplate.content,true);
        productClone.querySelector(".card-subhead").textContent=category;
        productClone.querySelector(".product-img").src=image;
        productClone.querySelector(".product-img").alt=name;
        productClone.querySelector(".product-heading").textContent=name;
        productClone.querySelector(".product-price").textContent=`$ ${price}`;

        //add event listener to redirect to a single product page.
        productClone.querySelector(".clickEventLink").addEventListener('click',()=>{
            localStorage.setItem("selectedProducts",JSON.stringify(currentProduct));
            window.location.href="singleProduct.html"//redirect to a single product page.
        })

        productContainer.append(productClone);
    }); 

};


//function which handles the offers section
const manualLinks = document.querySelectorAll(".manual-product-link");

manualLinks.forEach(link => {
  link.addEventListener("click", (e) => {
    e.preventDefault();
    
    const id = link.dataset.id;
    
    const product = globalProducts.find(p => p.id == id);
    
    if (product) {
      localStorage.setItem("selectedProducts", JSON.stringify(product));
      window.location.href = "singleProduct.html";
    } else {
      console.error("Product not found for id:", id);
    }
  });
});



  //calling function for the update cart icon.
     updateCartCount();
     
     window.addEventListener('storage', (e) => {
     if (e.key === 'cartItems') {
      updateCartCount();
       }
      });