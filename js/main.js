"use strict";
// Jquery
$(document).ready(function(){
  // nav#snb
  $(".snb__main > li").hover(function(){
    $(this).find(".snb__sub").stop().slideDown(300);
  },function(){
    $(this).find(".snb__sub").stop().slideUp(300);
  });

  // slide
    $(".slide__box > div").hide();
    $(".slide__box > div:first").show();
  function slidemove(){
    $(".slide__box > div:first").fadeOut().next().fadeIn().end().appendTo(".slide__box");
  }
  setInterval(slidemove, 3000);

  // tab
  $(".notgall__title a").click(function(){
    let num=$(this).index();
    console.log(num);
    $(".notgall__title a").removeClass('active');
    $(this).addClass('active');
    $(".notgall__contents > div").hide();
    $(".notgall__contents > div").eq(num).show();
  });

  // pop
  $("#pop").hide();
  $(".notice__box > ul > li:first").click(function(){
    $("#pop").show();
  });
  $("#pop #popclose").click(function(){
    $("#pop").hide();
  });


});