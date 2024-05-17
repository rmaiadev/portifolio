const menuItems = document.querySelectorAll(".header-menu a");

menuItems.forEach((item) => {
  item.addEventListener("click", scrollmenu);
});

function scrollmenu(event) {
  event.preventDefault();
  const elemento = event.target;
  const id = elemento.getAttribute("href");
  const to = document.querySelector(id).offsetTop;

  window.scroll({
    top: to,
    behavior: "smooth",
  });
}

const headerTop = document.querySelectorAll(".subir a");

headerTop.forEach((item) => {
  item.addEventListener("click", scrollheader);
});

function scrollheader(event) {
  event.preventDefault();
  const cima = event.target;
  const id = cima.getAttribute("href");
  const t = document.querySelector(id).offsetTop;

  window.scroll({
    top: t,
    behavior: "smooth",
  });
}


/*
Scroll-exp
*/

window.sr = ScrollReveal({ reset: true });

sr.reveal('#empresa1', { 
  distance: '30px',
  origin: 'rigth',
  duration: 2000
});

sr.reveal('#empresa2', { 
  distance: '30px',
  origin: 'left',
  duration: 3000
});

sr.reveal('#empresa3', { 
  distance: '260px',
  origin: 'rigth',
  duration: 3000
});

sr.reveal(".info2", {
  distance: '260px',
  origin: 'left',
  duration: 3000
}); 

sr.reveal(".info", {
  distance: '260px',
  origin: 'rigth',
  duration: 3000
}); 

sr.reveal('#html', {
  distance: '360px',
  origin: 'top',
  duration: 1700
});


/*
modo-dark
*/


const btn = document.getElementById('btn');

btn.addEventListener("change", (e) => {
  document.body.classList.toggle("dark", e.target.checked)
})

const btnMobile = document.getElementById('btn-mobile');

function toggleMenu(event) {
  if (event.type === 'touchstart') event.preventDefault;
  const nav = document.getElementById('nav');
  nav.classList.toggle('active')
}

btnMobile.addEventListener('click', toggleMenu);
btnMobile.addEventListener('touchstart', toggleMenu);
