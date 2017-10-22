///2015-111-06
///蒋智辉
///简化版上传插件
(function ($, undefined) {
    var Model = {};
    $.fn.JZHUpload = function (options, d) {
        if (typeof options == "string") {
            return $.fn.JZHUpload.methods[options](this, d);
        }
        var defaults = {
            url: "",  	// 上传文件的路径
            onSuccess: function (file) { },            // 文件上传成功的回调方法
            onFailure: function (file) { }            // 文件上传失败的回调方法

        };
        var para = {};    // 保留参数

        var id = $(this).attr("id");

        para = $.extend(defaults, options); 
        Model[id] = para;
        var html = "";
        html += '<form id="'+id+'uploadForm" action="' + para.url + '" method="post" enctype="multipart/form-data" style="display:none">';
        html += '<input id="' + id + 'fileImage" type="file" size="30" name="fileselect[]" multiple="true"><input type="button" id="' + id + 'fileSubmit" >';
        html += '</form>';
        $("#" + id + "uploadForm").remove();
        $("body").append(html);

        createCorePlug(id);


        $(this).bind("click", function (e) {
            try {
                window.ServerUp.UpImg(id, para.url);
            }
            catch (e) { }
            $("#"+id+"fileImage").click();
        });

        /**
			 * 功能：过滤上传的文件格式等
			 * 参数: files 本次选择的文件
			 * 返回: 通过的文件
			 */
          function funFilterEligibleFile(files) {
            var arrFiles = [];  // 替换的文件数组
            for (var i = 0, file; file = files[i]; i++) {
                if (file.size >= 51200000) {
                    alert('您这个"' + file.name + '"文件大小过大');
                } else if (file.type.indexOf("image") == -1) {
                    alert('您这个"' + file.name+" 类型："+file.type + '"不是图片文件');
                    
                }else {
                    // 在这里需要判断当前所有文件中
                    arrFiles.push(file);
                }
            }
            return arrFiles;
        };
        /**
			 * 功能：调用核心插件
			 * 参数: 无
			 * 返回: 无
			 */
          function createCorePlug(id) {
            var params = {
                fileInput: $("#" + id + "fileImage").get(0),
                uploadInput: $("#" + id + "fileSubmit").get(0),
                url: $("#" + id + "uploadForm").attr("action"),

                filterFile: function (files) {
                    return funFilterEligibleFile(files);
                },
                onSelect: function (selectFiles, allFiles) {
                  
                    $("#" + id + "fileSubmit").click();
                },

                onSuccess: function (file, response) {
                    var obj = eval('(' + response + ')');
                    Model[id].onSuccess(obj);
                    
                },
                onFailure: function (file) {
                    Model[id].onFailure(response);
                    //$("#uploadImage_" + file.index).css("opacity", 0.2);
                },
                onDragOver: function () {
                    //$(this).addClass("upload_drag_hover");
                },
                onDragLeave: function () {
                    //$(this).removeClass("upload_drag_hover");
                }

            };

            Model[id + "Up"] = $.extend(GetZYFILE(), params);
            Model[id+"Up"].init();
        };
    }
    $.fn.JZHUpload.methods = {
        Success: function (jq, d) {
            var id = $(jq).attr("id");
            Model[id].onSuccess(d);
            return ;
        }
    }
})(jQuery)