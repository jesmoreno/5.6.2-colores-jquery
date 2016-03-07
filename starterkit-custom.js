// Fade out text when clicking over some other...
// ...and fade it back when clicking over some other.
//
jQuery(document).ready(function() {
    $("#faq dt").click(function() {
	$(this).fadeOut("slow");
    });
    $("h3").click(function() {
	$("dt").fadeIn("slow");
    });


    $("#orderedlist li").click(function() {
    	$(this).addClass('red');
    });

    $("li").click(function() {
    	$(this).addClass('blue');
    });

	$('ul li').hover(
		function() {
			$(this).addClass('green');
		}, function(){
			$(this).removeClass('green');
		}
	);

});