$(document).ready(function(e) {
 //显示更多的高度调整
	main_heigth = $("#dl_suppliers_main_category").height();
	$("#dl_suppliers_main_category").parent().css("height", "60px");
	main_heigth = main_heigth < 60 ? 60 : main_heigth + 20;
//主类更多效果
	$("#a_main_more_show").toggle(function () {
		$(this).parent().css("height", "" + main_heigth + "px");
		$("#div_main_heigth").css("height", main_heigth + "px");
	}, function () {
		$(this).parent().css("height", "60px");
		$("#div_main_heigth").css("line-height", "60px");
	});
//大类点击效果
	maina_heigth = $("#dl_suppliers_big_category").height();
	$("#dl_suppliers_big_category").parent().css("height", "60px");
	maina_heigth = main_heigth < 60 ? 60 : maina_heigth + 20;
	$("#a_big_more_show").toggle(function(){
		$(this).parent().css("height", "" + maina_heigth + "px");
		$("#div_big_heigth").css("height", "" + maina_heigth + "px");
	}, function () {
		$(this).parent().css("height", "60px");
		$("#div_big_heigth").css("line-height", "60px");
	});	
//小类点击效果
	mainb_heigth = $("#dl_suppliers_small_category").height();
	$("#dl_suppliers_small_category").parent().css("height", "60px");
	mainb_heigth = main_heigth < 60 ? 60 : mainb_heigth + 20;
	$("#a_small_more_show").toggle(function(){
		$(this).parent().css("height", "" + mainb_heigth + "px");
		$("#div_small_heigth").css("height", "" + mainb_heigth + "px");
	}, function () {
		$(this).parent().css("height", "60px");
		$("#div_small_heigth").css("line-height", "60px");
	});	
//鼠标经过
	$(".product_list li a.liemouse,.product_list li a.liehover").hover(function(){
		$(this).css("color","rgb(229, 0, 19)");
	},function(){
		$(this).css("color","rgb(102, 102, 102)");
	});
//显示展开更多
	$(".select-list").hover(function () {
		$(this).find(".more_show").show();
	}, function () {
		$(this).find(".more_show").hide();
	});
//排序
	$(".desc").not("#Price").click(function () {
		$(this).addClass("frame").siblings().removeClass("frame");
		$(this).removeClass("back_add").siblings().addClass("back_add");
		$(this).find("img").attr("src", "img/other/reddown.png");
		$(this).siblings().not("#Price").find("img").attr("src", "img/other/down.png");
		$(this).find("span").addClass("color_b");
		$(this).siblings().find("span").removeClass("color_b");
		$(this).siblings("#Price").find(".tdown").attr("src", "img/icond.png");
		$(this).siblings("#Price").find(".ttop").attr("src", "img/icont.png");
	});
//价格排序
	var ThisEv = 0;
	$("#Price").click(function () {
		$(this).addClass("frame").siblings().removeClass("frame");
		$(this).removeClass("back_add").siblings().addClass("back_add");
		$(this).find("span").addClass("color_b");
		$(this).siblings().find("span").removeClass("color_b");
		$(this).siblings().find("img").attr("src", "img/down.png");
		var sort = $(this).children("span").attr("data-name");
		$("#txtOrder").val(sort);
		ThisEv = ThisEv + 1;
		if (ThisEv % 2 == 1) {
			$(this).find(".tdown").attr("src", "img/redicond.png");
			$(this).find(".ttop").attr("src", "img/icont.png");
		} else {
			$(this).find(".tdown").attr("src", "img/icond.png");
			$(this).find(".ttop").attr("src", "img/redicont.png");
		}
	});
});
//侧边栏导航下拉
$(".uk-nav-sub").show();
$(document).ready(function(e) {
	$(".project1").click(function() {
	  if ($(this).find("i").hasClass("uk-icon-angle-right")) {
		$(this).find("i").removeClass("uk-icon-angle-right").addClass("uk-icon-angle-down");
		$(this).parent().find('ul').slideDown();
	  } else {
		$(this).find("i").removeClass("uk-icon-angle-down").addClass("uk-icon-angle-right");
		$(this).parent().find('ul').slideUp();
	  }
	  //  $(this).find('ul').toggle();
	
	});
});
//头部导航-黑色
$(".ivu-select-dropdown").hide();
$(".ivu-modal-hidden").css("display","none");
$(document).ready(function(e) {
	$(".ivu-dropdown").mouseenter(function () {
		$(this).children(".ivu-select-dropdown").slideDown();
	});
	$(".ivu-dropdown").mouseleave(function () {
		$(this).children(".ivu-select-dropdown").slideUp();
	});
});
//头部导航-白色
$(".app_box").hide();
$(".navtopul").hide();
$(document).ready(function(e) {
	$(".navtopdown").mouseenter(function () {
		$(this).children(".navtopul").show();
		$(this).children(".ndown").css("background-image","url(img/other/navup.png)");
	});
	$(".navtopdown").mouseleave(function () {
		$(this).children(".navtopul").hide();
		$(this).children(".ndown").css("background-image","url(img/other/navdown.png)");
	});
	$(".app").mouseenter(function () {
		$(this).children(".app_box").show();
	});
	$(".app").mouseleave(function () {
		$(this).children(".app_box").hide();
	});
});
//我的关注-收藏
	$(".attentab").hide().first().show();
	$(document).ready(function(e) {
		$(".attendnc li").click(function(){
			$(this).addClass("attenhit").siblings().removeClass("attenhit");
			$(".attentab").hide().eq($(this).index()).show();
		});
		$(".attenabf").click(function(){
			$(".atten-bj").css("display","block");
			$(".atten-alert").css("display","block");
		});
		$(".attenclo,attenclo").click(function(){
			$(".atten-bj").css("display","none");
			$(".atten-alert").css("display","none");
		});
		$(".indpro-fcf i").click(function(){
			$(".attencar").show(0).delay(800).fadeOut();
		});
	});
$(".ivu-modal-hidden").css("display","none");
$(document).ready(function(e) {
	//弹窗-基本资料
	$(".UserInformation-bottom").click(function(){
		$(".ivu-modal-hidden").fadeIn();
		$(".ivu-modal-mask").fadeIn();
	});
	$(".deteNO,.deteOK").click(function(){
		$(".ivu-modal-hidden").fadeOut();
		$(".ivu-modal-mask").fadeOut();
	});
	//弹窗-账户安全
	$(".AccountSecurity-bottom1,.AccountSecurity-bottom2,.AccountSecurity-bottom3").click(function(){
		$(".ivu-modal-hidden").fadeIn();
		$(".ivu-modal-mask").fadeIn();
	});
	//弹窗-实名认证
	$(".box-buttom").click(function(){
		$(".ivu-modal-hidden").fadeIn();
		$(".ivu-modal-mask").fadeIn();
	});
	//新增地址
	$(".Receiving-box2").hover(function(){
		$(this).find("img").attr("src","img/operation/circle-hover.png");
		$(this).find("div").css("color","#FF9955");
	},function(){
		$(this).find("img").attr("src","img/operation/circle.png");
		$(this).find("div").css("color","#999");
	});
	//弹窗-新增地址
	$(".Receiving-box2").click(function(){
		$(".ivu-modal-hidden").fadeIn();
		$(".ivu-modal-mask").fadeIn();
	});
	//弹窗-添加银行卡
	$(".AddBankCards").click(function(){
		$(".ivu-modal-hidden").fadeIn();
		$(".ivu-modal-mask").fadeIn();
	});
	//添加银行卡
	$(".AddBankCards").hover(function(){
		$(this).find("img").attr("src","img/operation/card-hover.png");
		$(this).find("div").css("color","#FF9955");
	},function(){
		$(this).find("img").attr("src","img/operation/card.png");
		$(this).find("div").css("color","#999");
	});
	//弹窗-会员
	$(".AddBankCards").click(function(){
		$(".ivu-modal-hidden").fadeIn();
		$(".ivu-modal-mask").fadeIn();
	});
});
	//缴费记录
	$(".subject_name").click(function() {
		var id = $(this).attr("data-id");
		$(this).addClass("add_color").siblings().removeClass("add_color");
		if (id == 1) {
			$("#one_box").show();
			$("#two_box").hide();
			$("#three_box").hide();
		} else if (id == 2) {
			$("#one_box").hide();
			$("#two_box").show();
			$("#three_box").hide();
		} else {
			$("#one_box").hide();
			$("#two_box").hide();
			$("#three_box").show();
		}
	});
	//缴费记录-切换
	$("#my-id .subject-list").hide().first().show();
	$(document).ready(function(e) {
		$(".subject_top ul li").click(function(){
			$(this).addClass("add_color").siblings().removeClass("add_color");
			$("#my-id .subject-list").hide().eq($(this).index()).show();
		});
	
	});
	//积分变动明细
	$(document).ready(function(e) {
		$(".changetitle dd").click(function(){
			$(this).addClass("activestyle").siblings().removeClass("activestyle");
		});
		//认证
		$(".ivu-tooltip").hover(function(){
			$(".ivu-tooltip-popper").fadeIn();
			},function(){
			$(".ivu-tooltip-popper").fadeOut();
		});
	});
$(".ivu-select-dropdown").hide();
$(document).ready(function(e) {
	//新增地址弹窗
		$(".newadd").click(function(){
			$("#showPanel").css({"opacity":"1","display":"block"});
			$(".uk-modal-dialog").css("opacity","1");
		});
		$(".uk-modal-close,.uk-close").click(function(){
			$("#showPanel").css({"opacity":"0","display":"none"});
			$(".uk-modal-dialog").css("opacity","0");
		});
		//新增地址
		$(".Receiving-box2").hover(function(){
			$(this).find("img").attr("src","img/operation/circle-hover.png");
			$(this).find("div").css("color","#FF9955");
		},function(){
			$(this).find("img").attr("src","img/operation/circle.png");
			$(this).find("div").css("color","#999");
		});
		//鼠标经过地址框
		$(".hover_box").hide();
		$(".message_box").hover(function(){
			$(".hover_box").css("display","block");
		},function(){
			$(".hover_box").css("display","none");
		});
	});
	//侧边导航显示隐藏等动效
	$(".bg").hide();
	$(document).ready(function(e) {
		$(".products_category").toggle(function(){
			$('.bg').show();
			$('.down_more').addClass('up_more');
			$(this).children(".down_more").children().attr("class", "uk-icon-angle-down");
		},function(){
			$('.bg').hide();
			$('.up_more').removeClass('up_more');
			$(this).children(".down_more").children().attr("class", "uk-icon-angle-up")
		});
	});
		//右边下拉
			$(document).ready(function(e) {
			$("#RightByBox").hover(function () {
				$(this).children(".RightByUL").slideToggle(500);
				$(this).find(".downByup").css({ "transform": "rotate(-180deg)", "transition": "transform .10s ease-in-out" })
				$(this).children(".RightByUL").animate({top: "40px"}, 500);
			}, function () {
				$(this).children(".RightByUL").hide(500);
				$(this).find(".downByup").css({ "transform": "rotate(0deg)", "transition": "transform .10s ease-in-out" })
				$(this).children(".RightByUL").animate({
					top: "40px"
				}, 500);
			});
			//二维码
			$(".RighCode").mouseover(function () {
				$(".PublicNumber").show()
			});
			$(".RighCode").mouseout(function () {
				$(".PublicNumber").hide()
			});
			//返回顶部
			$(".Totop_bottom").click(function(){
				$('body,html').animate({ scrollTop: 0 }, 500);
				return false;
			});
		});
	//线下百货
	$(document).ready(function(e) {
		//分类下拉
			$("#classification").mouseenter(function(){
			$("#classificationdiv").show();
		});
		$("#classificationdiv,#classification").mouseleave(function(){
			$("#classificationdiv").hide();
		});
		//点击切换
		$("#change").click(function(){
			$("#showModal").css({"opacity":"1","display":"block"});
			$(".uk-modal-dialog").css("opacity","1");
		});
		 $(".imgboxBymask").hover(function () {
			$(this).children(".imgFixmask").show();
			$(this).children(".clickCenter").show();
			}, function () {
			$(this).children(".imgFixmask").hide();
			$(this).children(".clickCenter").hide();
		});
		$(".clickCenter").click(function(){
			$("#showModal").css({"opacity":"0","display":"none"});
			$(".uk-modal-dialog").css("opacity","0");
		});
	});