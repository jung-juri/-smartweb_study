//1번정답---------


$(function(){
  var headli = $('header nav li');
  var idx;

  headli.mouseenter(function(){
    $(this).children().addClass('hov')
  }).mouseleave(function(){
    $(this).children().removeClass()
  });

  headli.click(function(){
    idx = $(this).index();
    var spy = $('.content section').eq(idx).offset().top;
    $('body,html').stop().animate({
       scrollTop:spy
    },500)
  })



})
//1번정답---------

//2번정답---------
