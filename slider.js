let track = document.querySelector(".slider__track");
let slides = document.querySelectorAll(".slide");
let dotsBox = document.querySelector(".slider__dots");
let current = 0;

track.prepend(slides[slides.length - 1].cloneNode(true));
track.append(slides[0].cloneNode(true));

track.style.transform = "translateX(-100%)";

for (let i = 0; i < slides.length; i++) {
  let dot = document.createElement("button");

  dot.className = "slider__dot";

  dot.onclick = function () {
    showSlide(i);
  };

  dotsBox.appendChild(dot);
}

function showSlide(number) {
  current = number;

  track.style.transform =
    "translateX(-" + (current + 1) * 100 + "%)";

  updateDots();
}

function updateDots() {
  let dots = document.querySelectorAll(".slider__dot");
  let active = current;

  if (current == slides.length) {
    active = 0;
  }

  if (current == -1) {
    active = slides.length - 1;
  }

  for (let i = 0; i < dots.length; i++) {
    dots[i].className = "slider__dot";
  }

  dots[active].className = "slider__dot active";
}

document.querySelector(".slider__control--next").onclick = function () {
  if (current == slides.length - 1) {
    showSlide(slides.length);
  } else {
    showSlide(current + 1);
  }
};

document.querySelector(".slider__control--previous").onclick = function () {
  if (current == 0) {
    showSlide(-1);
  } else {
    showSlide(current - 1);
  }
};

track.ontransitionend = function () {
  if (current == slides.length) {
    current = 0;
    track.style.transition = "none";
    track.style.transform = "translateX(-100%)";

    track.offsetHeight;
    track.style.transition = "transform 0.4s";
  }

  if (current == -1) {
    current = slides.length - 1;
    track.style.transition = "none";

    track.style.transform =
      "translateX(-" + slides.length * 100 + "%)";

    track.offsetHeight;
    track.style.transition = "transform 0.4s";
  }

  updateDots();
};

updateDots();
