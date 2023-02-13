const swiper = new Swiper('.swiper', {
    direction: 'horizontal',
    loop: true,

    autoplay: {
        delay: 3000,
    },

    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    }
});