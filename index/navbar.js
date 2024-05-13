const navbar = document.getElementById('navbar');
const content = document.querySelector('.content');

window.addEventListener('scroll', () => {
  const contentRect = content.getBoundingClientRect();
  
  if (contentRect.top <= 0) {
    navbar.style.position = 'fixed';
    navbar.style.top = '0';
    }else {
    navbar.style.position = 'sticky';
    }
});






