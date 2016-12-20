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
    },501)
  })

<<<<<<< HEAD


})
//1번정답---------

//2번정답---------
=======
//1번정답---------

//2번정답---------

})

var sec = $('.content > section');

console.log($('.content > section'))
>>>>>>> e15a705af06a711dbe98dbb4a6e01e282e37d339
