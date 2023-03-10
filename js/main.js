window.onload = function () {
    document.body.classList.add('loaded_hiding');

    window.setTimeout(function () {
      document.body.classList.add('loaded');
      document.body.classList.remove('loaded_hiding');
    }, 500);
}

//Animation by using ScrollReveal
ScrollReveal().reveal('.AboutUs__block', { delay: 400 });
ScrollReveal().reveal('.services__block', { delay: 400 });
ScrollReveal().reveal('.Product__block', { delay: 400 });
ScrollReveal().reveal('.swiper', { delay: 400 });
ScrollReveal().reveal('.order-form', { delay: 400 });
ScrollReveal().reveal('.order-text', { delay: 400 });
