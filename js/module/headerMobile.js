export default function headerMobile() {
  let icon__bar = document.getElementById("icon__bar");
  console.log("icon__bar: ", icon__bar);
  let header__overlay = document.querySelector(".mobile-overlay");
  let header__mobile = document.querySelector(".mobile");

  icon__bar.onclick = function () {
    document.body.classList.toggle("no-scroll");
    icon__bar.classList.toggle("active");
    header__overlay.classList.toggle("open");
    header__mobile.classList.toggle("open");
  };
  header__overlay.onclick = function () {
    document.body.classList.remove("no-scroll");
    header__overlay.classList.remove("open");
    header__mobile.classList.remove("open");
    icon__bar.classList.remove("active");
  };
  // $(document).ready(function () {
  //   $(".menu-link").click(function () {
  //     event.preventDefault();
  //     $(this).parent().toggleClass("change");
  //     $(this).parent().children("#mobile__drop-menu").slideToggle();
  //   });
  // });
}
