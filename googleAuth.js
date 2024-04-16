import { getAuth, signInWithPopup, GoogleAuthProvider } from "https://www.gstatic.com/firebasejs/9.0.0/firebase-auth.js";

export const loginWithGoogle = () => {
    const provider = new GoogleAuthProvider();
    const auth = getAuth();
    
    signInWithPopup(auth, provider)
    .then((result) => {
        // Usuário está logado, você pode redirecionar para a página principal ou fazer algo com os dados do usuário
        // Por exemplo: window.location.href = '/home.html';
    })
    .catch((error) => {
        // Tratar os erros aqui
        console.error(error.message);
    });
};