let burger = document.querySelector(".burger");
let navLinks = document.querySelector(".navigation__list");
let playBth = document.querySelector(".btn__play-pause");
let video = document.querySelector(".hero__video");

video.pause();
burger.addEventListener("click", () => {
  burger.classList.toggle("active");
  navLinks.classList.toggle("toggle");
});

playBth.addEventListener("click", () => {
  if (!video.paused) video.pause();
  else video.play();
});
