let burger = document.querySelector(".burger");
let navList = document.querySelector(".navigation__list");
let playBth = document.querySelector(".btn__play-pause");
let video = document.querySelector(".hero__video");
let navLinks = document.querySelectorAll(
  ".navigation__list  .navigation__link"
);

const navigation = document.querySelector(".navigation");

function init() {
  video.pause();
  burger.addEventListener("click", () => {
    burger.classList.toggle("active");
    navList.classList.toggle("toggle");
  });

  playBth.addEventListener("click", () => {
    video.currentTime = 0;
    // if (!video.paused) video.pause();
    // else
    video.play();
  });

  navLinks.forEach((el, index) => {
    el.addEventListener("click", (e) => {
      e.preventDefault();
      const attr = el.getAttribute("href").slice(1);
      const section = document.getElementById(`${attr}`);
      smoothScrool(section);
    });
  });

  // smooth scrolling
  function smoothScrool(client) {
    const clientCoordY = client.getBoundingClientRect().top;
    const relativeView = window.pageYOffset;
    const offSet = navigation.getBoundingClientRect().height;
    const coord = relativeView + clientCoordY - offSet;
    // // if (window.pageYOffset === clientCoordY.top) return;
    // // else if (window.pageYOffset > clientCoordY.top) {
    // //   coord = clientCoordY + window.pageYOffset;
    // // } else {
    // //   coord = clientCoordY + window.pageYOffset;
    // // }

    console.log("coord :", coord);

    // const clientCoordX = client.getBoundingClientRect().left;

    window.scrollTo({
      top: coord,
      left: 0,
      behavior: "smooth",
    });
  }

  const header = document.querySelector(".header");

  function scrollAppear(
    element,
    effect = { root: null, threshold: 0, rootMargin: "-50px" }
  ) {
    let observerFn = (entries) => {
      let [entry] = entries;

      if (!entry.isIntersecting) {
        navigation.classList.add("sticky");
      } else {
        navigation.classList.remove("sticky");
      }
    };

    let observer = new IntersectionObserver(observerFn, effect);
    observer.observe(element);
  }

  scrollAppear(header);
}

init();
