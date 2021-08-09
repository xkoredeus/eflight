$(() => {
    $('.banner__link:last-child').addClass('banner__link--hovered');
    $('.banner__link').hover(function () {
        $('.banner__link').removeClass('banner__link--hovered');
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
    const sliderOptions = {
        speed: 800,
        direction: "vertical",
        spaceBetween: 50,
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

});

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
        duration: 1.2,
        delay: 0.5
    });

    bannerAnimation.fromTo('.banner .banner__text', {
        autoAlpha: 0,
        yPercent: -10,
    }, {
        autoAlpha: 1,
        yPercent: 0,
        duration: 1.2,
    }, "-=1.2");
    bannerAnimation.fromTo('.banner .banner__grid', {
        autoAlpha: 0,
    }, {
        autoAlpha: 1,
        duration: 1.2,
    }, "-=1.2");
    bannerAnimation.fromTo('.banner .banner__picture', {
        autoAlpha: 0,
        scale: 0.99,
    }, {
        autoAlpha: 1,
        scale: 1,
        duration: 1,
    }, "-=0.1");
    bannerAnimation.fromTo('.banner__decoration', {
        autoAlpha: 0,
    }, {
        autoAlpha: 1,
        duration: 1,
    }, "-=1");
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
    }, "-=0.6");
    productionAnimation.fromTo('.production__first-col', {
        autoAlpha: 0,
    }, {
        autoAlpha: 1,
        duration: 0.6,
    }, "-=0.6");
    productionAnimation.fromTo('.production__navigation', {
        autoAlpha: 0,
    }, {
        autoAlpha: 1,
        duration: 0.6,
    }, "+=0.3");
    productionAnimation.fromTo('.production-slider__wrapper', {
        autoAlpha: 0,
    }, {
        autoAlpha: 1,
        duration: 0.6,
    }, "-=0.6");
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

    issuesAnimation.fromTo('.issues', {
        autoAlpha: 0,
    }, {
        autoAlpha: 1,
        duration: 0.3,
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
    }, "-=0.6");
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

    issuesAnimation.fromTo('.services .section__in', {
        autoAlpha: 0,
    }, {
        autoAlpha: 1,
        duration: 0.3,
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

    toolsAnimation.fromTo('.tools__decoration', {
        autoAlpha: 0,
    }, {
        autoAlpha: 1,
        duration: 0.3,
    });

    toolsAnimation.fromTo('.tools .section__title', {
        autoAlpha: 0,
    }, {
        autoAlpha: 1,
        duration: 0.6,
    });

    toolsAnimation.fromTo('.tools .tools__intro', {
        autoAlpha: 0,
        yPercent: -10,
    }, {
        autoAlpha: 1,
        yPercent: 0,
        duration: 0.6,
    },  "-=0.6");
    toolsAnimation.fromTo('.tools .section__nav', {
        autoAlpha: 0,
    }, {
        autoAlpha: 1,
        duration: 0.6,
    },  "-=0.6");
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

    projectsAnimation.fromTo('.projects__decoration', {
        autoAlpha: 0,
    }, {
        autoAlpha: 1,
        duration: 0.3,
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
    },  "-=0.6");
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
});

$(() => {
    if ($(window).width() > 768) {
        $('.project').on('click', function () {

            $('.project__popup').removeClass('project__popup--visible');
            const projectLogoUrl = $(this).find('.project__logo').attr('src');
            const projectTitle = $(this).find('.project__title').html();
            const projectText = $(this).find('.project__description').html();
            const positionTop = $(this).position().top;


            const clickedAttribute = $('.projects .section__nav').find('.section__nav-link--hovered').attr('data-project');
            if (clickedAttribute !== $(this).attr('data-project')) {
                $('.project').removeClass('project--active');
                $('.projects .section__nav-link--hovered').removeClass('section__nav-link--hovered');
                $('.projects .section__nav-link[data-project="'+$(this).attr('data-project')+'"]').addClass('section__nav-link--hovered');
                $('.projects')
                    .find('.project[data-project="'+$(this).attr('data-project')+'"]').each(function () {
                    $(this).addClass('project--active');
                });
            }

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