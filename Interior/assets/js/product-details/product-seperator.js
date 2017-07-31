$( document ).ready(function() {

    var $el, leftPos, newWidth;
    $mainNav2 = $("#filters");


    $("#filters").append("<li id='magic-line2'></li>");

    /* Cache it */
    var $magicLine = $("#magic-line2");

    $magicLine
        .width($(".current_page_item").width())
        .css("left", $(".current_page_item").position().left)
        .data("origLeft", $magicLine.position().left)
        .data("origWidth", $magicLine.width());


    $("#filters").find("button").hover(function() {
        $el = $(this);
        leftPos = $el.position().left;
        newWidth = $el.width();

        $magicLine.stop().animate({
            left: leftPos,
            width: newWidth
        });
    }, function() {
        $magicLine.stop().animate({
            left: $magicLine.data("origLeft"),
            width: $magicLine.data("origWidth")
        });
    });
});