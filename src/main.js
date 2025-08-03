import './style.css'
import myProducts from './api/products.json';
import { showProducts } from './homeproduct';
import { initMobileNavbarToggle } from './navbartoogle';

//calling main products
showProducts(myProducts);

initMobileNavbarToggle();






