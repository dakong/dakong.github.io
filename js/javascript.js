$(document).ready(function() {
  function smoothScroll(element){
    $(element).click(function(){
      $('html, body').animate({
          scrollTop: $( $(this).attr('href') ).offset().top
      }, 500);
      return false;
    });
  } 

  function btnScroll(){
    if($('body#body-blog').length > 0){
      $(document).scroll(function(){
        var scrollHeight = $(document).height() - $('#contact').height();
        var btnPos = $('#up-btn').offset().top;
        var scrollTop = $(window).scrollTop();
        var windowSize = $(window).height();
        var topSpace = btnPos - scrollTop;
        var bottomSpace = windowSize - topSpace;
        /*
        if(scrollTop < 75){
          $('#up-btn').css({
            display: 'none'
          });
        }
        else{
          $('#up-btn').fadIn(1000);
          $('#up-btn').css({
            display: 'block'
          });
        }*/
        if(btnPos + 28 > scrollHeight){
          $('#up-btn').css({
            position: 'relative',
            float: 'right',
            bottom: '28px'
          });
        }
        else if (bottomSpace < 76){
          $('#up-btn').css({
            position: 'fixed',
            float: 'none'
          });
        }
      });
    } 
  }
  /*PROJECT HOVERS*/
  /*$('.project-box').hover(function(e) {
    e.preventDefault();
    $(this).children('.project-box-content').stop().fadeIn("1000");
    $(this).css('background', 'hidden');

  }, function(e) {
    e.preventDefault();
    $(this).children('.project-box-content').stop().fadeOut("1000");
  });*/

  function navScroller(){
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
  }

  function landingScroller(){
    if($('body#home-page').length > 0){
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
    }
  }
  
  smoothScroll('a');
  landingScroller();
  navScroller();
  btnScroll();
  
});