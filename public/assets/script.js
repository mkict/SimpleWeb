$(document).ready(function(){
	var $addbtn = $('.todo-app #add-btn');
	var $list = $('.todo-app ul');
	var count = 3;
	var $getData = $('#get-btn');
	$addbtn.click(function(e){
		var $sublist = $('<li>list '+(++count)+'</li>');
		$list.append($sublist);
		var tcount = count;
		$sublist.click((function(e){
			$(this).remove();
		}));
	});
	
	$getData.click(function(e){
		$.get( "/api/messages", function( res ) {
		  	for(var x in res.data){
		  		$list.append('<li>'+res.data[x]+'</li>');
		  	}
		});
	});
	
});
