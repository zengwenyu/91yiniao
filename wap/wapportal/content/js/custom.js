//Initialize Swiper
$(document).ready(function () {
    var swiper0 = new Swiper('#swiper-container-0', {
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
        lazy: true,
    });

});

$(document).ready(function () {
    //remove last item margin right
    $(".tab-pane-item").last().addClass("last");
    //switch swiper according to tab
    $("#swiper-container-1").addClass("hide");
    $('a[data-toggle="tab"]').on('shown.bs.tab', function (e) {
        var target = $(e.target).attr("href") // activated tab
        if (target == "#repair" || target == "#refresh") {
                $("#swiper-container-1").addClass("hide");
            var swiper = new Swiper('#swiper-container-0', {
                navigation: {
                    nextEl: '.swiper-button-next',
                    prevEl: '.swiper-button-prev',
                },
                lazy: true,
            });
            $("#swiper-container-0").removeClass("hide");
        } else if (target == "#riddance" || target == "#enhance") {
                $("#swiper-container-0").addClass("hide");
                 $("#swiper-container-1").removeClass("hide");
            var swiper = new Swiper('#swiper-container-1', {
                navigation: {
                    nextEl: '.swiper-button-next',
                    prevEl: '.swiper-button-prev',
                },
                lazy: true,
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
