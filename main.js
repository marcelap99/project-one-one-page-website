//this is nav stuff

$.stellar();
$('nav').onePageNav();

//When user clicks menu toggle the nav ul //
$('#menu').click(function(){
  $('nav ul').slideToggle();
});

const nav = $('nav ul');
$(window).resize(function(){
  const width = $(window).width();
  if(width > 768 && nav.is (':hidden')){
    nav.removeAttr('style');
  }
});

$('section').mouseenter(function(){
  $(this).find('.thumbnail').fadeIn();
})

$('section').mouseleave(function(){
  $(this).find('.thumbnail').fadeOut();
})
