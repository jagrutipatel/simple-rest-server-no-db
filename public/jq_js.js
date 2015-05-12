$(document).ready(function(){				
				$("div").on("click","input",function(event){
					var frt = this.nextSibling.innerHTML;
					if (this.checked){
						$("ul").append("<li>"+frt+"</li>");
					}else{
						$("ul li:contains("+frt+")").remove();
					}
				});
				$("div").on("click","button",function(event){
					var fname = prompt("Enter fruit name:");
					$('#main').append('<input type="checkbox" /><span>'+fname+'</span><br/>');
				});
			});