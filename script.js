const carruselSlide = document.querySelector('.carrusel-slides');
const carruselImages = document.querySelectorAll('.carrusel-slide img');

const prevBtn = document.querySelector('.carrusel-btn-prev');
const nextBtn = document.querySelector('.carrusel-btn-next');

let counter = 0;
const size = carruselImages[0].clientWidth;

carruselSlide.style.transform = 'translateX(' + (-size * counter) + 'px)';

nextBtn.addEventListener('click', () => {
  if (counter >= carruselImages.length - 1) return;
  carruselSlide.style.transition = 'transform 0.4s ease-in-out';
  counter++;
  carruselSlide.style.transform = 'translateX(' + (-size * counter) + 'px)';
});

prevBtn.addEventListener('click', () => {
  if (counter <= 0) return;
  carruselSlide.style.transition = 'transform 0.4s ease-in-out';
  counter--;
  carruselSlide.style.transform = 'translateX(' + (-size * counter) + 'px)';
});

// Botón para reproducir música
const playMusicButton = document.getElementById('play-music');
const backgroundMusic = document.getElementById('background-music');

playMusicButton.addEventListener('click', () => {
  backgroundMusic.play();
});
