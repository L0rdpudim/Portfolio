const menuBotao = document.querySelector('.menuBotao');
const menu = document.querySelector('.navbar ul');

menuBotao.addEventListener('click', function () {
    menu.classList.toggle('menuAberto');
});

const links = document.querySelectorAll('.navbar a');

links.forEach(function (link) {
    link.addEventListener('click', function () {
        menu.classList.remove('menuAberto');
    });
});