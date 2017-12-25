$(function(){
    //panel-shop-switcher
    $(".panel-heading").click(function(e){
        // switch arrow indicator
        $(this).find("span").toggleClass("glyphicon-chevron-up");
        $(this).find("span").toggleClass("glyphicon-chevron-down");
    });
    $(".list-group-item > a").click(function (e) {
        var $curTitle = $("#panel-shop-heading > h4 > #panel-title-txt");
        $('.panel-collapse').collapse('toggle');
        // change title according to list item clicked
        if (e.target == this ) {
            $(".panel-footer").removeClass("panel-footer");
            $(this).parents(".list-group-item").addClass("panel-footer");
            var $newTitle = $(this).text();
            // alert();
            $curTitle.text($newTitle);
        }

        e.preventDefault();
    });

    //select list
    var $curTxt = $(".select > .text");
    var $selTrigger = $('#select-trigger');
    //toggle select list content
    $selTrigger.on("click", function (e) {
        $(this).next(".option").slideToggle("fast");
        $(document).one("click", function(){
            $(".option").slideUp("fast");
        });
        e.stopPropagation();
    });
    //set title to chicked list item
    $(".option > div").click(function (e) {
        if (e.target == this ) {
            var $newTitle = $(this).text();
            $curTxt.text($newTitle);
            $(".option").slideUp("fast");
        } else {
            $(".option").slideUp("fast");
        };
    })
});