document.querySelector('.slider__range').classList.remove('slider__range--hide');
document.querySelector('.example__slider').classList.remove('slider--nojs');

const beforeButton = document.querySelector('.slider__button--before');
const afterButton = document.querySelector('.slider__button--after');
const beforeSlide = document.querySelector('.slider__item--before');
const afterSlide = document.querySelector('.slider__item--after');
const sliderRange = document.querySelector('.slider__range');
const sliderBar = document.querySelector('.slider__bar');
const sliderThumb = document.querySelector('.slider__thumb');

beforeButton.addEventListener('click', handleSlider);
afterButton.addEventListener('click', handleSlider);
sliderRange.addEventListener('pointerdown', handleSlider);

window.addEventListener('pointerup', function () {
  sliderRange.removeEventListener('pointermove', handleSlider);
});

window.addEventListener('resize', function () {
  if (window.innerWidth < 768) {
    beforeSlide.style.width = 'auto';
    afterSlide.style.width = 'auto';
  }
})

function checkCoords(coords) {
  let percents;
  let sliderBarStart = sliderBar.offsetLeft;
  let sliderBarWidth = sliderBar.offsetWidth;
  let sliderBarEnd = sliderBarWidth + sliderBarStart;
  if (coords >= sliderBarStart && coords <= sliderBarEnd) {
    percents = Math.round((coords - sliderBarStart) * 100 / sliderBarWidth);
    return percents;
  }
}

function handleSlider(evt) {
  if (evt.target == beforeButton) {
    moveThumb(0);
    changeSlide(0)
  } else if (evt.target == afterButton) {
    moveThumb(100);
    changeSlide(100)
  }
  else {
    sliderRange.addEventListener('pointermove', handleSlider);
    moveThumb(checkCoords(evt.pageX));
    changeSlide(checkCoords(evt.pageX));
  }
}

function moveThumb(point) {
  if (window.innerWidth < 768) {
    let margin;
    point < 50 ? margin = '0' : margin = 'auto';
    sliderThumb.style.marginLeft = margin;
  } else {
    sliderThumb.style.left = point + '%';
  }
}

function changeSlide(point) {
  if (window.innerWidth < 768) {
    if (point < 50) {
      afterSlide.classList.remove('slider__item--current');
      beforeSlide.classList.add('slider__item--current');
    } else {
      beforeSlide.classList.remove('slider__item--current');
      afterSlide.classList.add('slider__item--current');
    }
  } else {
    beforeSlide.style.width = 100 - point + "%"
    afterSlide.style.width = point + "%"
  }
}
