$(function(){
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