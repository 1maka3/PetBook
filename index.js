// Sidebar
const menuItems = document.querySelectorAll('.menu-item');

// Messages
const messageNotification = document.querySelector('#messages-notifications');
const messages = document.querySelector('.messages');
const message = messages.querySelectorAll('.message');
const messageSearch = document.querySelector('#message-search');

const changeActiveItem = () => {
    menuItems.forEach(item => {
        item.classList.remove('active');
    });
};

menuItems.forEach(item => {
    item.addEventListener('click', () => {
        changeActiveItem();
        item.classList.add('active');
        if(item.id != 'notifications') {
            document.querySelector('.notifications-popup').style.display = 'none';
        } else {
            document.querySelector('.notifications-popup').style.display = 'block';
            document.querySelector('#notifications .notification-count').style.display = 'none';
        }
    });
});

const searchMessage = () => {
    const val = messageSearch.value.toLowerCase();
    message.forEach(user => {
        let name = user.querySelector('h5').textContent.toLowerCase();
        if(name.indexOf(val) != -1) {
            user.style.display = 'flex'; 
        } else {
            user.style.display = 'none';
        }
    });
};

messageSearch.addEventListener('keyup', searchMessage);

messageNotification.addEventListener('click', () => {
    messages.style.boxShadow = '0 0 1rem var(--color-primary)';
    messageNotification.querySelector('.notification-count').style.display = 'none';
    setTimeout(() => {
        messages.style.boxShadow = 'none';
    }, 2000);
});

// Adicionando um ouvinte de eventos para o botão de alternância de tema

document.addEventListener('DOMContentLoaded', function() {
    const themeToggle = document.getElementById('theme-toggle');
    let currentTheme = localStorage.getItem('theme') || 'light-theme';

    document.body.classList.add(currentTheme);

    themeToggle.addEventListener('click', () => {
        if (document.body.classList.contains('light-theme')) {
            document.body.classList.replace('light-theme', 'dark-theme');
            localStorage.setItem('theme', 'dark-theme');
        } else {
            document.body.classList.replace('dark-theme', 'light-theme');
            localStorage.setItem('theme', 'light-theme');
        }
    });
});

// Função para abrir o story //


function openStory(storyElement) {
    // Aqui você pode abrir um modal ou um novo elemento que mostrará o story
    // Exemplo:
    const storyModal = document.createElement('div');
    storyModal.classList.add('story-modal');
    // Adicionar conteúdo ao modal, como a imagem do story, texto, etc.
    storyModal.innerHTML = `<div class="story-content"><img src="${storyElement.querySelector('img').src}" alt="Story image"><p>Some story content...</p></div>`;
    
    // Função para fechar o story
    storyModal.addEventListener('click', () => {
        document.body.removeChild(storyModal);
    });

    // Adicionando o modal ao body
    document.body.appendChild(storyModal);
}

// Adicionando o ouvinte de eventos para os elementos de story
document.querySelectorAll('.story').forEach(story => {
    story.addEventListener('click', () => openStory(story));
});