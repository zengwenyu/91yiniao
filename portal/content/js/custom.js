$(document).ready(function () {
    //remove last item margin right
    $(".tab-pane-item").last().addClass("last");
    //switch swiper according to tab
    $("#swiper-2-static").addClass("hide");
    $('a[data-toggle="tab"]').on('shown.bs.tab', function (e) {
        var target = $(e.target).attr("href") // activated tab
        if (target == "#enhance" || target == "#riddance") {
                $("#swiper-1-static").addClass("hide");
                $("#swiper-2-static").removeClass("hide");
        } else {
                $("#swiper-2-static").addClass("hide");
                $("#swiper-1-static").removeClass("hide");
        }
    });
});

