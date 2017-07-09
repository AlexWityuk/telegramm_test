$(document).ready(function(){

	var arr = [];
	var select_val = 'p.id ASC';

	function toPrice(){
		var pricemax = $( "#amount_to" ).val().split(' ')[0];
		var pricemin = $( "#amount_from" ).val().split(' ')[0];
		$.post('siteprice', {pricemax: pricemax, pricemin: pricemin}, function () { 
        },"text");
	}
	

	$('.filterBody input[type="checkbox"]').on('change',function(){
		toPrice();
		var id = $(this).attr('value');
		arr.push(id);
		submitAjax();
        return false;
	})

	$('select[name="select_sort_product"]').on('change', function() {
		toPrice();
   	 	select_val = $(this).val();
   	 	submitAjax();
        return false;
 	});

 	$('div.category_nav .button').on('click', function(e){
 		e.preventDefault();
 		toPrice();
 		arr = [];
 		$('div.category_nav .button').each(function() {
			if ($(this).hasClass("active")) {
				$(this).removeClass("active");
				return false;
			}
		});
		arr.push($(this).attr('value'));
		submitAjax();
		$(this).addClass("active");
 	});

 	function submitAjax(){
 		$.post('/ajax', {arr: arr, select_val: select_val}, function (data) { 
            $(".category_items").html(data);
        },"text");
 	}

});