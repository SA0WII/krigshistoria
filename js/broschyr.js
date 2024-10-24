$(function() {
    $(".side").on("click", function(e) {
        $(".page:not(.cover)").toggle();
    })
});