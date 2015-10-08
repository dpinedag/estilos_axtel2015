// Activa el data-toggle en los list groups
 $('.axtel-listgroup-item').on('click',function(e){
   var previous = $(this).closest(".axtel-list-group").children(".active");
   previous.removeClass('active'); // previous list-item
   $(e.target).addClass('active'); // activated list-item
});

//Activa el data-toggle en los button bars
$(".axtel-btn-group > .btn").click(function(){
   $(this).addClass("active").siblings().removeClass("active");
});
 
//Cambia el estilo de los selects
$(document).ready(function(e){
    $( document ).on( 'click', '.bs-dropdown-to-select-group .dropdown-menu li', function( event ) {
    	var $target = $( event.currentTarget );
		$target.closest('.bs-dropdown-to-select-group')
			.find('[data-bind="bs-drp-sel-value"]').val($target.attr('data-value'))
			.end()
			.children('.dropdown-toggle').dropdown('toggle');
		$target.closest('.bs-dropdown-to-select-group')
    		.find('[data-bind="bs-drp-sel-label"]').text($target.context.textContent);
		return false;
	});
});