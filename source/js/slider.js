const range = document.querySelector(".slider__input-range");
const before = document.querySelector(".slider__item--before");
const after = document.querySelector(".slider__item--after");

function setValue(value) {
  before.style.width = value + "%";
  after.style.width = 100 - value + "%";
}

range.addEventListener("input", (event) => {
  setValue(event.target.value);
});

setValue(range.value);
