function echo(stringA, stringB) { var hello = "你好"; alert("hello world") } var IsFirefox = false; function JosnP(u, d, m) { $.ajax({ type: "POST", url: u, async: false, dataType: "jsonp", data: d, jsonp: "callback", success: function (result) { m(result) }, error: function (xhr, status, error) { } }) } Array.prototype.remove = function (dx) { if (isNaN(dx) || dx > this.length) { return false } for (var i = 0, n = 0; i < this.length; i++) { if (this[i] != this[dx]) { this[n++] = this[i] } } this.length -= 1 }; var FirefoxPost = { PostList: new Array(), FirefoxPostIsRun: false, Execute: function (item) { if (item != undefined && item != null) { this.PostList[this.PostList.length] = item } if (!this.FirefoxPostIsRun) { if (this.PostList.length > 0) { this.FirefoxPostIsRun = true; this.Post() } } }, Post: function () { var item = this.PostList[0]; var obj = this; $.ajax({ type: "POST", url: item.u, data: item.d, dataType: "json", xhrFields: { withCredentials: true }, success: function (data) { if (typeof item.m == "function") { item.m(data) } obj.PostList.remove(0); obj.FirefoxPostIsRun = false; obj.Execute() }, error: function () { obj.PostList.remove(0); obj.oFirefoxPostIsRun = false; obj.Execute() } }) } }; function LoadPage(url) { $.ajax({ type: "Get", url: url, dataType: "html", async: false, success: function (msg) { document.write(msg) } }) } var startTime = new Date().getTime(); function Post(u, d, m, t) { if (t != undefined && (new Date().getTime() - startTime) < 500) { return } startTime = new Date().getTime(); $.ajax({ type: "POST", url: u, data: d, dataType: "json", xhrFields: { withCredentials: true }, success: function (data) { if (typeof m == "function") { m(data) } }, error: function () { } }) } function SyncPost(u, d, m) { u = u; if (IsFirefox) { JosnP(u, d, m); return } $.ajax({ type: "POST", url: u, data: d, dataType: "json", async: false, xhrFields: { withCredentials: true }, success: function (data) { if (typeof m == "function") { m(data) } }, error: function () { } }) } function getExplorer() { var explorer = window.navigator.userAgent; if (explorer.indexOf("Firefox") >= 0) { IsFirefox = true } } function CreateSelect(list) { var str = ""; for (var i = 0; i < list.length; i++) { str += '<option value="' + list[i].ID + '">' + list[i].Title + "</option>" } return str } function DataRepalaceNull(a) { if (typeof (a) != "object") { return } for (var x in a) { if (a[x] == null) { a[x] = "" } else { DataRepalaceNull(a[x]) } } } function GetImgPath(Url, Width, Height) { Url = Url.toLocaleLowerCase(); var w = Width || 200; var h = Height || 200; if (w > 2000) { w = 2000 } if (h > 2000) { h = 2000 } var type = Url.substring(Url.lastIndexOf(".")); return Url + "." + w + "x" + h + type } function OpenPay(Type, VoucherNumber, BackUrl, C, I) { var url = System.ServerUrl + "Pay/"; var t = ""; switch (Type) { case "银联": url += "Upacp/Pay?"; break; case "农行": url += "AbcPay/Pay?"; break; case "支付宝": url += "ALiPay/Pay?"; break; case "微信": url = System.MobileUrl + "View/WeiXinPay.html?"; break } url += "VoucherNumber=" + VoucherNumber; var k = url; if (C == "PC") { t = "&Facility=PC"; url += "&Url=" + System.PCUrl + BackUrl + t } else { t = "&Facility=Phone"; url += "&Url=" + System.MobileUrl + BackUrl + t } if (I != undefined) { url = k + "&Url=" + BackUrl + t } location.href = url } function NetLink(http, url) { location.href = http + url } function MenberIsLogin(url) { if (url == null) { url = "../../Login.html" } $.ajax({ type: "POST", url: System.APIMall + "User/Info/GetModel", dataType: "json", async: false, xhrFields: { withCredentials: true }, success: function (data) { UserInfo = data }, error: function () { location.href = url } }) } function BsinessIsLogin(url) { if (url == null) { url = "../../Login.html" } MenberIsLogin(url); if (UserInfo.BusinessInfoID == 0) { location.href = url } } function AmIsLogin(url) { if (url == null) { url = "../../Login.html" } MenberIsLogin(url); if (UserInfo.LocalMangeID == 0) { location.href = url } } Date.prototype.toString = function (format) { var o = { "M+": this.getMonth() + 1, "d+": this.getDate(), "H+": this.getHours(), "m+": this.getMinutes(), "s+": this.getSeconds(), "q+": Math.floor((this.getMonth() + 3) / 3), "S": this.getMilliseconds() }; if (/(y+)/.test(format)) { format = format.replace(RegExp.$1, (this.getFullYear() + "").substr(4 - RegExp.$1.length)) } for (var k in o) { if (new RegExp("(" + k + ")").test(format)) { format = format.replace(RegExp.$1, RegExp.$1.length == 1 ? o[k] : ("00" + o[k]).substr(("" + o[k]).length)) } } return format }; function GetQueryString(name) { var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)"); var r = window.location.search.substr(1).match(reg); if (r != null) { return unescape(r[2]) } return null };
document.oncontextmenu = function (event) {
    if (window.event) {
        event = window.event;
    } try {
        var the = event.srcElement;
        if (!((the.tagName == "INPUT" && the.type.toLowerCase() == "text") || the.tagName == "TEXTAREA")) {
            return false;
        }
        return true;
    } catch (e) {
        return false;
    }
}
document.onkeydown = function () {

    if (window.event && window.event.keyCode == 123) {
        //alert("F12被禁用");
        event.keyCode = 0;
        event.returnValue = false;
    }
    if (window.event && window.event.keyCode == 13) {
        window.event.keyCode = 505;
    }

}
///POST提交 参数一：提交地址，参数二：提交数据，参数三：返回数据需要执行的方法,参数四：是否阻止重复提交
function NewPost(u, d, m,t ) {
   
        if (t != undefined && t != null)
            d[t] = localStorage[t];
        $.ajax({
            type: "POST",
            url: u,
            data: d,
            dataType: 'json',
            success: function (data) {
                if (typeof m == "function") {
                    m(data);
                }
            },
            error: function () {
                //alert("数据请求出错了！");
            }
        })
    }
//获取专柜中心信息，如果没有登入则跳转到登录页
function MallBusinessIsLogin(url) {
    if (url == null)
        url = 'Login.html';
    if(localStorage["XXB"]==undefined)
        location.href = url;
    //$.ajax({
    //    type: "POST",
    //    url: System.Centerbymall + 'MallBusiness/GetBusiness',
    //    dataType: 'json',
    //    async: false,
    //    xhrFields: {
    //        withCredentials: true
    //    },
    //    success: function (data) {
    //        MallBusiness = data;
    //    },
    //    error: function () {
    //        location.href = url;
    //    }
    //})
}
//获取专柜信息
function GetMallBusiness() {
    var json = localStorage.getItem('BusinessInfo');
    try {
        return JSON.parse(json);
    } catch (e) {
        return null;
    }
}
