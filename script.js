const menuBotao = document.querySelector('.menuBotao');
const menu = document.querySelector('.navbar ul');
const links = document.querySelectorAll('.navbar a');

menuBotao.addEventListener('click', function () {
    menu.classList.toggle('menuAberto');
});

links.forEach(function (link) {
    link.addEventListener('click', function () {
        menu.classList.remove('menuAberto');
    });
});