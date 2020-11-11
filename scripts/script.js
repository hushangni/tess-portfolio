$(() => {
  console.log("ready");
  AOS.init();
  // Mobile Icon
  $('.mobile-icon').on('click', (e) => {
    $('.overall-nav').toggleClass('active');
  });

  $('.overall-nav a').on('click', function(e){
    $('.overall-nav').toggleClass('active');
})
});