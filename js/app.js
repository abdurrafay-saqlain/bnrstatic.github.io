// Initialize Wow
$( document ).ready(function() {
  new WOW().init()
});
//Read slider
$(document).ready(function(){

  $('.demo').slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay:true,
    autoplaySpeed: 2000,
});
  // $('.read__slider').slick(
  // //   {
  // //   infinite: true,
  // //   slidesToShow: 3,
  // //   slidesToScroll: 3,
  // // }
  // );
});



$(window).scroll(function() {
  var scrollTop = $(this).scrollTop();

  $('.get-started-btn').css({
    opacity: function() {
      var elementHeight = $(this).height();
      opacity = ((1 - (elementHeight - scrollTop) / elementHeight) * 1) ;
    return opacity;
    }
  });
});


// $(window).scroll(function(){
//   var st = $(window).scrolldown();
//   var range = 300 // finetune this to the desired effect
//   $('.get-started-btn').css("opacity", 1 - st / range); // animate your element
// });