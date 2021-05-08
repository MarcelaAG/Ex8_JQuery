//The css() method sets or returns one or more style properties for the selected elements.
$(document).ready(function(){
    let changeColour = $('ol');
    $(changeColour).on('mouseenter', function() {
        $(this).css({"color": "red"});
    });
});    