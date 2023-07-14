/* Cuando hago CLICK .button, .nav TOGGLE 'activo' */
const button = document.querySelector('.button')
const nav    = document.querySelector('.nav')

button.addEventListener('click',()=>{
    nav.classList.toggle('activo')
})

// e
window.addEventListener('scroll', function () {
    const parallaxVideo = document.querySelector('.parallax-video');
    const scrolled = window.pageYOffset;
    parallaxVideo.style.transform = 'translateY(' + scrolled * 0.4 + 'px)';
  });