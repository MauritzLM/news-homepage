// click event on close button to remove focus
(function () {
    const closeMenuBtn = document.querySelector('.close-menu-btn');

    closeMenuBtn.addEventListener('click', () => {
        // remove focus from button
        closeMenuBtn.blur();
    });
})();

