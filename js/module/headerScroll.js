export default function headerScroll() {
  $(document).ready(function () {
    $(window).on("scroll", function () {
      if ($(window).scrollTop()) {
        $("#headerTMF").addClass("sticky");
      } else {
        $("#headerTMF").removeClass("sticky");
      }
    });
  });
}
