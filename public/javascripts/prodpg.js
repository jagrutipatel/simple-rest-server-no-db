$(document).ready(function(){
		$( ".newitem" ).on( "click", ".glyphicon", function(){
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
		for(var i=0;i<data.length;i++){
		$(".newitem").append('<div class="newbox well well-lg">'+'<span class="sign glyphicon glyphicon-remove-sign pull-right"id='+data[i].id+'></span>'+'<button class="pricebtn btn btn-primary pull-right"  type="button">'+data[i].price+'</button>'+'<h2>'+'<strong>'+data[i].itemname+'</strong>'+'</h2>'+'<p>'+'<strong>'+data[i].description+'</strong>'+'</p>'+'</div>');
				}
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
					$(".newitem").append('<div class="newbox well well-lg">'+'<span class="sign glyphicon glyphicon-remove-sign pull-right" id='+data.id+'></span>'+'<button class="pricebtn btn btn-primary pull-right" type="button">'+data.price+'</button>'+'<h2>'+'<strong>'+data.itemname+'</strong>'+'</h2>'+'<p>'+'<strong>'+data.description+'</strong>'+'</p>'+'</div>');
						 
				}
			})
		})
});



