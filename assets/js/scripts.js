$(document).ready(function(){
    $('.menu').on('click', function(){
        $('.side-nav').toggleClass('active');
        $('.faded-bg').toggleClass('active');
    });

    $('.close-btn').on('click', function(){
        $('.side-nav').toggleClass('active');
        $('.faded-bg').toggleClass('active');
    });

    $('.faded-bg').on('click', function(){
        $('.side-nav').toggleClass('active');
        $('.faded-bg').toggleClass('active');
    });
});



