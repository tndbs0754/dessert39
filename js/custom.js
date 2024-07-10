$(function () {

    $('.main_slide').slick({
        //arrows: false,
        autoplay: true,
        autoplaySpeed: 4000,
        speed: 600,
        dots: true,
        pauseOnHover: false,
    })

    $('.main_product_slide').slick({
        slidesToShow: 4,
        arrows: false,

    });

    $('.main_product .arrows .prev').on('click', function () {
        $('.main_product_slide').slick('slickPrev')
    });
    $('.main_product .arrows .next').on('click', function () {
        $('.main_product_slide').slick('slickNext')
    });

    $('.product_slide02').slick({
        slidesToShow: 4,
        arrows: false,

    });

    $('.main_product02 .arrows .prev').on('click', function () {
        $('.product_slide02').slick('slickPrev')
    });
    $('.main_product02 .arrows .next').on('click', function () {
        $('.product_slide02').slick('slickNext')
    });

    $('.main_event_slide').slick({
        slidesToShow: 5,
        centerMode: true,
        centerPadding: 0,
        arrows: false,
    });

    $('.main_event .arrows .prev').on('click', function () {
        $('.main_event_slide').slick('slickPrev')
    });

    $('.main_event .arrows .next').on('click', function () {
        $('.main_event_slide').slick('slickNext')
    });

    /*$('#bgndVideo').YTPlayer({
        videoURL: 'https://youtu.be/eih0jhhKeTE',
        containment: '.main_movie',
        showControls: false,
        playOnlyIfVisible: true,
    });

    let sw = true;

    $('.main_movie .switch').on('clock', function () {
        $(this).toggleClass('on');
        if (sw) {
            $('#bgndVideo').YTPPause();
        } else {
            $('#bgndVideo').YTPPlay();
        }
        sw = !sw;

    })*/

    $('.main_customer .new .news_menu button').on('click', function () {
        let idx = $(this).parent().index();//0,1
        $('.main_customer .new_content>ul')
            .eq(idx)
            .addClass('on')
            .siblings()
        removeClass('on');

        $(this).parent().addClass('on').siblings().removeClass('on')

    });

})