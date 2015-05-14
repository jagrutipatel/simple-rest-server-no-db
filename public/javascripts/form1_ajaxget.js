$(document).ready(function(){
	$.ajax({
				url:"/users/",
				type:"get",
				success:function(data){
					for(var i=0;i<data.length;i++){
				$("#info").append('My details are:'+data[i].fname+'<br>'+data[i].lname+'<br>'+data[i].s+data[i].id+'<br>');
					}
				}
			})
	    $("button").click(function(event){
			event.preventDefault();
				var fname=$('input:text[name="firstname"]').val();
				var lname=$('input:text[name="lastname"]').val();
				var s= $('input:radio[name="sex"]:checked').val();
			$.ajax({
				url:"/users",
				type:"post",
				data:{
						fname,
						lname,
							s,
				},
				success:function(data){	
					$("#info").append('My details are:'+data.fname+'<br>'+data.lname+'<br>'+data.s+data.id);
		
				}
			})
		})
});