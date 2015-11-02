$(document).ready(function() {

  $('a').click(function(){
    $('html, body').animate({
        scrollTop: $( $(this).attr('href') ).offset().top
    }, 500);
    return false;
});
});

$(document).scroll(function(){
  /*console.log($(document).height());
  console.log($('#contact').height());*/

  var scrollHeight = $(document).height() - $('#contact').height();
  var btnPos = $('#up-btn').offset().top;
  var scrollTop = $(window).scrollTop();
  var documentSize = $(document).height();
  var windowSize = $(window).height();
  var topSpace = btnPos - scrollTop;
  var bottomSpace = windowSize - topSpace;
  if(scrollTop < 75){
    $('#up-btn').css({
      display: 'none'
    });
  }
  else{
    $('#up-btn').css({
      display: 'block'
    });
  }
  /*console.log("bottomSpace: " + bottomSpace);
  console.log("topSpace: " + topSpace);
  console.log("scrollTop: " + scrollTop);
  console.log("button Position: " + btnPos);
  console.log("scrollHeight: " + scrollHeight);
  console.log("documentSize: " + documentSize);
  console.log("windowSize: " + windowSize);*/

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

/*$(document).scroll(function(){
  console.log($('#up-btn').offset());
  console.log($('#contact').offset());
  
  var scrollTop = $(this).scrollTop();
  var btnPos = $('#up-btn').offset().top;
  var contactPos = $('#contact').offset().top;
  var range = btnPos - contactPos;

  console.log("contactPos: " + contactPos);
  console.log("scrollTop: " + scrollTop);
  console.log("range: " + range);
  if(range > -25)
  {
    $('#up-btn').css({position: 'absolute'});
    console.log('POSITION REACHED');
  }
  else{
    $('#up-btn').css({position: 'fixed'});
  }
});*/


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
