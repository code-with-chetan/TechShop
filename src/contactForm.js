import { updateCartCount } from "./cartUtiliy";
import { initMobileNavbarToggle } from "./navbartoogle";


const signUpButton = document.querySelector(".signup");
const signInButton = document.querySelector(".signin");
const getUserName = document.querySelector("#userName");
const getUserEmail = document.querySelector("#userEmail");
const getUserPassword = document.querySelector("#userPassword");
const errorMessage = document.getElementById("errorMessage");

// Regular expressions for validation
const userName = /^[A-Za-z .]{3,20}$/;
const userEmail = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
const userPassword = /^[a-zA-Z0-9\s\W_]{4,}$/;

// Real-time validation for username
getUserName.addEventListener("input", () => {
   if (!userName.test(getUserName.value.trim())) {
      errorMessage.textContent = "Minimum 3 characters.";
   } else {
      errorMessage.textContent = "";
   }
});

// Real-time validation for email
getUserEmail.addEventListener("input", () => {
   if (!userEmail.test(getUserEmail.value.trim())) {
      errorMessage.textContent = "Enter a valid email";
   } else {
      errorMessage.textContent = "";
   }
});

// Real-time validation for password
getUserPassword.addEventListener("input", () => {
   if (!userPassword.test(getUserPassword.value.trim())) {
      errorMessage.textContent = "Minimum 4 characters";
   } else {
      errorMessage.textContent = "";
   }
});

// Sign In button functionality
const actSignInButton = () => {
   document.querySelector(".username").style.maxHeight = "0";
   document.querySelector(".username").style.display = "none";
   signInButton.classList.remove("Disable");
   signUpButton.classList.add("Disable");
   document.querySelector(".form-title").innerText = "Sign In";
   document.querySelector(".underline").style.transform = "translateX(20px)";
};

// Sign Up button functionality
const actSignUpButton = () => {
   document.querySelector(".username").style.maxHeight = "3.7rem";
   document.querySelector(".username").style.display = "flex";
   signInButton.classList.add("Disable");
   signUpButton.classList.remove("Disable");
   document.querySelector(".form-title").innerText = "Sign Up";
   document.querySelector(".underline").style.transform = "translateX(0px)";
};

// Sign Up validation
const validateSignUp = () => {
   let isValid = true;

   if (!userName.test(getUserName.value.trim())) {
      errorMessage.textContent = "Invalid username";
      isValid = false;
   } else if (!userEmail.test(getUserEmail.value.trim())) {
      errorMessage.textContent = "Please enter a valid email";
      isValid = false;
   } else if (!userPassword.test(getUserPassword.value.trim())) {
      errorMessage.textContent = "Incorrect password";
      isValid = false;
   }

   if (isValid) {
      alert("Sign Up successfully!");
      getUserName.value = "";
      getUserEmail.value = "";
      getUserPassword.value = "";
   }
};

// Sign In validation
const validateSignIn = () => {
   let isValid = true;

   if (!userEmail.test(getUserEmail.value.trim())) {
      errorMessage.textContent = "Please enter a valid email";
      isValid = false;
   } else if (!userPassword.test(getUserPassword.value.trim())) {
      errorMessage.textContent = "Incorrect password";
      isValid = false;
   }

   if (isValid) {
      alert("Sign In successfully!");
      getUserEmail.value = "";
      getUserPassword.value = "";
   }
};

// Button event listeners
signUpButton.addEventListener("click", (e) => {
   e.preventDefault();
   actSignUpButton();
});

signInButton.addEventListener("click", (e) => {
   e.preventDefault();
   actSignInButton();
});

// Click events for validation
document.getElementById("SignOp").addEventListener("click", (event) => {
   event.preventDefault();
   validateSignUp();
});

document.getElementById("SignIo").addEventListener("click", (event) => {
   event.preventDefault();
   validateSignIn();
}); 


//toggling for the mobile navbar icon.
initMobileNavbarToggle();


//calling the update cart icon on this page also
updateCartCount();


window.addEventListener('storage', (e) => {
  if (e.key === 'cartItems') {
    updateCartCount();
  }
});



