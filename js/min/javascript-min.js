$(document).ready(function(){function o(o){$(o).click(function(){return $("html, body").animate({scrollTop:$($(this).attr("href")).offset().top},500),!1})}function t(){$("body#body-blog").length>0&&$(document).scroll(function(){var o=$(document).height()-$("#contact").height(),t=$("#up-btn").offset().top,n=$(window).scrollTop(),c=$(window).height(),i=t-n,e=c-i;t+28>o?$("#up-btn").css({position:"relative","float":"right",bottom:"28px"}):76>e&&$("#up-btn").css({position:"fixed","float":"none"})})}function n(){$(document).scroll(function(){var o=$(this).scrollTop();o>100?$("nav").css({background:"#2c3e50"}):$("nav").css({background:"transparent"})})}function c(){$("body#home-page").length>0&&$(document).scroll(function(o){var t=$("#landing"),n=$(".cloud"),c=$("#cloud-container"),i=t.outerHeight()-150,e=$(this).scrollTop()/t.innerHeight()*i;n.css("top",e)})}o("a"),c(),n(),t()});