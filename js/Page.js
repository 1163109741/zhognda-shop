var ServerPath = "http://muijs.zhongdamall.com/UIKIT/";
document.write('<script type="text/javascript" src="' + ServerPath + 'js/jquery-1.8.2.js"></script>');

document.write('<script type="text/javascript" src="' + ServerPath + 'js/Config.js"></script>');
document.write('<script type="text/javascript" src="' + ServerPath + 'js/Tool.js"></script>');
document.write('<script type="text/javascript" src="' + ServerPath + 'JsExpand/FormToJson.js"></script>');

var JSFile = {
    ///时间选择器
    DateTime: [
       { Type: "Style", Url: ServerPath + "JsExpand/laydate-v1.1/laydate/skins/default/laydate.css" },
        { Type: "Script", Url: ServerPath + "JsExpand/laydate-v1.1/laydate/laydate.js" }
    ],
    ///分页控件
    Paging: [
        { Type: "Style", Url: ServerPath + "JsExpand/laypage/laypage/skin/laypage.css" },
        { Type: "Script", Url: ServerPath + "JsExpand/laypage/laypage/laypage.js" }
    ],
    ///模板控件
    Template: [
         { Type: "Script", Url: ServerPath + "JsExpand/laytpl.js" },
         { Type: "Script", Url: ServerPath + "js/TableData.js" }
    ],
    ///上传控件
    Upload: [
        { Type: "Style", Url: ServerPath + "JsExpand/zyUpload/zyUpload.css" },
         { Type: "Script", Url: ServerPath + "JsExpand/zyUpload/zyFile.js" },
         { Type: "Script", Url: ServerPath + "JsExpand/zyUpload/JZHUpload.js" }
    ],
    ///灯箱控件
    Lightbox: [
         { Type: "Script", Url: ServerPath + "uikit/js/components/lightbox.js" }
    ],
    ///提示控件
    Tooltip: [
        { Type: "Style", Url: ServerPath + "uikit/css/components/tooltip.min.css" },
          { Type: "Script", Url: ServerPath + "uikit/js/components/tooltip.min.js" }
    ],
    ///通知控件
    Notify: [
         { Type: "Style", Url: ServerPath + "uikit/css/components/notify.min.css" },
          { Type: "Script", Url: ServerPath + "uikit/js/components/notify.min.js" }
    ],
    ///得到URL中的参数
    UrlParam: [
          { Type: "Script", Url: ServerPath + "JsExpand/getUrlParam.js" }
    ],
    ///Cookie
    Cookie: [
        { Type: "Script", Url: ServerPath + "JsExpand/Jquery-Cookie.js" }
    ],
    ///layer窗口
    Layer:[
        { Type: "Style", Url: ServerPath + "JsExpand/layer/skin/layer.css" },
        { Type: "Script", Url: ServerPath + "JsExpand/layer/layer.js" }
    ],
    ///省市区选择
    Region: [
        { Type: "Script", Url: ServerPath + "JsExpand/Region.js" },
        { Type: "Script", Url: ServerPath + "JsExpand/JzhRegion.js" }
    ],
    Slideshow:[
      { Type: "Script", Url: ServerPath + "uikit/js/components/Slideshow.js" }

    ],
    //图片与加载
    Lazyload:[
       { Type: "Script", Url: ServerPath + "JsExpand/jquery.lazyload.js" }
       ],
    ///页面布局
    //PageLayout: [
    //    { Type: "Style", Url: "/Lib/CSS/LogoBox.css" },
    //    { Type: "Style", Url: "/Lib/CSS/Footer.css" },
    //    { Type: "Style", Url: "/Lib/CSS/top_nav.css" },
    //    { Type: "Style", Url: "/Lib/CSS/NewRight.css" },
    //    { Type: "Style", Url: "/Lib/CSS/FHead.css" },
    //    { Type: "Script", Url: "/Lib/Js/sidebar.js" },
    //    { Type: "Script", Url: "/Lib/Js/nav_select.js" },
    //    { Type: "Script", Url: "/Lib/Js/area.js" }   
    //]
};
function LoadModule(arr) {
    for (var i = 0; i < arr.length; i++) {
        var a1 = JSFile[arr[i]];
        for (var j = 0; j < a1.length; j++) {
            var item = a1[j];
            if (item.Type == "Style")
                document.write('<link rel="stylesheet" href="' + item.Url + '" />');
            if (item.Type == "Script")
                document.write('<script type="text/javascript" src="' + item.Url + '"></script>');
        }
    }
}
var _hmt = _hmt || [];
(function () {
    var hm = document.createElement("script");
    hm.src = "//hm.baidu.com/hm.js?ebe49dcf236530a0519d6227a282cca1";
    var s = document.getElementsByTagName("script")[0];
    s.parentNode.insertBefore(hm, s);
})();
