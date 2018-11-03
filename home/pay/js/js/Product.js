$(function () {
    demo();
    $("#Amount").change(function () {
        if ($("#DiscountRate").val() != "") {
            var discount = (Math.floor($("#DiscountRate").val() * 100)) / 100 / 100
            $("#GiveRice").html(($("#Amount").val() * discount).toFixed(2))
        }
    });
    $("#DiscountRate").change(function () {
        if ($("#Amount").val() != "") {
            var discount = (Math.floor($("#DiscountRate").val() * 100)) / 100 / 100
            $("#GiveRice").html(($("#Amount").val() * discount).toFixed(2))
        }
    });
});

//分页
function demo(curr) {
    var pagesize = 10;
    if (curr == undefined) {
        curr = 1;
    }
    var datajson = "{\"Token\": \"123132133\",\"Pid\": 1,\"Type\": \"\",\"Data\": { \"CompanyName\": \"\",\"Status\": \"-1\",\"RecType\": \"0\",\"page\": " + curr + ",\"row\": " + pagesize + "}}";
    $.ajax({
        url: "http://localhost:6010/Api/v1.0/CommoditySelectManage",
        type: "post",
        async: true,
        data: datajson,
        //dataType: 'json',
        contentType: 'application/json',
        success: function (res) {
            if (res.Data.list != null) {
                var rethtml = "";
                $.each(res.Data.list, function (i, o) {
                    rethtml += "<tr>";
                    rethtml += "<td style='text-align:center'>" + o.CompanyName + "</td>";
                    rethtml += "<td style='text-align:center'>" + (o.RecType == 1 ? '斑马生活缴费' : '未知') + "</td>";
                    rethtml += "<td style='text-align:center'>" + o.TradeName + "</td>";
                    rethtml += "<td style='text-align:center'>" + o.Amount + "</td>";
                    rethtml += "<td style='text-align:center'>" + o.GiveRice + "</td>";
                    rethtml += "<td style='text-align:center'>" + (o.IsRefund == 1 ? '是' : '否') + "</td>";
                    rethtml += "<td style='text-align:center'>" + (o.Status == 1 ? '可用' : '不可用') + "</td>";
                    rethtml += "<td style='text-align:center'><a href='javascript:' onclick='Edit(" + o.Id + ")'>修改</a> <a href='javascript:' onclick='Delete(" + o.Id + ")'>删除</a></td>";
                    rethtml += "</tr>";
                })
                $("#tbody").html(rethtml);
                var recordcount = res.Data.total
                laypage({
                    cont: $('#view'), //容器。值支持id名、原生dom对象，jquery对象,
                    pages: Math.ceil(recordcount / pagesize), //总页数
                    skip: true,
                    groups: 0,
                    skin: 'molv', //皮肤
                    layout: ['prev', 'next'],
                    prev: '上一页', //若不显示，设置false即可
                    next: '下一页',//若不显示，设置false即可
                    curr: curr || 1,
                    jump: function (obj, first) {
                        if (!first) {
                            demo(obj.curr);//如果不是第一次加载触发函数回调！！！
                        }
                        $("#view1").html('' + obj.curr + '/' + obj.pages + ' 页，共' + recordcount + '条记录');
                        //$('#view1').html('目前正在第' + obj.curr + '页，一共有：' + obj.pages + '页');
                    }
                });
            }
        }
    });
};

var a;
//弹出layer弹框并查询数据
function Edit(id) {
    a = layer.open({
        type: 1,
        title: '查看详情',
        closeBtn: 1,
        area: ['400px', '450px'],
        content: $('#ck_layer')
    });
    $.each($("#ck_layer").find("input[type='text']"), function (i, o) {
        $(o).val("");
    })
    $("#bukeyi").prop("checked", true);
    $("#bukeyong").prop("checked", true);
    $("#CompanyName").val("中国移动");
    $("#RecType").val("1");
    $("#Id").val("0");
    $("#GiveRice").html("0");
    if (id != "") {
        $.ajax({
            url: "http://localhost:6010/Api/v1.0/CommodityManage",
            type: "post",
            async: true,
            data: "{\"Token\": \"123132133\",\"Pid\": 1,\"Type\": \"select\",\"Data\": { \"Id\": \"" + id + "\"}}",
            //dataType: 'json',
            contentType: 'application/json',
            success: function (res) {
                if (res != null) {
                    $.each(res.Data, function (i, o) {
                        $("#" + i).val(o);
                    });
                    $("#GiveRice").html(res.Data.GiveRice);
                    if (res.Data.IsRefund == 1) {
                        $("#keyi").prop("checked", true);
                        $("#bukeyi").prop("checked", false);
                    }
                    else {
                        $("#bukeyi").prop("checked", true);
                        $("#keyi").prop("checked", false);
                    }
                    if (res.Data.Status == 1) {
                        $("#keyong").prop("checked", true);
                        $("#bukeyong").prop("checked", false);
                    }
                    else {
                        $("#bukeyong").prop("checked", true);
                        $("#keyong").prop("checked", false);
                    }
                }
            }
        });
    }

}

//关闭layer弹框
function quxiao() {
    layer.close(a);
}

//删除操作
function Delete(id)
{
    if (id == "" || id == null || id == undefined) {
        alert("操作错误");
        return;
    };
    if (confirm("确定删除该记录？")) {
        $.ajax({
            url: "http://localhost:6010/Api/v1.0/CommodityManage",
            type: "post",
            async: true,
            data: "{\"Token\": \"123132133\",\"Pid\": 1,\"Type\": \"delete\",\"Data\": { \"Id\": \"" + id + "\"}}",
            //dataType: 'json',
            contentType: 'application/json',
            success: function (res) {
                alert(res.ErrMsg);
                demo();
                //alert(JSON.stringify(res));
            }
        });
    }
}

//提交添加或修改
function queding() {
    var yanzheng = "";
    if ($("#TradeName").val() == "") {
        yanzheng += "商品名称，";
    }
    if ($("#Amount").val() == "") {
        yanzheng += "金额，";
    }
    if ($("#DiscountRate").val() == "") {
        yanzheng += "折扣率，";
    }
    if (yanzheng.length > 0) {
        var str = yanzheng.substring(0, yanzheng.length - 1);
        alert(str + "不能为空！");
    }
    else {
        if ($("#Id").val() != "0") {
            var datajson = "{\"Token\": \"123132133\",\"Pid\": 1,\"Type\": \"edit\",\"Data\": {\"Id\": \"" + $("#Id").val() + "\",\"RecType\": \"" + $("#RecType").val() + "\",\"TradeName\": \"" + $("#TradeName").val() + "\",\"CompanyName\": \"" + $("#CompanyName").val() + "\",\"Amount\": " + $("#Amount").val() + ",\"DiscountRate\": " + $("#DiscountRate").val() + ",\"GiveRice\": " + $("#GiveRice").html() + ",\"IsRefund\": " + $("#keyi").prop("checked") + ",\"Status\": " + ($("#keyong").prop("checked") == true ? 1 : 0) + "}}";
            $.ajax({
                url: "http://localhost:6010/Api/v1.0/CommodityManage",
                type: "post",
                async: true,
                data: datajson,
                //dataType: 'json',
                contentType: 'application/json',
                success: function (res) {
                    alert(res.ErrMsg);
                    layer.close(a);
                    demo();
                    //alert(JSON.stringify(res));
                }
            });
        }
        else {
            var datajson = "{\"Token\": \"123132133\",\"Pid\": 1,\"Type\": \"add\",\"Data\": {\"Id\": \"" + $("#Id").val() + "\",\"RecType\": \"" + $("#RecType").val() + "\",\"TradeName\": \"" + $("#TradeName").val() + "\",\"CompanyName\": \"" + $("#CompanyName").val() + "\",\"Amount\": " + $("#Amount").val() + ",\"DiscountRate\": " + $("#DiscountRate").val() + ",\"GiveRice\": " + $("#GiveRice").html() + ",\"IsRefund\": " + $("#keyi").prop("checked") + ",\"Status\": " + ($("#keyong").prop("checked") == true ? 1 : 0) + "}}";
            $.ajax({
                url: "http://localhost:6010/Api/v1.0/CommodityManage",
                type: "post",
                async: true,
                data: datajson,
                //dataType: 'json',
                contentType: 'application/json',
                success: function (res) {
                    alert(res.ErrMsg);
                    layer.close(a);
                    demo();
                }
            });
        }
    }

}