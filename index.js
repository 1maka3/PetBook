document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('loginForm').addEventListener('submit', function(event) {
      event.preventDefault();
      var email = document.getElementById('loginEmail').value;
      var password = document.getElementById('loginPassword').value;
  
      firebase.auth().signInWithEmailAndPassword(email, password)
        .then((userCredential) => {
          // Mostre a mensagem de sucesso aqui
          const loginSuccessDiv = document.getElementById('loginSuccess');
          loginSuccessDiv.style.display = 'block'; // ou loginSuccessDiv.style.opacity = '1';
          
          // Redirecione após um curto atraso para o usuário ver a mensagem
          setTimeout(() => {
            window.location.href = 'home.html';
          }, 2000); // ajuste o tempo conforme necessário
        })
        .catch((error) => {
          // Trate o erro aqui
          alert('Usuário ou senha inválidos.');
        });
    });
  });