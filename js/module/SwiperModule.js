export default function SwiperModule() {
  function functionSlider(
    element,
    isLoop,
    isCenter,
    betWeenInit,
    autoplay,
    effects,
    breakpoint
  ) {
    const swiperSlider = document.querySelectorAll(element);
    if (swiperSlider) {
      swiperSlider.forEach((item) => {
        const swiper = item.querySelector(".swiper");
        const pagi = item.querySelector(".swiper-pagination");
        const next = item.querySelector(".swiper-next");
        const prev = item.querySelector(".swiper-prev");
        var slide = new Swiper(swiper, {
          watchSlidesProgress: true,
          speed: 1200,
          autoplay: autoplay,
          pagination: {
            el: pagi,
            type: "bullets",
            clickable: true,
          },
          grabCursor: true,
          navigation: {
            nextEl: next,
            prevEl: prev,
          },
          // slidesPerGroup: 2,
          centeredSlides: isCenter,
          loop: isLoop,
          spaceBetween: betWeenInit,
          effect: effects,
          fadeEffect: {
            crossFade: true,
          },
          breakpoints: breakpoint,
        });
      });
    }
  }
  functionSlider(".header-slider", false, false, 0, false, "cards");

  functionSlider(
    ".channel-slider",
    false,
    false,
    70,
    { delay: 3000 },
    "slide",
    {
      0: {
        slidesPerView: 2,
        spaceBetween: 10,
        freeMode: true,
      },
      700: {
        slidesPerView: 3,
        spaceBetween: 20,
      },
      1200: {
        slidesPerView: 4,
        spaceBetween: 40,
      },
      1501: {
        slidesPerView: 6,
      },
    }
  );
}
