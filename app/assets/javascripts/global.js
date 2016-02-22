$(document).on('ready page:load', function(){
	$(".title-accordion").click(function(){
    element = $(this).data('target');
    $("#"+element).slideToggle();
    $(window).resize(function(){
    	alert($(window).width());
    })
	})
});
