$(".small_icon").mouseenter(function () {
    if (!$(this).children(".mp_tooltip").is(":animated")) {
        $(this).children(".mp_tooltip").animate({ left: -86, queue: true });
    }
    $(this).children(".mp_tooltip").css("visibility", "visible");
    $(this).children(".ibar_login_box").css("display", "block");
});
$(".small_icon").mouseleave(function () {
    $(this).children(".mp_tooltip").css("visibility", "hidden");
    if (!$(this).children(".mp_tooltip").is(":animated")) {
        $(this).children(".mp_tooltip").animate({ left: -121, queue: true });
    }

    $(this).children(".ibar_login_box").css("display", "none");
});
$(".quick_toggle li").mouseover(function () {
    $(this).children(".mp_qrcode").show();
});
$(".quick_toggle li").mouseleave(function () {
    $(this).children(".mp_qrcode").hide();
});
$(".small_small_icon").mouseenter(function () {
    if (!$(this).children(".QR_code").is(":animated")) {
        $(this).children(".QR_code").animate({ left: -120, queue: true });
    }
    $(this).children(".QR_code").css("visibility", "visible");
    $(this).children(".QR_code").css("display", "block");
});

$(".small_small_icon").mouseleave(function () {
    $(this).children(".QR_code").css("visibility", "hidden");
    if (!$(this).children(".QR_code").is(":animated")) {
        $(this).children(".QR_code").animate({ left: -110, queue: true });
    }

    $(this).children(".ibar_login_box").css("display", "none");
});

//返回顶部	
$(function () {
    $(".Totop_bottom").click(function () {
        $('body,html').animate({ scrollTop: 0 }, 500);
        return false;
    });

});
//购物车内背景颜色的改变
$(".car_box").hover(function () {
    $(this).find(".nube_div").css({ "background": "#fff", "color": "#c40000" });
}, function () {
    $(this).find(".nube_div").css({ "background": "#c40000", "color": "#fff" });
});
