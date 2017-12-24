

$(document).ready(function () {
    $('a[data-toggle="tab"]').on('shown.bs.tab', function (e) {
        var target = $(e.target).attr("href") // activated tab
        if ($(target).is(':empty')) {
            $.ajax({
                type: "GET",
                url: "/article/",
                error: function(data){
                    alert("There was a problem");
                },
                success: function(data){
                    $(target).html(data);
                }
            })
        }
    });

    var mySwiper = new Swiper ('.swiper-container', {
        direction: 'horizontal',
        loop: true,
        // autoplay: true,
        slidesPerView: 2,
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
        },
    })
});