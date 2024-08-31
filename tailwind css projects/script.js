     // Mobile Menu Toggle
     const menuButton = document.getElementById('menu-button');
     const mobileMenu = document.getElementById('mobile-menu');
     
     menuButton.addEventListener('click', () => {
         mobileMenu.classList.toggle('hidden');
     });
