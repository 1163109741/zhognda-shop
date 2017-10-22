$(function(){
	var show_per_page =30;
	var number_of_items = $('.news').children().size();
	var pageCount = Math.ceil(number_of_items/show_per_page);
	$('.news').children().css('display', 'none');
	$('.news').children().slice(0, show_per_page).css('display', 'block');
	$('#start_page').val(0);
	$('#current_page').val(0);
	$('#show_per_page').val(show_per_page);
	$('#end_page').val(pageCount);
	if(pageCount>5){
		page_icon(1,5,0);
	}else{
		page_icon(1,pageCount,0);
	}
	$("#pageGro li").live("click",function(){
			var pageNum = parseInt($(this).html())-1;

			var page = pageNum +1;
			var show_per_page = parseInt($('#show_per_page').val());
			 start_from = pageNum * show_per_page;
			end_on = start_from + show_per_page;
			$('.news').children().css('display', 'none').slice(start_from, end_on).css('display', 'block');
		if(pageCount > 5){
			pageGroup(page,pageCount);
		}else{

			$(this).addClass("on");
			$(this).siblings("li").removeClass("on");
		}
	});
	$("#pageGro .pageUp").click(function(){
			var pageNum = parseInt($("#pageGro li.on").html());
			if (pageNum <= 1) {
				var page = pageNum;
			}else{
				var page = pageNum-1;
			}
			var show_per_page = parseInt($('#show_per_page').val());
			 start_from = page * show_per_page - show_per_page;
			end_on = start_from + show_per_page;
			$('.news').children().css('display', 'none').slice(start_from,end_on).css('display', 'block');
		if(pageCount > 5){
			pageUp(pageNum,pageCount);
		}else{
			var index = $("#pageGro ul li.on").index();
			if(index > 0){
				$("#pageGro li").removeClass("on");
				$("#pageGro ul li").eq(index-1).addClass("on");
			}
		}
	});
	$("#pageGro .pageDown").click(function(){

			var pageNum = parseInt($("#pageGro li.on").html());
			var page = pageNum;
			if (pageNum===pageCount) {
				page = pageNum-1;
			}
			var show_per_page = parseInt($('#show_per_page').val());
			 start_from = page * show_per_page;
			end_on = start_from + show_per_page;
			$('.news').children().css('display', 'none').slice(start_from, end_on).css('display', 'block');
		if(pageCount > 5){
			pageDown(pageNum,pageCount);
		}else{
			var index = $("#pageGro ul li.on").index();//获取当前页

			if(index+1 < pageCount){
				$("#pageGro li").removeClass("on");//清除所有选中
				$("#pageGro ul li").eq(index+1).addClass("on");//选中上一页
			}
		}
	});
	$("#pageGro .pagestart").live("click",function(){
			var pageNum = $('#start_page').val();
			 start_from = pageNum * show_per_page;
			end_on = start_from + show_per_page;
			$('.news').children().css('display', 'none').slice(start_from, end_on).css('display', 'block');
		if (pageCount > 5) {
			pageGroup(1,pageCount);
		}else{

			var index = $("#pageGro ul li.on").index();//获取当前页

			if(index < pageCount){
				$("#pageGro li").removeClass("on");//清除所有选中
				$("#pageGro ul li:first").addClass("on");
			}
		}
	});
	$("#pageGro .pageend").live("click",function(){
		var pageNum1 = $('#end_page').val();
			var pagenum = pageNum1-2
				var page = pageNum1-1;
			 start_from = page * show_per_page;
			end_on = start_from + show_per_page;
			$('.news').children().css('display', 'none').slice(start_from, end_on).css('display', 'block');

		if (pageCount > 5) {
			pageGroup(pagenum,pageNum1);
			$("#pageGro ul li:last-child").addClass("on").siblings().removeClass("on");
		}else{

			var index = $("#pageGro ul li.on").index();//获取当前页

			if(index < pageCount){
				$("#pageGro li").removeClass("on");//清除所有选中
				$("#pageGro ul li:last-child").addClass("on");
			}
		}

	});
});

//点击跳转页面
function pageGroup(pageNum,pageCount){
	switch(pageNum){
		case 1:
			page_icon(1,5,0);
		break;
		case 2:
			page_icon(1,5,1);
		break;
		case pageCount-1:
			page_icon(pageCount-4,pageCount,3);
		break;
		case pageCount:
			page_icon(pageCount-4,pageCount,4);
		break;
		default:
			page_icon(pageNum-2,pageNum+2,2);
		break;
	}
}

//根据当前选中页生成页面点击按钮
function page_icon(page,count,eq){
	var ul_html = "";
	for(var i=page; i<=count; i++){
		ul_html += "<li>"+i+"</li>";
	}
	$("#pageGro ul").html(ul_html);
	$("#pageGro ul li").eq(eq).addClass("on");
}

//上一页
function pageUp(pageNum,pageCount){
	switch(pageNum){
		case 1:
		break;
		case 2:
			page_icon(1,5,0);
		break;
		case pageCount-1:
			page_icon(pageCount-4,pageCount,2);
		break;
		case pageCount:
			page_icon(pageCount-4,pageCount,3);
		break;
		default:
			page_icon(pageNum-2,pageNum+2,1);
		break;
	}
}

//下一页
function pageDown(pageNum,pageCount){
	switch(pageNum){
		case 1:
			page_icon(1,5,1);
		break;
		case 2:
			page_icon(1,5,2);
		break;
		case pageCount-1:
			page_icon(pageCount-4,pageCount,4);
		break;
		case pageCount:
		break;
		default:
			page_icon(pageNum-2,pageNum+2,3);
		break;
	}
}