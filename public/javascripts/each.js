$(document).ready(function(){
	$( ".newitem" ).on( "click", ".sign", function(){
		var x =this;
		console.log(x);
	$.ajax({
		url:"/products/"  + this.id,
		type:"delete",
		success:function(data){
			 if (data.success == true){
				$(x).parent("div").remove();
    }
	}
});
});	
	
$.ajax({
		url:"/products/",
		type:"get",
		success:function(data){
			var test=Handlebars.compile($('#hbar').html());
				$('.newitem').append(test(data));
				
			}
		})
		
		 $(".addbtn").on('click',function(event){
			console.log($(".addbtn"));
			event.preventDefault();
			//console.log("c");
				var item=$('input:text[name="itemname"]').val();
				var des=$('input:text[name="description"]').val();
				var p= $('input:text[name="price"]').val();
							
			$.ajax({
				url:"/products",
				type:"post",
				data:{
						itemname:item,
						description:des,
						price:p,
				},
				dataType:'json',
				
				success:function(data){	
				console.log(data);
					var test=Handlebars.compile($('#hbar').html());
					$('.newitem').append(test(data));
				}
			})
		})
});



