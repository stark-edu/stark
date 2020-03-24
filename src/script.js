$(document).ready(function(){
    $(window).scroll(function(e){
        var windowScroll = document.body.scrollTop || document.documentElement.scrollTop;

        if($('body').width() > 520){
            if(windowScroll != 0){
                $('.nav').css({
                    height: '70px',
                    background: '#323232'
                });
                $('.nav__logo-img').css({
                    width: '160px'
                });
                $('.nav__navbar-items a').css({
                    'font-size': '15px', 
                });
            }else{
                $('.nav').css({
                    height: '',
                    background: ''
                });
                $('.nav__logo-img').css({
                    width: ''
                });
                $('.nav__navbar-items a').css({
                    'font-size': '', 
                });
            }
        }else{
            if(windowScroll != 0){
                $('.nav').css({
                    background: '#323232'
                });
            }else{
                $('.nav').css({
                    background: '',
                });
            }
        }
    });

    $('.nav__menubtn').click(function(){
        $('.nav__menubtn').toggleClass('nav__menubtn-active');
        $('.aside-navbar').toggleClass('navbar-active');
        $('.nav').toggleClass('dark-bg');
    });

    $('a[data-target^="anchor"]').bind('click.smoothscroll', function(){
        let target = $(this).attr('href'),
            bl_top = $(target).offset().top - 0;

        $('body, html').animate({scrollTop: bl_top}, 1500);
        $('.nav__menubtn').toggleClass('nav__menubtn-active');
        $('.aside-navbar').toggleClass('navbar-active');
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