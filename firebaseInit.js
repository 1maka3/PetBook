// Inicialização do Firebase
if (!firebase.apps.length) {
    var firebaseConfig = {
      apiKey: "AIzaSyB0SpAb1AlcUfK21EmyQkMPKRbZNsARK0Y",
      authDomain: "petbook-de89b.firebaseapp.com",
      projectId: "petbook-de89b",
      storageBucket: "petbook-de89b.appspot.com",
      messagingSenderId: "86363192720",
      appId: "1:86363192720:web:b3e726bb41de3ba9074715",
      measurementId: "G-7BF22VHZD5"
    };
    firebase.initializeApp(firebaseConfig);
  }
  
firebase.analytics();

// Inicializa Firestore
var db = firebase.firestore();