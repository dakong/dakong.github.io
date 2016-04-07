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

  function navScroller(){
    $(document).scroll(function() {
      var scrollTop = $(this).scrollTop();
      if (scrollTop > 100) {
        //$('nav').css({display: 'none'});
      $('nav').css({"background":"#2c3e50"});
        //$('nav').css({"box-shadow": "4px 4px 4px rgba(120, 120, 120, 0.3)"});
      } else {
        $('nav').css({
          "background": "transparent"
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

        var distance = landing.outerHeight() - 150;
        var position = $(this).scrollTop() / landing.innerHeight() * distance;

        cloud.css('top', position);
      });
    }
  }

  var formInputs = $('.form-input');
  //too add an event listener to the array, you must loop through it
  for(var i = 0, len = formInputs.length; i < len; i++){
    formInputs[i].addEventListener("keyup", function(){
      if(this.value != ""){
        $(this).prev().addClass('text-received');
        //$(this).prev().removeClass('default-label');
      }
      else{
        $(this).prev().removeClass('text-received');
      }
    });
  }

$('.project-image').hover(function(){
  $(this).find('.image-overlay').stop().slideDown("fast",function(){
  });
},function(){
  $(this).find('.image-overlay').stop().slideUp("fast",function(){
  });
});


  smoothScroll('a');
  landingScroller();
  navScroller();
  btnScroll();

});
