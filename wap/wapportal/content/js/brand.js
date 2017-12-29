

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

    var selectPop = function (el) {
        // console.log(el.target.tagName + " is clicked")
        var $self = $(this);
        // console.log($self[0].tagName + " is clicked")
        $self.next(".option").slideToggle("fast");
        $(document).one("click", function(){
            $(".option").slideUp("fast");
        });

        // set title to chicked list item

        $(this).next(".option").children("div").click(function (e) {
            // $(this).next(".option > div").click(function (e) {
            var $curTxt = $self.children(".text");
            // console.log($self + " is clicked")
            if (e.target == this ) {
                var $newTitle = $(this).text();
                $curTxt.text($newTitle);
                $(".option").slideUp("fast");
            } else {
                $(".option").slideUp("fast");
            };
        })
        el.stopPropagation();
    };

    $(document).on("click", ".select-trigger", selectPop);
});