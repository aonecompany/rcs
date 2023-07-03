var swiper = new Swiper(".mySwiper", {
    slidesPerView: 1,
    spaceBetween: 16,
    loop: true,
    grabCursor: true,
    pagination: {
        el: '.swiper-pagination',
        dynamicBullets: true,
        clickable: false,
    },
    breakpoints: {
        769: {
            slidesPerView: 2,  //브라우저가 768보다 클 때
            spaceBetween: 20,
        },
    },
});

function goHome() {
    window.scrollTo(0, 0);
}