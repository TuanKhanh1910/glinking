export default function bannerSwiper() {
  const banner = document.querySelector(".banner");

  if (banner) {
    let swiper = new Swiper(banner.querySelector(".mySwiper"), {
      // loop: true,
      spaceBetween: 40,
      navigation: {
        nextEl: ".vismis-button-next",
        prevEl: ".vismis-button-prev",
      },
      //   freeMode: true,
      watchSlidesProgress: true,

      breakpoints: {
        0: {
          slidesPerView: 1,
        },

        1201: {
          slidesPerView: 4,
        },
      },
    });
    let swiper2 = new Swiper(banner.querySelector(".bannerSwiper"), {
      loop: true,
      slidesPerView: 1,
      thumbs: {
        swiper: swiper,
      },
    });
  }
}
