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
    
    

    //deco slide in from left
    var $stackDiv = $(".table-contrast .stack");
    $stackDiv.children(".mask").addClass("hide");
    $stackDiv.hover(function () {
        var $maskDiv = $(this).children(".mask");
        $maskDiv.toggle("slide", { direction: "left" }, 200);
        });


});

$(document).ready(function () {


    $('#open-popup-0').magnificPopup({
        items: [
            {
                src: 'portal/content/images/wall/case/gallery-popup/000_ztcjnh/001.jpg',
                title: '中铁城锦南汇',
            },
            {
                src: 'portal/content/images/wall/case/gallery-popup/000_ztcjnh/002.jpg',
                title: '中铁城锦南汇',
            },
            {
                src: 'portal/content/images/wall/case/gallery-popup/000_ztcjnh/003.jpg',
                title: '中铁城锦南汇',
            },
            {
                src: 'portal/content/images/wall/case/gallery-popup/000_ztcjnh/004.jpg',
                title: '中铁城锦南汇',
            },
            {
                src: 'portal/content/images/wall/case/gallery-popup/000_ztcjnh/005.jpg',
                title: '中铁城锦南汇'
            }
        ],
        gallery: {
            enabled: true
        },
        type: 'image' // this is a default type
    });

    $('#open-popup-1').magnificPopup({
        items: [
            {
                src: 'portal/content/images/wall/case/gallery-popup/001_yjht/001.jpg',
                title: '云景豪庭',
            },
            {
                src: 'portal/content/images/wall/case/gallery-popup/001_yjht/002.jpg',
                title: '云景豪庭'
            }
        ],
        gallery: {
            enabled: true
        },
        type: 'image' // this is a default type
    });

    $('#open-popup-2').magnificPopup({
        items: [
            {
                src: 'portal/content/images/wall/case/gallery-popup/002_jdzneq/001.jpg',
                title: '交大智能二期',
            },
            {
                src: 'portal/content/images/wall/case/gallery-popup/002_jdzneq/002.jpg',
                title: '交大智能二期'
            }
        ],
        gallery: {
            enabled: true
        },
        type: 'image' // this is a default type
    });

    $('#open-popup-3').magnificPopup({
        items: [
            {
                src: 'portal/content/images/wall/case/gallery-popup/003_hqcteb/001.jpg',
                title: '华侨城天鹅堡',
            },
            {
                src: 'portal/content/images/wall/case/gallery-popup/003_hqcteb/002.jpg',
                title: '华侨城天鹅堡',
            },
            {
                src: 'portal/content/images/wall/case/gallery-popup/003_hqcteb/003.jpg',
                title: '华侨城天鹅堡',
            },
            {
                src: 'portal/content/images/wall/case/gallery-popup/003_hqcteb/004.jpg',
                title: '华侨城天鹅堡'
            }
        ],
        gallery: {
            enabled: true
        },
        type: 'image' // this is a default type
    });

    $('#open-popup-4').magnificPopup({
        items: [
            {
                src: 'portal/content/images/wall/case/gallery-popup/004_hqccsa/001.jpg',
                title: '华侨城纯水岸',
            },
            {
                src: 'portal/content/images/wall/case/gallery-popup/004_hqccsa/002.jpg',
                title: '华侨城纯水岸',
            },
            {
                src: 'portal/content/images/wall/case/gallery-popup/004_hqccsa/003.jpg',
                title: '华侨城纯水岸',
            },
            {
                src: 'portal/content/images/wall/case/gallery-popup/004_hqccsa/004.jpg',
                title: '华侨城纯水岸'
            }
        ],
        gallery: {
            enabled: true
        },
        type: 'image' // this is a default type
    });

    $('#open-popup-5').magnificPopup({
        items: [
            {
                src: 'portal/content/images/wall/case/gallery-popup/005_hyjcmd/001.jpg',
                title: '华宇锦城名都',
            },
            {
                src: 'portal/content/images/wall/case/gallery-popup/005_hyjcmd/002.jpg',
                title: '华宇锦城名都',
            },
            {
                src: 'portal/content/images/wall/case/gallery-popup/005_hyjcmd/003.jpg',
                title: '华宇锦城名都',
            },
            {
                src: 'portal/content/images/wall/case/gallery-popup/005_hyjcmd/004.jpg',
                title: '华宇锦城名都'
            }
        ],
        gallery: {
            enabled: true
        },
        type: 'image' // this is a default type
    });

    $('#open-popup-6').magnificPopup({
        items: [
            {
                src: 'portal/content/images/wall/case/gallery-popup/006_jjyq/001.jpg',
                title: '金桔一期',
            },
            {
                src: 'portal/content/images/wall/case/gallery-popup/006_jjyq/002.jpg',
                title: '金桔一期',
            },
            {
                src: 'portal/content/images/wall/case/gallery-popup/006_jjyq/003.jpg',
                title: '金桔一期',
            },
            {
                src: 'portal/content/images/wall/case/gallery-popup/006_jjyq/004.jpg',
                title: '金桔一期'
            }
        ],
        gallery: {
            enabled: true
        },
        type: 'image' // this is a default type
    });

    $('#open-popup-7').magnificPopup({
        items: [
            {
                src: 'portal/content/images/wall/case/gallery-popup/007_jsld/001.jpg',
                title: '金沙鹭岛',
            },
            {
                src: 'portal/content/images/wall/case/gallery-popup/007_jsld/002.jpg',
                title: '金沙鹭岛',
            },
            {
                src: 'portal/content/images/wall/case/gallery-popup/007_jsld/003.jpg',
                title: '金沙鹭岛',
            },
            {
                src: 'portal/content/images/wall/case/gallery-popup/007_jsld/004.jpg',
                title: '金沙鹭岛'
            }
        ],
        gallery: {
            enabled: true
        },
        type: 'image' // this is a default type
    });

    // $(".trigger-pop .mask").hover(function () {
    //     $(this).parent().parent().toggleClass("hover");
    //     event.stopPropagation();
    // })

});
