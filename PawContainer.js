
document.addEventListener('DOMContentLoaded', function() {
  const pawContainer = document.getElementById('pawContainer');
  // Definindo um z-index baixo para as patas para que apareçam atrás dos outros elementos
  pawContainer.style.zIndex = "-1";
  
  const colors = ['black', 'gray', 'pink']; // Cores disponíveis
  const colorFiles = {
    'black': 'elementos/pata preta.png',
    'gray': 'elementos/pata cinza.png',
    'pink': 'elementos/pata rosa.png'
  };

  function createPaw(color) {
    const pawPrint = document.createElement('div');
    pawPrint.className = 'paw-print';
    pawPrint.style.position = 'absolute';
    pawPrint.style.backgroundImage = `url('${colorFiles[color]}')`;
    pawPrint.style.backgroundSize = 'contain';
    pawPrint.style.backgroundRepeat = 'no-repeat';
    pawPrint.style.width = '5vmax'; // Tamanho responsivo com base no tamanho da viewport
    pawPrint.style.height = '5vmax'; // Tamanho responsivo com base no tamanho da viewport
    pawPrint.style.zIndex = "-1"; // Assegura que a pata fique atrás da caixa de login

    // Posições aleatórias dentro de uma área segura da tela
    const safeTop = Math.random() * (90 - 10) + 10; // De 10vh a 90vh para 'top'
    const safeLeft = Math.random() * (90 - 10) + 10; // De 10vw a 90vw para 'left'
    pawPrint.style.top = `${safeTop}vh`;
    pawPrint.style.left = `${safeLeft}vw`;

    // Rotação aleatória
    const rotation = Math.random() * 360;
    pawPrint.style.transform = `rotate(${rotation}deg)`;

    pawContainer.appendChild(pawPrint);

    // Animação de fade in, movimento e fade out
    pawPrint.animate([
      { opacity: 0, transform: `translateY(0) rotate(${rotation}deg)` },
      { opacity: 1, transform: `translateY(-10px) rotate(${rotation}deg)` },
      { opacity: 0, transform: `translateY(0) rotate(${rotation}deg)` }
    ], {
      duration: 4000, // Duração da animação
      easing: 'ease-in-out',
      iterations: 1,
      fill: 'forwards' // Mantém o estado final após a animação
    });

    // Remove a pata após a animação
    setTimeout(() => { pawContainer.removeChild(pawPrint); }, 4000);
  }

  function randomColor() {
    return colors[Math.floor(Math.random() * colors.length)];
  }

  setInterval(() => {
    createPaw(randomColor());
  }, 1000); // Cria uma pata aleatória a cada segundo
});
