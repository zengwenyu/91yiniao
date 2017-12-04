$(document).ready(function () {
    //remove last item margin right
    $(".tab-pane-item").last().addClass("last");
    //switch swiper according to tab
    $("#swiper-container-2").addClass("hide");
    $('a[data-toggle="tab"]').on('shown.bs.tab', function (e) {
        var target = $(e.target).attr("href") // activated tab
        if (target == "#enhance" || target == "#riddance") {
                $("#swiper-container-1").addClass("hide");
                $("#swiper-container-2").removeClass("hide");
            var swiper = new Swiper('.swiper-container', {
                navigation: {
                    nextEl: '.swiper-button-next',
                    prevEl: '.swiper-button-prev',
                },
            });
        } else {
                $("#swiper-container-2").addClass("hide");
                $("#swiper-container-1").removeClass("hide");
            var swiper = new Swiper('.swiper-container', {
                navigation: {
                    nextEl: '.swiper-button-next',
                    prevEl: '.swiper-button-prev',
                },
            });
        }
    });
    // $("#swiper-container-2").addClass("hide");
    // $("#tab-1, #tab-2").click(function () {
    //     $("#swiper-container-2").addClass("hide");
    //     $("#swiper-container-1").removeClass("hide");
    // });
    // $("#tab-3, #tab-4").click(function () {
    //     $("#swiper-container-1").addClass("hide");
    //     $("#swiper-container-2").Class("hide");
    // });

});
//Initialize Swiper
$(document).ready(function () {
    var swiper = new Swiper('.swiper-container', {
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
    });
});