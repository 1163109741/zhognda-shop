/// <reference path="../../UserCenter/Index.html" />
/// <reference path="../../UserCenter/Index.html" />
/// <reference path="../../UserCenter/Index.html" />
/// <reference path="../../UserCenter/Index.html" />
/// <reference path="../../Index.html" />
/// <reference path="../../Index.html" />
/// <reference path="../../Index.html" />
(function ($) {

    $.TipLogin = function (t) {
        if (t == undefined)
            t = false;
        var div = $(' <div style="position:fixed;width:100%;height:100%;background:#000;opacity:0.3;top:0;left:0;z-index:9998;" class="tip_fixed"></div><div class="tip_fixed" style="position: fixed; width: 380px; height: 260px; left: 50%; margin-left: -190px; background: white; border-radius: 3px; z-index: 10000;top:50%;margin-top:-130px;"><div style="background:#f8f8f8;border-bottom:solid #e9e9e9 1px;line-height:39px;font-size:14px;color:#666666;padding:0 15px;font-weight:bold;border-radius:3px;">登录众大<i onclick="Login_close()" id="login_close" class="uk-icon-close uk-float-right" style="margin-top:11px;cursor:pointer;"></i></div><div style="padding:20px 40px;"><input id="number_text_name" style="text-indent:10px;line-height:34px;height:34px;width:100%;border-radius:3px;border:solid #cfcfcf 1px;padding-left:0;" type="text" name="" placeholder="请填写您的用户名或手机号" /><input id="password_border" style="text-indent:10px;line-height:34px;height:34px;width:100%;border-radius:3px;border:solid #cfcfcf 1px;margin-top:10px;" type="password" name="" placeholder="请填写您的密码" /><div id="login_btn" style="line-height:34px;height:34px;width:100%;border-radius:3px;margin-top:30px;background:#c40000;color:white;font-size:14px;cursor:pointer;text-align:center;" onclick="Window_Login(' + t + ')">登&nbsp;录</div><div><a style="font-size:12px;color:#666666;float:left;margin-top:8px;text-decoration:none;" href="'+System.UserCenterzdmall + '/MM/FindPwd.html">忘记密码？</a><a style="font-size: 12px; color: #666666; float: right; margin-top:8px; text-decoration: none;" href="javascript:void(0)" onclick="Regein()">新用户注册</a></div></div></div>').click(function () {
        });

        $("body").append(div);
        $("#password_border").keyup(function () {
            if (event.keyCode == 13) {
                Window_Login(t);
            }
        });

        document.onkeydown = function (event) {
            var e = event || window.event || arguments.callee.caller.arguments[0];
            if (e && e.keyCode == 13) {
                Window_Login(t)
            }
        };

    }
})(jQuery);
//注释的是关闭按钮
//<i onclick="Login_close()" id="login_close" class="uk-icon-close uk-float-right" style="margin-top:11px;cursor:pointer;"></i>
function Login_close() {
    $(".tip_fixed").remove();
};

function Regein() {
    window.open(System.UserCenterzdmall + "Register.html");
}

function Window_Login(t) {
    var data = { Account: $("#number_text_name").val(), LogPassword: $("#password_border").val() };
    if (data.Account == "") {
        alert("请填写账号")
        return;
    }
    if (data.LogPassword == "") {
        alert("请填写密码")
        return;
    }
    Post(System.APIMall + 'MemberBase/Login', data, function (d) {

        if (d.Success) {
            $('.tip_fixed').remove();
            if(t)
                location.reload();
            else
                location.href = location
        } else {
            alert(d.Msg);
        }
    })
};