$(document).ready(function() {
    console.log("Jquery ready!");
});

/*Function to show hidebar*/
$('#menu-toggle').click(function(e) {
    e.preventDefault();
    $('#wrapper').toggleClass('toggled');
    $('#menu-toggle').css('background-color', '#343434');
    $('.icon-bar-project').css('background-color', 'white');
});

/*Function to hide sidebar. It also allows user to click the 
rest of the page to close the side bar*/
$('.main-content, #menu-toggle').click(function(e) {
    if($('#sidebar-wrapper').css('visibility') === 'visible'){
        e.preventDefault();
        $('#wrapper').toggleClass('toggled');
        console.log("SIDEBAR IS VISIBLE");
        $('#menu-toggle').css('background-color', 'transparent');
        $('.icon-bar-project').css('background-color', '#343434');
   
    }
});


/*PROJECT HOVERS*/
$('.project-box').hover(function(e){
    e.preventDefault();
    $(this).children('.project-box-content').stop().fadeIn("1000");
    $(this).css('background','hidden');
    
},function(e){
    e.preventDefault();
    $(this).children('.project-box-content').stop().fadeOut("1000");
});

