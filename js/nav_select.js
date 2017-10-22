$(function () {
    $("#navdown li").hover(
            function () {
                $(this).find("ul").show();
                $(this).find(".ndown").addClass('up');
            },
            function () {
                $(this).find("ul").hide();
                $(this).find(".ndown").removeClass('up');
            }
    );
});
$(function () {
    $('.app_box').hide();
    $('.app').hover(function () {
        $('.app_box').show();
    }, function () {
        $('.app_box').hide();
    });
});
$(function () {
    $('.four_phone').hide();
    $('.number_phone').hover(function () {
        $('.four_phone').show();
    }, function () {
        $('.four_phone').hide();
    });
});


// JavaScript Document