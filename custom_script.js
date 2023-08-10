$(document).ready(function(){

    $('.slide-item').hover(
      function() {
        $('.slide-item').removeClass('active');
        $(this).addClass('active');
      }
    );

  });