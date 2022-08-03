function menuClick() {
   if (document.querySelector(".menu ul").style.display == 'flex') {
      document.querySelector(".menu ul").style.display = 'none';
      document.querySelector(".menuMobile").style.opacity = 1;
   } else {
      document.querySelector(".menu ul").style.display = 'flex';
      document.querySelector(".menuMobile").style.opacity = 0.5;
   }
}

function darkMode() {
   document.querySelector('html').classList.toggle('dark-mode')
}