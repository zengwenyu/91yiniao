

$(document).ready(function () {

    var mySwiper = new Swiper ('.swiper-container', {
        direction: 'horizontal',
        loop: true,
        // autoplay: true,
        slidesPerView: 2,
        autoplay: true,
        // 如果需要分页器
        // pagination: {
        //     el: '.swiper-pagination',
        // },

        // 如果需要前进后退按钮
        // navigation: {
        //     nextEl: '.swiper-button-next',
        //     prevEl: '.swiper-button-prev',
        // },

        // 如果需要滚动条
        scrollbar: {
        el: '.swiper-scrollbar',
        draggable: true,
        // hide: false,
        // snapOnRelease: true,
        },
    })

    mySwiper.scrollbar.$el.css('height','4px');

    $(".caption").hover(function () {
        $(this).find(".ico").toggleClass("hover");
    });
});