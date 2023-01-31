window.onload = function () {
    document.body.classList.add('loaded_hiding');

    window.setTimeout(function () {
      document.body.classList.add('loaded');

      animated.onanimationend = () => {
        document.body.classList.remove('loaded_hiding');
      };

    }, 10);
}