document.querySelector('#btn-mobile-menu').addEventListener('click', (element) => {
    const mobileMenu = document.querySelector('#mobile-menu');
    if(window.getComputedStyle(mobileMenu).getPropertyValue('display') === 'none') {
        mobileMenu.style.display = 'flex'
        element.target.setAttribute('src', 'images/icon-close.svg')
    }else{
        mobileMenu.style.display = 'none'
        element.target.setAttribute('src', 'images/icon-hamburger.svg')
    }
});