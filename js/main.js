// menu start
var menu = document.getElementById("menu");
var menuBtn = document.getElementById("menuBtn");
var body = document.body;
let header = document.getElementById("header");

menuBtn.onclick = function () {
  menu.classList.toggle("active");
  menuBtn.classList.toggle("active");
  body.classList.toggle("active");
  header.classList.toggle("active");
};
window.onclick = function (event) {
  if (event.target == menu) {
    menu.classList.remove("active");
    menuBtn.classList.remove("active");
    body.classList.toggle("active");
    header.classList.remove("active");
  }
};
// menu end

// scroll start
function scrollFunc() {
  if (window.scrollY >= 60) {
    header.classList.add("sticky");
  } else {
    header.classList.remove("sticky");
  }
}
const links = document.querySelectorAll(".links");
const sections = document.querySelectorAll(".anchor");
function changeLinkState() {
  let index = sections.length;
  while (--index && window.scrollY + 100 < sections[index].offsetTop) {}
  links.forEach((link) => link.classList.remove("active"));
  links[index]?.classList.add("active");
}
links.forEach((e) => {
  onLinkClick(e);
});
function onLinkClick(linkItem) {
  linkItem.addEventListener("click", function () {
    menu.classList.remove("active");
    menuBtn.classList.remove("active");
    body.classList.remove("active");
  });
}
window.onscroll = function () {
  changeLinkState();
  scrollFunc();
};
// scroll end
// sliders
$(function () {
  $(".intro__inner-slider").slick({
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: true,
    dots: false,
    speed: 1200,
    responsive: [
      {
        breakpoint: 651,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 541,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  });
});

$(function () {
  $(".reviews__inner-slider").slick({
    dots: false,
    infinite: true,
    arrows: false,
    autoplay: true,
    speed: 9000,
    autoplaySpeed: 0,
    pauseOnFocus: false,
    pauseOnHover: false,
    cssEase: "linear",
    variableWidth: true,
    centerMode: false,
  });
});
$(function () {
  $(".reviews__inner-swiper").slick({
    dots: false,
    infinite: true,
    centerMode: false,
    arrows: false,
    autoplay: true,
    speed: 9000,
    autoplaySpeed: 0,
    pauseOnFocus: false,
    pauseOnHover: false,
    cssEase: "linear",
    rtl: true,
    variableWidth: true,
  });
});

// video start
const playBtn = document.getElementById("play");
if (playBtn) {
  const banner = document.getElementById("banner");

  playBtn.addEventListener("click", function () {
    if (video.paused == true) {
      video.play();

      playBtn.classList.toggle("active");
      banner.classList.toggle("active");
    } else {
      video.pause();

      playBtn.classList.remove("active");
      banner.classList.remove("active");
    }
  });

  video.onclick = function () {
    if (video.paused == true) {
      video.play();

      playBtn.classList.toggle("active");
      banner.classList.toggle("active");
    } else {
      video.pause();

      playBtn.classList.remove("active");
      banner.classList.remove("active");
    }
  };
}
// video end
