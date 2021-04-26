// Navigation

(function () {
  var navMain = document.querySelector('.main-nav');
  var navToggle = document.querySelector('.main-nav__toggle');

  navMain.classList.remove('main-nav--nojs');

  navToggle.addEventListener('click', function () {
    if (navMain.classList.contains('main-nav--closed')) {
      navMain.classList.remove('main-nav--closed');
      navMain.classList.add('main-nav--opened');
    } else {
      navMain.classList.add('main-nav--closed');
      navMain.classList.remove('main-nav--opened');
    }
  });
}());

// Form

(function () {
  const programForm = document.querySelector('.program-form');
  const contactForm = programForm.querySelector('.form');
  const petName = programForm.querySelector('.form__item--name');
  const petWeight = programForm.querySelector('.form__item--weight');
  const userEmail = programForm.querySelector('.form__item--email');
  const userPhone = programForm.querySelector('.form__item--phone');

  const inputForm = [petName, petWeight, userEmail, userPhone];

  contactForm.addEventListener('submit', function (evt) {
    if (!inputForm.value) {
      evt.preventDefault();
      inputForm.classList.add('form__item--error');
      console.log('ошибка');
      // inputForm.offsetWidth = inputForm.offsetWidth;
      // inputForm.classList.add('form__item--error');
    }
  });
}());
