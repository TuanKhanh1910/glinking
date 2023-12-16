export default function channelSwiper() {
  const channel = document.querySelector(".channel");

  if (channel) {
    let swiper = new Swiper(channel.querySelector(".channelSwiper"), {
      // loop: true,
      spaceBetween: 70,
      slidesPerView: 6,
      //   freeMode: true,
      watchSlidesProgress: true,
      breakpoints: {
        0: {
          slidesPerView: 1,
        },

        1201: {
          slidesPerView: 6,
        },
      },
    });
  }
}
