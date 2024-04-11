// Importando as funções necessárias dos SDKs do Firebase
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.10.0/firebase-app.js";
import { getAuth, createUserWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/10.10.0/firebase-auth.js";

// Configuração do Firebase
const firebaseConfig = {
  apiKey: "AIzaSyB0SpAb1AlcUfK21EmyQkMPKRbZNsARK0Y",
  authDomain: "petbook-de89b.firebaseapp.com",
  projectId: "petbook-de89b",
  storageBucket: "petbook-de89b.appspot.com",
  messagingSenderId: "86363192720",
  appId: "1:86363192720:web:b3e726bb41de3ba9074715",
  measurementId: "G-7BF22VHZD5"
};

// Inicialização do Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

// Função para registrar um novo usuário
export function register(email, password) {
  createUserWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      // Usuário criado com sucesso
      console.log('Usuário cadastrado com sucesso:', userCredential.user);
      // Aqui você pode redirecionar para a página de login ou outra página
      window.location.href = '/index.html'; // Atualize para o caminho correto
    })
    .catch((error) => {
      console.error('Erro ao cadastrar usuário:', error.message);
      // Tratamento de erros, como mostrar uma mensagem para o usuário
    });
}

// Associando a função ao evento de submit do formulário de registro
document.addEventListener('DOMContentLoaded', () => {
  const registerForm = document.getElementById('registerForm');
  registerForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const email = document.getElementById('registerEmail').value;
    const password = document.getElementById('registerPassword').value;
    register(email, password);
  });
});
