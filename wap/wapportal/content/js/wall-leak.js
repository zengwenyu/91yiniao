

$(document).ready(function () {

    var mySwiper = new Swiper ('.swiper-container', {
        direction: 'horizontal',
        loop: false,
        slidesPerView: 4,
        autoplay: true,
        scrollbar: {
            el: '.swiper-scrollbar',
            draggable: true,
            // hide: false,
            // snapOnRelease: true,
        },
    })

    mySwiper.scrollbar.$el.css('height','4px');

    // $(".caption").hover(function () {
    //     $(this).find(".ico").toggleClass("hover");
    // });

    // var selectPop = function (el) {
    //     // console.log(el.target.tagName + " is clicked")
    //     var $self = $(this);
    //     // console.log($self[0].tagName + " is clicked")
    //     $self.next(".option").slideToggle("fast");
    //     $(document).one("click", function(){
    //         $(".option").slideUp("fast");
    //     });
    //
    //     // set title to chicked list item
    //
    //     $(this).next(".option").children("div").click(function (e) {
    //         // $(this).next(".option > div").click(function (e) {
    //         var $curTxt = $self.children(".text");
    //         // console.log($self + " is clicked")
    //         if (e.target == this ) {
    //             var $newTitle = $(this).text();
    //             $curTxt.text($newTitle);
    //             $(".option").slideUp("fast");
    //         } else {
    //             $(".option").slideUp("fast");
    //         };
    //     })
    //     el.stopPropagation();
    // };
    //
    // $(document).on("click", ".select-trigger", selectPop);
    var stackCaseHeight = $(".stack-case").eq(0).height();
    // console.log(stackCaseHeight);
    $("#stack-extra").css({
        "height": stackCaseHeight,
        "border": "1px solid #dcdcdc"
    });

});