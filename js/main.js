import AosModule from "./module/AosModule.js";
import SwiperModule from "./module/SwiperModule.js";
import Select2Module from "./module/Select2Module.js";
import GalleryModule from "./module/GalleryModule.js";
import TabModule from "./module/TabModule.js";
import headerMobile from "./module/headerMobile.js";
import headerScroll from "./module/headerScroll.js";
import bannerSwiper from "./module/bannerSwiper.js";
import channelSwiper from "./module/channelSwiper.js";
window.addEventListener("DOMContentLoaded", () => {
  // Animation
  AosModule();
  // Tab
  TabModule();
  // Select
  Select2Module();
  // Component
  SwiperModule();
  GalleryModule();
  // headerMobile();
  headerScroll();
  bannerSwiper();
  // channelSwiper();
});
