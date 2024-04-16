const backgroundImages = [
  'LOGIN/FUNDO1.jpg',
  'LOGIN/FUNDO2.jpg',
  'LOGIN/FUNDO3.jpg',
  'LOGIN/FUNDO4.jpg',
  'LOGIN/Fundo5.jpg',
  'LOGIN/Fundo.jpg'
];

// Função para escolher uma imagem de fundo aleatoriamente
function chooseRandomBackground() {
const randomIndex = Math.floor(Math.random() * backgroundImages.length);
document.body.style.backgroundImage = `url("${backgroundImages[randomIndex]}")`;
document.body.style.backgroundSize = 'cover';
document.body.style.backgroundPosition = 'center center';
document.body.style.backgroundAttachment = 'fixed';
document.body.style.backgroundRepeat = 'no-repeat';
}

// Aplica a imagem de fundo aleatoriamente ao carregar a página
document.addEventListener('DOMContentLoaded', chooseRandomBackground);
