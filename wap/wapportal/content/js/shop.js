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
            // $(".panel-footer").removeClass("panel-footer");
            // $(this).parents(".list-group-item").addClass("panel-footer");
            var $newTitle = $(this).text();
            // alert();
            $curTitle.text($newTitle);
        }

        e.preventDefault();
    });

    var selectPop = function (e) {
        // console.log(e.target.tagName + " is clicked")
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
    };

    $(document).on("click", ".select-trigger", selectPop);

});

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
    })
});