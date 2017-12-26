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

    // //select list
    // var $curTxt = $(".select > .text");
    // var $selTrigger = $('#select-trigger');
    // //toggle select list content
    // $selTrigger.on("click", function (e) {
    //     $(this).next(".option").slideToggle("fast");
    //     $(document).one("click", function(){
    //         $(".option").slideUp("fast");
    //     });
    //     e.stopPropagation();
    // });
    // //set title to chicked list item
    // $(".option > div").click(function (e) {
    //     if (e.target == this ) {
    //         var $newTitle = $(this).text();
    //         $curTxt.text($newTitle);
    //         $(".option").slideUp("fast");
    //     } else {
    //         $(".option").slideUp("fast");
    //     };
    // })

    //select list

    var selectPop = function (e) {
        // console.log(e.target.tagName + " is clicked")
        var $self = $(this);
            $(this).next(".option").slideToggle("fast");
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


    $(function () {
        removeSection = function (e) {
            $(e).parents(".section").remove();
            $('[data-spy="scroll"]').each(function () {
                var $spy = $(this).scrollspy('refresh')
            });
        }
        $("#myScrollspy").scrollspy();
        $('#myScrollspy').on('activate.bs.scrollspy', function () {
            alert(0)
        })
    });

    $(function () {
        $.getJSON("Time.json?v=0.5", function (data) {
            var str = "";
            for (var i = 0; i < data.length; i++) {
                var content1 = "";
                for (var k = 0; k < data[i].Content.length; k++) {
                    content1 += '<p>' + data[i].Content[k].li + '</p>'

                }
                str += ' <div class="cd-timeline-block">' +
                    ' <div class="cd-timeline-img cd-right"></div>' +
                    ' <div class="cd-timeline-img cd-left"></div>' +
                    '<div class="cd-timeline-img cd-picture">' +
                    ' <div></div></div>' +
                    '<div class="cd-timeline-content">' +
                    '<h2>' + data[i].Title + '</h2>'
                    + content1 + "" +
                    '</div>' +
                    '</div>'

            }
            $("#cd-timeline").html(str);


        })

    })
});