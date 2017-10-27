/*
Ayako Shiraishi
*/
(function($) {
    $(function () {
        $('.sub-menu').on({
            'mouseenter': function () {
                $(this).addClass('is-active');
            },
            'mouseleave': function () {
                $(this).removeClass('is-active');
            }
        });
        $('#nav-toggle,#overlay').on('click', function() {
            $('body').toggleClass('open');
        });

        $('a[href^="#"]').click(function() {
      // scroll speed
      var speed = 400; 
　　　
      var href= $(this).attr("href");
      var target = $(href == "#" || href == "" ? 'html' : href);
     
      var position = target.offset().top;
      // smooth scroll
      $('body,html').animate({scrollTop:position}, speed, 'swing');
      return false;
   });
    });  
})(jQuery);

$(document).ready(function() {
  var pagetop = $('.pagetop');
    $(window).scroll(function () {
       if ($(this).scrollTop() > 100) {
            pagetop.fadeIn();
       } else {
            pagetop.fadeOut();
            }
       });
       pagetop.click(function () {
           $('body, html').animate({ scrollTop: 0 }, 500);
              return false;
   });
});

$('.skill1').rateCircle();
$('.skill1').rateCircle({
  size: 150,
  lineWidth: 10,
  fontSize: 30,
  referenceValue: 100
});

$('.skill2').rateCircle();
$('.skill2').rateCircle({
  size: 140,
  lineWidth: 10,
  fontSize: 30,
  referenceValue: 100
});

$('.skill3').rateCircle();
