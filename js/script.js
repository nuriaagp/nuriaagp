console.log ('hola')

const menuButton = document.getElementById('menu-button');
const menu = document.getElementById('menu');

// Animació Botó menu
menuButton.addEventListener('click', () => {
  if (menu.style.display === 'block') {
    menu.style.display = 'none'; // Oculta el menú
  } else {
    menu.style.display = 'block'; // Mostra el menú
  }
});

//Nose como hacer que cuando aparezca la landing page el boton este cerrado

//Animació intro
document.addEventListener("DOMContentLoaded", () => {
  const intro = document.getElementById("intro");
  const landing = document.getElementById("landing-page");

});

//Timeline
const tl = gsap.timeline();
const landing = document.getElementById("landing-page");

gsap.registerPlugin(ScrambleTextPlugin);

tl.to(".intro-text", {
    scrambleText: "Nan Goldin",
    duration: 3, 
    delay: 1,    
    ease: "power2.out", 
  });

tl.to("#intro", {
  opacity: 0, 
  duration: 0.5,
  onComplete: () => {
    console.log("Intro completada, cambiando a la landing-page.");
    intro.style.display = "none"; 
    landing.classList.remove("hidden"); 
    document.body.style.overflow = "auto"; 
  },
});

//Boto que et porti a l'inici de la landing page

const backToTopButton = document.querySelector(".back-to-top");

//que apareixi el boto
window.addEventListener("scroll", () => {
  const scrollPosition = window.scrollY || document.documentElement.scrollTop;
  const windowHeight = document.documentElement.scrollHeight / 3;

  if (scrollPosition > windowHeight) {
    gsap.to(backToTopButton, {
      opacity: 1,
      pointerEvents: "auto", // Permite clics
    });
  } else {
    gsap.to(backToTopButton, {
      opacity: 0,
      pointerEvents: "none", // Desactiva clics
    });
  }
});
//quan faci click puji a dalt
backToTopButton.addEventListener("click", () => {
  gsap.to(window, {
    scrollTo: 0, 
    duration: 1.5,
    ease: "power2.inOut",
  });
});
