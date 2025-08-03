// Import the required functions
import { defineConfig } from "vite";
import { resolve } from "path";

// Export Vite configuration
export default defineConfig({
  // Set base to relative path so assets work when opened locally or in a subfolder
  base: "./",

  build: {
    rollupOptions: {
      input: {
        // Entry points for different HTML pages in your multi-page site
        main: resolve(__dirname, "index.html"),
        products: resolve(__dirname, "product.html"),
        contact: resolve(__dirname, "contact.html"),
        singleProduct: resolve(__dirname, "singleProduct.html"),
        about:resolve(__dirname,"about.html"),
        cartIconPage:resolve(__dirname,"carticonpage.html"),

      },
    },
  },
});
