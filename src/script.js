const toggleMenu = (btn) => {
    const linkList = document.querySelectorAll('.link');
    btn.classList.toggle('active-btn');
    linkList.forEach((item) => {item.classList.toggle('active')});
    hideContent();
}

const hideContent = () =>{
    document.querySelector('.header__holder').classList.toggle('hidden');
    document.querySelector('.header__content').classList.toggle('hidden');
}

new Swiper('.reviews-container', {
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
    spaceBetween: 100,
    pagination: {
        el : ".swiper-pagination",
        type: 'bullets'
    },
    speed: 700
});