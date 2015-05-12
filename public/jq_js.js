$(document).ready(function(){				
				$("div").on("click","input",function(event){
					var frt = this.nextSibling.innerHTML;
					if (this.checked){
						$("ul").append("<li>"+frt+"</li>");
						$(this.nextSibling).toggleClass("fruits");
						$('.fruits').prop("color","red");
					}else{
						$("ul li:contains("+frt+")").remove();
						$(this.nextSibling).toggleClass("fruits");
						}
				});
				$("div").on("click","button",function(event){
					var fname = prompt("Enter fruit name:");
					$('#main').append('<input type="checkbox" /><span>'+fname+'</span><br/>');
				});
			});