$(document).ready(function(){
    $(window).scroll(function(e){
        var windowScroll = document.body.scrollTop || document.documentElement.scrollTop;

        if(windowScroll != 0){
            $('.header-nav').css({
                height: '70px',
                background: '#323232'
            });
            $('.header-nav__logo').css({
                transform: 'scale(0.7)',
            });
            $('.header-nav__navbar-items a').css({
                'font-size': '15px', 
            });
        }else{
            $('.header-nav').css({
                height: '',
                background: ''
            });
            $('.header-nav__logo').css({
                transform: 'scale(1)',
            });
            $('.header-nav__navbar-items a').css({
                'font-size': '', 
            });
        }
    });

    $('a[data-target^="anchor"]').bind('click.smoothscroll', function(){
        let target = $(this).attr('href'),
            bl_top = $(target).offset().top - 0;

        $('body, html').animate({scrollTop: bl_top}, 1500);
    });

    $('.banner-hero__playbtn').click(function(){
        $('.modal').addClass('modal-active');
        $('.modal').fadeIn();
        $('#wrapper').css({
            'filter': 'blur(5px)'});
        $('body').css({
            'overflow': 'hidden'});
        $('.modal-video').addClass('modal-active');
        
        let video = document.querySelector('.video');
        video.play();
        
        $('.modal-video-close').click(function(){
            $('.modal').removeClass('modal-active');
            $('.modal').fadeOut();
            $('#wrapper').css({
                'filter': ''});
            $('body').css({
                'overflow': ''});
            $('.modal-video').removeClass('modal-active');
            video.pause();
        });
    });
});