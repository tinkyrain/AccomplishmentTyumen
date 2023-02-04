const swiper = new Swiper('.swiper', {
    direction: 'vertical',
    loop: true,

    autoplay: {
        delay: 10000,
    },

    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    }
});