const links = document.querySelectorAll('.navbar__link');
const sections = document.querySelectorAll('section');

links.forEach((link) => {
   link.addEventListener('click', (e) => {
      links.forEach((link) => link.classList.remove('active'));

      e.target.classList.add('active');
   });
});

window.addEventListener('scroll', () => {
   const heightWindow = window.scrollY;
   const heightClient = document.documentElement.clientHeight;

   links.forEach((item, index) => {
      if (heightWindow > heightClient * index - heightClient / 2) {
         links.forEach((link) => link.classList.remove('active'));
         item.classList.add('active');
      }
   });
});
