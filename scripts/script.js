$(() => {
  console.log("ready");
  AOS.init();
  // Mobile Icon
  $('.mobile-icon').on('click', (e) => {
    $('.overall-nav').toggleClass('active');
  })
});