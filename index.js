const links = document.querySelectorAll('.navbar__link');

links.forEach((link) => {
   link.addEventListener('click', (e) => {
      const linkActive = document.querySelector('.navbar__link.active');
      linkActive.classList.remove('active');

      e.target.classList.add('active');
   });
});
