window.onload = function () {
    document.body.classList.add('loaded_hiding');

    window.setTimeout(function () {
      document.body.classList.add('loaded');
      document.body.classList.remove('loaded_hiding');
    }, 500);
}

ScrollReveal().reveal('.AboutUs__block', { delay: 400 });
ScrollReveal().reveal('.services__block', { delay: 400 });
ScrollReveal().reveal('.Product__block', { delay: 400 });