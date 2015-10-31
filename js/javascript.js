$(document).ready(function() {

  $('a').click(function(){
    $('html, body').animate({
        scrollTop: $( $(this).attr('href') ).offset().top
    }, 500);
    return false;
});
});


/*PROJECT HOVERS*/
$('.project-box').hover(function(e) {
  e.preventDefault();
  $(this).children('.project-box-content').stop().fadeIn("1000");
  $(this).css('background', 'hidden');

}, function(e) {
  e.preventDefault();
  $(this).children('.project-box-content').stop().fadeOut("1000");
});


$(document).scroll(function() {

  var scrollTop = $(this).scrollTop();

  if (scrollTop > 100) {

    //$('nav').css({"background":"#19ACD1"});
    $('nav').css({
      "background": "#00bcd4"
    });
    $('nav').css({
      "box-shadow": "4px 4px 4px rgba(120, 120, 120, 0.3)"
    });


  } else {
    $('nav').css({
      "background": "transparent"
    });
    $('nav').css({
      "box-shadow": "none"
    });
  }

});


$(document).scroll(function(e) {
  var landing = $('#landing');
  var cloud = $('.cloud');
  var cloudContainer = $('#cloud-container');
  /*
  var landing = document.getElementById("landing");
  var cloud = document.getElementsByClassName("cloud");
  var cloudContainer = document.getElementById("cloud-container");
  */
  var distance = landing.outerHeight() - 150;
  var position = $(this).scrollTop() / landing.innerHeight() * distance;

  console.log(landing.outerHeight());

  cloud.css('top', position);




});
