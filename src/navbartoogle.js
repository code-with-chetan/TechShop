
// navbarToggle.js

export function initMobileNavbarToggle() {
  const mobileButton = document.querySelector(".mobile-nav-con");
  const mobileHeader = document.querySelector(".navbar-section");

  const toggle = () => {
    mobileHeader.classList.toggle('active');
  };

  if (mobileButton && mobileHeader) {
    mobileButton.addEventListener('click', toggle);
  }
}