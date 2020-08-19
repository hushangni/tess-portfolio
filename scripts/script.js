$(() => {
  console.log("ready");

  // Mobile Icon
  $('.mobile-icon').on('click', (e) => {
    $('.overall-nav').toggleClass('active');
  })
});