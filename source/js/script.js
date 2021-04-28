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
  const contactForm = document.querySelector('.form');
  const buttonForm = document.querySelector('.form__button');
  const fields = contactForm.querySelectorAll('input[required]');

  fields.forEach(field => {
    field.addEventListener('focus', () => {
      field.classList.remove('form__item--error');
    });
  });

  buttonForm.addEventListener('click', function (evt) {
    let isValid = true;

    fields.forEach(field => {
      if (!field.value) {
        isValid = false;
        field.classList.add('form__item--error');
      }
    });

    if (!isValid) {
      evt.preventDefault();
    }
  });
}());
