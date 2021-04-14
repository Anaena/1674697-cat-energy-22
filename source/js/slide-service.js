(function () {
  const root = document.querySelector(".slider");
  const slides = root.querySelectorAll(".slide");
  const dots = root.querySelectorAll(".dot");
  const prewBtn = root.querySelector(".btn-forward");
  const nextBtn = root.querySelector(".btn-back");

  // Ищу первый показываемый слайд
  let index = Array.from(slides).findIndex((elem) =>
    elem.classList.contains("slide--show")
  );

  function next(nextIndex) {
    slides.item(index).classList.remove("slide--show");
    slides.item(nextIndex).classList.add("slide--show");
    dots.item(index).classList.remove("dot--active");
    dots.item(nextIndex).classList.add("dot--active");
    index = nextIndex;
  }

  nextBtn.addEventListener("click", () => {
    let nextIndex = index + 1;

    if (nextIndex === slides.length) {
      nextIndex = 0;
    }

    next(nextIndex);
  });

  prewBtn.addEventListener("click", () => {
    let nextIndex = index - 1;

    if (nextIndex === -1) {
      nextIndex = slides.length - 1;
    }

    next(nextIndex);
  });
})();
