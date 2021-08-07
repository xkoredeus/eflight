$(() => {
    $(window).on('load', function hidePreloader() {
        $('.preloader__wrp').fadeOut();
    });
});

$(() => {
    // banner
    const bannerAnimation = gsap.timeline({
      defaults: {
        ease: "power3.inOut"
      },
      scrollTrigger: {
        trigger: '.banner',
        start: "top center",
      }
    });

    bannerAnimation.fromTo('.banner .section__title', {
        autoAlpha: 0,
        yPercent: -10,
    }, {
        autoAlpha: 1,
        yPercent: 0,
        duration: 0.6,
    });
    bannerAnimation.fromTo('.banner .banner__text', {
        autoAlpha: 0,
        yPercent: -10,
    }, {
        autoAlpha: 1,
        yPercent: 0,
        duration: 0.6,
    });
    bannerAnimation.fromTo('.banner .banner__picture', {
        autoAlpha: 0,
        scale: 0.99,
    }, {
        autoAlpha: 1,
        scale: 1,
        duration: 1,
    }, "-=0.1");
    bannerAnimation.fromTo('.banner .banner__grid', {
        autoAlpha: 0,
    }, {
        autoAlpha: 1,
        duration: 0.6,
    }, "+=0.3");
    // end banner

    // production
    const productionAnimation = gsap.timeline({
        defaults: {
            ease: "power3.inOut"
        },
        scrollTrigger: {
            trigger: '.production',
            start: "top center",
        }
    });

    productionAnimation.fromTo('.production .section__title', {
        autoAlpha: 0,
        yPercent: -10,
    }, {
        autoAlpha: 1,
        yPercent: 0,
        duration: 0.6,
    });
    productionAnimation.fromTo('.production .production__description-in', {
        autoAlpha: 0,
        yPercent: -10,
    }, {
        autoAlpha: 1,
        yPercent: 0,
        duration: 0.6,
    });
    productionAnimation.fromTo('.production .production__row', {
        autoAlpha: 0,
    }, {
        autoAlpha: 1,
        duration: 0.6,
    }, "+=0.3");
    // end production

    // issues
    const issuesAnimation = gsap.timeline({
        defaults: {
            ease: "power3.inOut"
        },
        scrollTrigger: {
            trigger: '.issues',
            start: "top center",
        },
    });

    issuesAnimation.fromTo('.issues .section__title--h2', {
        autoAlpha: 0,
        yPercent: -10,
    }, {
        autoAlpha: 1,
        yPercent: 0,
        duration: 0.6,
    });


    issuesAnimation.fromTo('.issues .section__nav', {
        autoAlpha: 0,
    }, {
        autoAlpha: 1,
        duration: 1,
    });
    issuesAnimation.fromTo('.issues .issue', {
        autoAlpha: 0,
    }, {
        autoAlpha: 1,
        duration: 1,
    });
    // end issues

    // service
    const serviceAnimation = gsap.timeline({
        defaults: {
            ease: "power3.inOut"
        },
        scrollTrigger: {
            trigger: '.services',
            start: "top center",
        },
    });

    serviceAnimation.fromTo('.services .section__title--h2', {
        autoAlpha: 0,
        yPercent: -10,
    }, {
        autoAlpha: 1,
        yPercent: 0,
        duration: 0.6,
    });


    serviceAnimation.fromTo('.services .services__row', {
        autoAlpha: 0,
    }, {
        autoAlpha: 1,
        duration: 1,
    });
    // end service

    // tools
    const toolsAnimation = gsap.timeline({
        defaults: {
            ease: "power3.inOut"
        },
        scrollTrigger: {
            trigger: '.tools',
            start: "top center",
        }
    });

    toolsAnimation.fromTo('.tools .section__title', {
        autoAlpha: 0,
        yPercent: -10,
    }, {
        autoAlpha: 1,
        yPercent: 0,
        duration: 0.6,
    });

    toolsAnimation.fromTo('.tools .tools__intro', {
        autoAlpha: 0,
        yPercent: -10,
    }, {
        autoAlpha: 1,
        yPercent: 0,
        duration: 0.6,
    });
    toolsAnimation.fromTo('.tools .section__nav', {
        autoAlpha: 0,
    }, {
        autoAlpha: 1,
        duration: 0.6,
    });
    toolsAnimation.fromTo('.tools .tools__info', {
        autoAlpha: 0,
    }, {
        autoAlpha: 1,
        duration: 0.6,
    });
    // end tools

    // projects
    const projectsAnimation = gsap.timeline({
        defaults: {
            ease: "power3.inOut"
        },
        scrollTrigger: {
            trigger: '.projects',
            start: "top center",
        }
    });

    projectsAnimation.fromTo('.projects .section__title', {
        autoAlpha: 0,
        yPercent: -10,
    }, {
        autoAlpha: 1,
        yPercent: 0,
        duration: 0.6,
    });

    projectsAnimation.fromTo('.projects .section__nav', {
        autoAlpha: 0,
    }, {
        autoAlpha: 1,
        duration: 0.6,
    });
    projectsAnimation.fromTo('.projects .projects__grid', {
        autoAlpha: 0,
    }, {
        autoAlpha: 1,
        duration: 0.6,
    });
    // end projects

    ///
    gsap.fromTo(
        '.footer .container',
    {
        autoAlpha: 0,
        yPercent: -10,
    },
    {
        autoAlpha: 1,
        yPercent: 0,
        duration: 0.6,
        scrollTrigger: {
            trigger: '.footer',
            start: "top 80%",
            // markers: true,
        }
    });
    gsap.fromTo('.footer .container',
    {
        autoAlpha: 0,
        yPercent: -10,
    },
    {
        autoAlpha: 1,
        yPercent: 0,
        duration: 0.6,
        scrollTrigger: {
          trigger: '.footer',
          start: "top 80%",
          // markers: true,
        }
    });
});

$('.js-menu').on('click', function () {
    $(this).toggleClass('active');
    $('.header').toggleClass('header--active');
});

$('.js-favorites').on('click', function (e) {
    e.preventDefault();
    $(this).toggleClass('active');

    if ($(this).hasClass('active')) {
        $(this).find('.favorites__text').html('В избранном');
    } else {
        $(this).find('.favorites__text').html('В избранное');
    }
});


$('.js-toggle-compare-pop').on('click', function (e) {
    e.preventDefault();
    if ($(this).hasClass('active')) {
        $(this).removeClass('active');
        $(this).find('.js-compare-button-text').html('Сравнить');
        $(this).next('.card__compare-pop').removeClass('active');
    } else {
        $(this).addClass('active');
        $(this).find('.js-compare-button-text').html('Убрать из сравнения');
        setTimeout(() => {
            $(this).next('.card__compare-pop').addClass('active');
        }, 0);
    }
});
$('.js-close-compare-pop').on('click', function () {
    $('.card__compare-pop').removeClass('active');
});


$(document).on('click', function (e) {
    var container = $('.header');
    var container2 = $('.projects__grid');
    var container3 = $('.card__compare-pop.active');

    // if the target of the click isn't the container nor a descendant of the container
    if (!container.is(e.target) && container.has(e.target).length === 0)
    {
        container.removeClass('header--active');
        $('.burger').removeClass('active');
        $('.header__search').removeClass('header__search--show-input');
    }

    if (!container2.is(e.target) && container2.has(e.target).length === 0) {
        $('.project__popup').removeClass('project__popup--visible');
    }

    if (!container3.is(e.target) && container3.has(e.target).length === 0) {
        $('.card__compare-pop').removeClass('active');
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

$('.js-clear-compare').on('click', function () {
    $('.compare__body').children('.compare__column').remove();
});
$('.js-delete-compare').on('click', function () {
    $(this).parents('.compare__column').remove();
});


$('.js-toggle-catalog-popup').on('click', function () {
    console.log('click');
    $.fancybox.open({
        src  : '#catalogPop',
        autoCenter: false,
        beforeShow: function() {
            var position = this.element.position();
            $.fancybox._getPosition = function() {
                console.log(position);
                return position;
            }
        }
    });
});