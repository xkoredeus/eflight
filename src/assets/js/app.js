$(() => {
    $(window).on('load', function hidePreloader() {
        $('.preloader__wrp').fadeOut();
    });
});

$('.js-menu').on('click', function () {
    $(this).toggleClass('active');
    $('.header').toggleClass('header--active');
});

$('.js-favorites').on('click', function (e) {
    e.preventDefault();
    $(this).toggleClass('active');
});

$(document).on('click', function (e) {
    var container = $('.header');
    var container2 = $('.projects__grid');

    // if the target of the click isn't the container nor a descendant of the container
    if (!container.is(e.target) && container.has(e.target).length === 0)
    {
        container.removeClass('header--active');
        $('.burger').removeClass('active');
        $('.header__search').removeClass('header__search--show-input');

        if (!container2.is(e.target) && container2.has(e.target).length === 0) {
            $('.project__popup').removeClass('project__popup--visible');
        }
    }
});

$(() => {
    $('.js-scroll-top').on('click', function scrollTop() {
        gsap.to(window, {duration: 1.3, scrollTo:'.header'});
    });
    $('.js-banner-navigation').on('click', function scrollTop() {
        gsap.to(window, {duration: 1, scrollTo:'.production'});
    });
});
$(() => {
    const setMenuDecoration = () => {
        const headerWidth = $('.header__in').width();
        $('.menu__decoration').css('left', `${headerWidth}px`);
    };

    setMenuDecoration();

    $(window).on('resize', function () {
        setMenuDecoration();
    });
});

$(() => {
    $('.js-prevent-default').on('click', function (e) {
        e.preventDefault();
    });
});


var cardBottom = new Swiper(".js-card-bottom-slider", {
    freeMode: false,
    spaceBetween: 30,
    allowTouchMove: false,
    navigation: {
        nextEl: ".js-card-slider-next",
        prevEl: ".js-card-slider-prev",
    },
    thumbs: {
        swiper: cardTop,
    },
    breakpoints: {
        0: {
            slidesPerView: 2,
        },
        520: {
            slidesPerView: 3,
        },
    }
});
var cardTop = new Swiper(".js-card-top-slider", {
    slidesPerView: 1,
    navigation: {
        nextEl: ".js-card-slider-next",
        prevEl: ".js-card-slider-prev",
    },
    thumbs: {
        swiper: cardBottom,
    },
});

if ($(window).width() < 700) {
    $('.js-show-dropdown').on('click', function () {
        $('.menu__dropdown').slideToggle();
    });
    $('.js-show-search-input').on('click', function (e) {
        e.preventDefault();
        $('.header__search').toggleClass('header__search--show-input');
    });
}

$(() => {
    $('.tabs__content-item:not(:first-child)').hide();
    $('.tabs__list-item:first-child').addClass('active');
    $('.tabs__list > .tabs__list-item').click(function tabListLiClick() {
        if (!($(this).hasClass('active'))) {
            const thisLi = $(this);
            const numLi = thisLi.index();
            thisLi.addClass('active').siblings().removeClass('active');
            thisLi.parent().next().children('div').hide()
                .eq(numLi)
                .fadeIn('slow');
        }
    });
});
// $(() => {
//     $('.item').mouseenter(function () {
//         $('.item').removeClass('animate-out');
//         $(this).addClass('animate-in');
//
//     });
// });
// $(() => {
//     $('.item').mouseleave(function () {
//         $('.item').removeClass('animate-in');
//         $(this).addClass('animate-out');
//     });
// });


$(() => {
    $('.filter__title').on('click', function () {
        $(this).parent('.filter__item').toggleClass('filter__item--hidden').find('.filter__dropdown').slideToggle();
    });
});

$(() => {
    const newsSliderInitialSlide = $('.news-slider__wrapper .swiper-slide').length - "2";
    console.log(newsSliderInitialSlide)
    const newsSlider = new Swiper(".js-news-slider", {
        freeMode: false,
        centeredSlides: true,
        slideToClickedSlide: true,
        navigation: {
            nextEl: ".js-news-next",
            prevEl: ".js-news-prev",
        },
        initialSlide: newsSliderInitialSlide,
        breakpoints: {
            0: {
                slidesPerView: 3,
                spaceBetween: 10,
            },
            768: {
                slidesPerView: 6,
                spaceBetween: 15,
            },
            1200: {
                slidesPerView: 5,
                spaceBetween: 25,
            },
            1572: {
                slidesPerView: 7,
                spaceBetween: 30,
            },
        }
    });

    newsSlider.on('slideChange', function () {
        // filter news on this event
        console.log('filter news on slideChange event');
    });
});