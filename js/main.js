function clock(){
    const hour = document.querySelector(".hour");
    const min = document.querySelector(".min");
    const sec = document.querySelector(".sec");

    const h = new Date().getHours();
    const m = new Date().getMinutes();
    const s = new Date().getSeconds();

    hour.innerHTML = h;
    min.innerHTML = m;
    sec.innerHTML = s;
}
var interval = setInterval(clock, 1000);
$(function(){
    // Hamburger toggle.
    $('.hamburger').click(function(){
        $(this).toggleClass('navactive');
        $('.navlinks').slideToggle();
    });
    // Back to top button.
    $('body').append('<a href="#home" class="top scroll"><i class="fas fa-chevron-up"></i></a>');
    $(window).scroll(function(){
        if($(window).scrollTop() > 100){
            $('.top').fadeIn('slow');
        }else{
             $('.top').fadeOut('slow');
        }
    });
    $('.top').click(function(e){
        e.preventDefault();
        $('html').animate({
            scrollTop: 0
        },500);
        return false;
    });
    $('.chess div').mouseover(function(){
        $(this).css('opacity',0);
    });
    $('.chess').mouseleave(function(){
        $('.chess div').css('opacity',1);
        $('.chess div').css('transition','all .3s ease-in-out');

    });
});