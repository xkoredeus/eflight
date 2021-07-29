$(() => {
    $(window).on('load', function hidePreloader() {
        $('.preloader__wrp').fadeOut();
    });
});

$('.js-menu').on('click', function () {
    $(this).toggleClass('active');
    $('.header').toggleClass('header--active');
});

$(document).on('click', function (e) {
    var container = $('.header');

    // if the target of the click isn't the container nor a descendant of the container
    if (!container.is(e.target) && container.has(e.target).length === 0)
    {
        container.removeClass('header--active');
        $('.burger').removeClass('active');
        $('.header__search').removeClass('header__search--show-input');
    }
});

$(() => {
    const sliderOptions = {
        speed: 800,
        direction: "vertical",
        spaceBetween: 10,
        height: 250,
        sliderPerView: 3,
        navigation: {
            nextEl: '.production .swiper-button-next',
            prevEl: '.production .swiper-button-prev',
        },
    };
    const productionSlider = new Swiper('.js-production-slider', sliderOptions);

    const firstAttr = $('.js-product:first-child').attr('data-product');

    $('.production .swiper-slide').css('display', 'none').removeClass('product--active');
    $('.production .swiper-slide' + firstAttr).css('display', '').addClass('product--active');


    const updateSlider = () => {
        productionSlider.updateSize();
        productionSlider.updateSlides();
        productionSlider.updateProgress();
        productionSlider.updateSlidesClasses();
        productionSlider.slideTo(0);
        productionSlider.scrollbar.updateSize();
    };

    updateSlider();

    $('.js-product').hover(function() {
        const filter = $(this).attr('data-product');

        $('.production .swiper-slide').css('display', 'none').removeClass('product--active');
        $('.production .swiper-slide' + filter).css('display', '').addClass('product--active');
        updateSlider();
        return false;
    });

    // $('.js-product').hover(function () {
    //     $('.production').find('.swiper-slide').removeClass('product--active');
    //     productionSlider.destroy();
    //     productionSlider.init();
    //     $('.production')
    //         .find('.swiper-slide[data-product="'+$(this).attr('data-product')+'"]').each(function () {
    //         $(this).addClass('project--active');
    //     });
    // })


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
    $('.banner__link:last-child').addClass('banner__link--hovered');
    $('.banner__link').hover(function () {
        $(this).parent().find('.banner__link').removeClass('banner__link--hovered');
        $(this).addClass('banner__link--hovered');
    });
});
$(() => {
    $('.section__nav-link:first-child').addClass('section__nav-link--hovered');
    $('.section__item:first-child').addClass('section__item--hovered');
    $('.section__nav-link').hover(function () {
        const index = $(this).index();
        const parent = $(this).parent();
        parent.find('.section__nav-link').removeClass('section__nav-link--hovered');
        parent.parents('section').find('.section__item-list').each(function () {
            $(this).find('.section__item')
                .removeClass('section__item--hovered')
                .eq(index).addClass('section__item--hovered');
        });
        $(this).addClass('section__nav-link--hovered');

    });
});

$(() => {
    const firstAttr = $('.js-project:first-child').attr('data-project');
    $('.projects')
        .find('.project[data-project="'+firstAttr+'"]').each(function () {
        $(this).addClass('project--active');
    });

    $('.js-project').hover(function () {
        $(this).parents('.projects').find('.project').removeClass('project--active');
        $(this).parents('.projects')
            .find('.project[data-project="'+$(this).attr('data-project')+'"]').each(function () {
            $(this).addClass('project--active');
        });
    })
})

$(() => {
    $('.js-prevent-default').on('click', function (e) {
        e.preventDefault();
    });
});
$(() => {
    if ($(window).width() > 768) {
        $('.project').on('click', function () {

            $('.project__popup').removeClass('project__popup--visible');
            const projectLogoUrl = $(this).find('.project__logo').attr('src');
            const projectTitle = $(this).find('.project__title').html();
            const projectText = $(this).find('.project__description').html();
            const positionTop = $(this).position().top;

            setTimeout(() => {
                $('.project__popup').addClass('project__popup--visible').css('top', positionTop);
                $('.project__popup-logo').attr('src', projectLogoUrl);
                $('.project__popup-title').html(projectTitle);
                $('.project__popup-text').html(projectText);
            }, 200);
        });

        $('.js-close-project-popup').on('click', function () {
            $('.project__popup').removeClass('project__popup--visible');
        });
    }
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
if ($(window).width() < 768) {
    // tools
    $('.tools .section__item').hide();
    $('.tools .section__nav-link:first-child').addClass('section__nav-link--hovered');
    $('.tools .section__item:first-child').fadeIn();
    $('.js-tools-link').on('click', function () {
        const index = $(this).index();
        const parent = $(this).parent();
        parent.find('.section__nav-link').removeClass('section__nav-link--hovered');
        parent.parents('section').find('.section__item-list').each(function () {
            $(this).find('.section__item')
                .hide()
                .eq(index).fadeIn();
        });
        $(this).addClass('section__nav-link--hovered');
    });

    // issues
    $('.issue__picture-wrapper .section__item-list').addClass('swiper-wrapper').wrap('<div class="swiper-container js-issues-top-slider"></div>').find('.issue__picture').addClass('swiper-slide');
    $('.issue__info-wrapper').removeClass('section__item-list issue__info-wrapper').wrap('<div></div>').addClass('swiper-container js-issues-bottom-slider').wrapInner('<div class="section__item-list swiper-wrapper"></div>').find('.issue__info').addClass('swiper-slide');

    var swiperBottom = new Swiper(".js-issues-bottom-slider", {
        slidesPerView: 1,
        freeMode: false,
        allowTouchMove: false,
        navigation: {
            nextEl: ".js-issue-slider-next",
            prevEl: ".js-issue-slider-prev",
        },
        thumbs: {
            swiper: swiperTop,
        },
    });
    var swiperTop = new Swiper(".js-issues-top-slider", {
        slidesPerView: 1,
        navigation: {
            nextEl: ".js-issue-slider-next",
            prevEl: ".js-issue-slider-prev",
        },
        thumbs: {
            swiper: swiperBottom,
        },
    });

    //projects
    $('.projects__grid').addClass('swiper-wrapper').wrap('<div class="swiper-container js-projects-slider"></div>').find('.project').wrap('<div class="swiper-slide"></div>');

    var swiperProjects = new Swiper(".js-projects-slider", {
        slidesPerView: 2,
        spaceBetween: 20,
        centeredSlides: true,
    });

    $('.project').addClass('open-project-popup');
    $('.project__popup').wrap('<div id="projectsPopup" style="display: none"></div>');

    $('.open-project-popup').on('click', function () {
        const projectLogoUrl = $(this).find('.project__logo').attr('src');
        const projectTitle = $(this).find('.project__title').html();
        const projectText = $(this).find('.project__description').html();
        const positionTop = $(this).position().top;

        $('.project__popup').addClass('project__popup--visible').css('top', positionTop);
        $('.project__popup-logo').attr('src', projectLogoUrl);
        $('.project__popup-title').html(projectTitle);
        $('.project__popup-text').html(projectText);

        setTimeout(() => {
            $.fancybox.open({
                src  : '#projectsPopup',
            });
        }, 200);
    });

}
//
// $(() => {
//     gsap.config({nullTargetWarn:false});
//
// });