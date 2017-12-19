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
    var $curTxt = $(".select > .text");
    var $selTrigger = $('#select-trigger');
    //toggle select list content
    $selTrigger.on("click", function (e) {
        $(this).parents().next(".option").slideToggle("fast");
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

    // var num = ($(".num").text().substring(0,3));
    // console.log(num);
    $(".rateYo-50").rateYo({
        rating: 5.0,
        maxValue: 5,
        numStars: 5,
        precision: 2,
        starWidth: "18px",
        spacing: "0",
        normalFill: "#AEAEAE",
        ratedFill: "#e8314a",
        readOnly: true
        });
    $(".rateYo-49").rateYo({
        rating: 4.9,
        maxValue: 5,
        numStars: 5,
        precision: 2,
        starWidth: "18px",
        spacing: "0",
        normalFill: "#AEAEAE",
        ratedFill: "#e8314a",
        readOnly: true
    });
    $(".rateYo-48").rateYo({
        rating: 4.8,
        maxValue: 5,
        numStars: 5,
        precision: 2,
        starWidth: "18px",
        spacing: "0",
        normalFill: "#AEAEAE",
        ratedFill: "#e8314a",
        readOnly: true
    });
    $(".rateYo-47").rateYo({
        rating: 4.7,
        maxValue: 5,
        numStars: 5,
        precision: 2,
        starWidth: "18px",
        spacing: "0",
        normalFill: "#AEAEAE",
        ratedFill: "#e8314a",
        readOnly: true
    });
    $(".rateYo-46").rateYo({
        rating: 4.6,
        maxValue: 5,
        numStars: 5,
        precision: 2,
        starWidth: "18px",
        spacing: "0",
        normalFill: "#AEAEAE",
        ratedFill: "#e8314a",
        readOnly: true
    });
    $(".rateYo-45").rateYo({
        rating: 4.5,
        maxValue: 5,
        numStars: 5,
        precision: 2,
        starWidth: "18px",
        spacing: "0",
        normalFill: "#AEAEAE",
        ratedFill: "#e8314a",
        readOnly: true
    });
    $(".rateYo-50-sm").rateYo({
        rating: 5.0,
        maxValue: 5,
        numStars: 5,
        precision: 2,
        starWidth: "12px",
        spacing: "0",
        normalFill: "#AEAEAE",
        ratedFill: "#e8314a",
        readOnly: true
    });
    $(".rateYo-49-sm").rateYo({
        rating: 4.9,
        maxValue: 5,
        numStars: 5,
        precision: 2,
        starWidth: "12px",
        spacing: "0",
        normalFill: "#AEAEAE",
        ratedFill: "#e8314a",
        readOnly: true
    });
    $(".rateYo-48-sm").rateYo({
        rating: 4.8,
        maxValue: 5,
        numStars: 5,
        precision: 2,
        starWidth: "12px",
        spacing: "0",
        normalFill: "#AEAEAE",
        ratedFill: "#e8314a",
        readOnly: true
    });
    $(".rateYo-47-sm").rateYo({
        rating: 4.7,
        maxValue: 5,
        numStars: 5,
        precision: 2,
        starWidth: "12px",
        spacing: "0",
        normalFill: "#AEAEAE",
        ratedFill: "#e8314a",
        readOnly: true
    });
    $(".rateYo-46-sm").rateYo({
        rating: 4.6,
        maxValue: 5,
        numStars: 5,
        precision: 2,
        starWidth: "12px",
        spacing: "0",
        normalFill: "#AEAEAE",
        ratedFill: "#e8314a",
        readOnly: true
    });
    $(".rateYo-45-sm").rateYo({
        rating: 4.5,
        maxValue: 5,
        numStars: 5,
        precision: 2,
        starWidth: "12px",
        spacing: "0",
        normalFill: "#AEAEAE",
        ratedFill: "#e8314a",
        readOnly: true
    });
    });