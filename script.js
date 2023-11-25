$(document).ready(function () {
    $('.card').on('mouseenter', function () {
       $(this).find('.front, .back').addClass('rotate');
    }).on('mouseleave', function () {
       $(this).find('.front, .back').removeClass('rotate');
    });
   });