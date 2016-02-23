$(document).on('ready page:load', function(){
	$(".title-accordion").click(function(){
    element = $(this).data('target');
    $("#"+element).slideToggle();
	})
	drawingLine();
});


drawingLine = function(){
	height = $("section.top-header").offset().top;
	rows = 20;
	count_rows = height / 20;
  top = 0;
  console.log(count_rows);
	for(i = 0; i < count_rows; i++){
		console.log(i);
		html = "<div id='"+i+"' class='line' style='width: 100%; height: 2px; color: #000; position: absolute'></div>";
		$("section.top-header").append(html);
		top += 20;
		$('#'+i).css({top: top});
	}
}