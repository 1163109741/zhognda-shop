$(function () {
    // @ 给窗口加滚动条事件
    $(window).scroll(function () {
        // 获得窗口滚动上去的距离
        var ling = $(document).scrollTop();
        // 如果滚动距离大于1534的时候让滚动框出来
        if (ling > 878) {
            $('#box').show();
        }
 
        if (1382 < ling, ling < 1438) {
            // 让第一层的数字隐藏，文字显示，让其他兄弟元素的li数字显示，文字隐藏
            $('#box ul li').eq(1).find('.num').hide().siblings('.word').css('display', 'block');
            $('#box ul li').eq(1).siblings('li').find('.num').css('display', 'block').siblings('.word').hide();
        } else if (ling < 1889) {
            $('#box ul li').eq(2).find('.num').hide().siblings('.word').css('display', 'block');
            $('#box ul li').eq(2).siblings('li').find('.num').css('display', 'block').siblings('.word').hide();
        } else if (ling < 2344) {
            $('#box ul li').eq(3).find('.num').hide().siblings('.word').css('display', 'block');
            $('#box ul li').eq(3).siblings('li').find('.num').css('display', 'block').siblings('.word').hide();
        } else if (ling < 2800) {
            $('#box ul li').eq(4).find('.num').hide().siblings('.word').css('display', 'block');
            $('#box ul li').eq(4).siblings('li').find('.num').css('display', 'block').siblings('.word').hide();
        } else if (ling < 3251) {
            $('#box ul li').eq(5).find('.num').hide().siblings('.word').css('display', 'block');
            $('#box ul li').eq(5).siblings('li').find('.num').css('display', 'block').siblings('.word').hide();
        } else if (ling < 3668) {
            $('#box ul li').eq(6).find('.num').hide().siblings('.word').css('display', 'block');
            $('#box ul li').eq(6).siblings('li').find('.num').css('display', 'block').siblings('.word').hide();
        }else if (ling < 4124) {
            $('#box ul li').eq(7).find('.num').hide().siblings('.word').css('display', 'block');
            $('#box ul li').eq(7).siblings('li').find('.num').css('display', 'block').siblings('.word').hide();
        } else if (ling < 4580) {
            $('#box ul li').eq(8).find('.num').hide().siblings('.word').css('display', 'block');
            $('#box ul li').eq(8).siblings('li').find('.num').css('display', 'block').siblings('.word').hide();
        } else if (ling < 5036) {
            $('#box ul li').eq(9).find('.num').hide().siblings('.word').css('display', 'block');
            $('#box ul li').eq(9).siblings('li').find('.num').css('display', 'block').siblings('.word').hide();
        } else if (ling < 5036) {
            $('#box ul li').eq(10).find('.num').hide().siblings('.word').css('display', 'block');
            $('#box ul li').eq(10).siblings('li').find('.num').css('display', 'block').siblings('.word').hide();
        }
       
        if (ling > 5492, ling < 678) {
            // $('#box').css('display','none');  // @ 这一句和下一句效果一样。
            $('#box').hide();
        }
    });
});

$(function () {
    $('#box ul li').hover(function () {
        $(this).find('.num').hide().siblings('.word').css({ 'display': 'block', 'background': '#cb0000', 'color': 'white' });
    }, function () {
        $(this).find('.num').css({ 'display': 'block', 'background': 'white', 'color': '#666' }).siblings('.word').hide().css({ 'display': 'none', 'background': '', 'color': '' });
    });
});
$(function () {
    $("#top").click(function () {
        $('html,body').animate({ scrollTop: 0 }, 300);
    });
    $("#one").click(function () {
        $('html,body').animate({ scrollTop: 1037 }, 300);
    });
    $("#two").click(function () {
        $('html,body').animate({ scrollTop: 1500 }, 300);
    });
    $("#three").click(function () {
        $('html,body').animate({ scrollTop: 1963 }, 300);
    });
    $("#four").click(function () {
        $('html,body').animate({ scrollTop: 2426 }, 300);
    });
    $("#five").click(function () {
        $('html,body').animate({ scrollTop: 2889 }, 300);
    });
    $("#six").click(function () {
        $('html,body').animate({ scrollTop: 3352 }, 300);
    });
    $("#seven").click(function () {
        $('html,body').animate({ scrollTop: 3815 }, 300);
    });
    $("#eight").click(function () {
        $('html,body').animate({ scrollTop: 4278 }, 300);
    });
    $("#nine").click(function () {
        $('html,body').animate({ scrollTop: 4741 }, 300);
    });
    $("#ten").click(function () {
        $('html,body').animate({ scrollTop: 5204 }, 300);
    });
});   // JavaScript Document
