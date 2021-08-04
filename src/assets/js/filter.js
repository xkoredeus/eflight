$(() => {
    const initFilterSliders = () => {
        const powerSlider = mdc.slider.MDCSlider.attachTo(document.querySelector('.js-power-slider.mdc-slider'));
        const rangeSlider = mdc.slider.MDCSlider.attachTo(document.querySelector('.js-range-slider.mdc-slider'));
        const ipSlider = mdc.slider.MDCSlider.attachTo(document.querySelector('.js-ip-slider.mdc-slider'));
    };

    if ($(window).width() < 1200) {
        $('#filter').css('display','none');

        $('.js-toggle-filter').on('click', function () {
            setTimeout(() => {
                $.fancybox.open({
                    src  : '#filter',
                    touch: false,
                    afterLoad: function () {
                        initFilterSliders();
                    }
                });
            }, 200);
        });
    } else {
        initFilterSliders();
    }
});