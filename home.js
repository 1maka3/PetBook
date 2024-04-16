document.getElementById('post-form').addEventListener('submit', function(event) {
  event.preventDefault();

  const postContent = document.getElementById('post-content').value;
  const postImageFile = document.getElementById('post-image').files[0];

  // Verifica se um arquivo foi selecionado
  if (postImageFile) {
    // Cria uma referência para o arquivo no Firebase Storage
    var storageRef = firebase.storage().ref('posts/' + postImageFile.name);
    // Faz o upload do arquivo
    storageRef.put(postImageFile).then(function(snapshot) {
      console.log('Imagem enviada com sucesso!');
      
      // Após o upload, você pode querer salvar a URL do arquivo no Firestore junto com a postagem
      snapshot.ref.getDownloadURL().then(function(downloadURL) {
        console.log("File available at", downloadURL);
        
        // Salva a nova postagem no Firestore
        db.collection("posts").add({
          content: postContent,
          imageUrl: downloadURL,
          createdAt: firebase.firestore.FieldValue.serverTimestamp()
        })
        .then(function(docRef) {
          console.log("Documento escrito com ID: ", docRef.id);
          document.getElementById('post-form').reset();
        })
        .catch(function(error) {
          console.error("Erro ao adicionar documento: ", error);
        });
      });
    });
  } else {
    // Se nenhum arquivo foi selecionado, apenas salva o texto da postagem
    db.collection("posts").add({
      content: postContent,
      createdAt: firebase.firestore.FieldValue.serverTimestamp()
    })
    .then(function(docRef) {
      console.log("Documento escrito com ID: ", docRef.id);
      document.getElementById('post-form').reset();
    })
    .catch(function(error) {
      console.error("Erro ao adicionar documento: ", error);
    });
  }
});
