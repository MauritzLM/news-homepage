// select close button
// select menu
// onclick change menu styles

const closeMenuBtn = document.querySelector('.close-menu-btn');
const menu = document.querySelector('.main-navigation');
const header = document.querySelector('header');

closeMenuBtn.addEventListener('click', (e) => {
    closeMenuBtn.blur();
});
