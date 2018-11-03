
var successPic = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEQAAAA/CAYAAABZ9m6wAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyFpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNi1jMTQyIDc5LjE2MDkyNCwgMjAxNy8wNy8xMy0wMTowNjozOSAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIChXaW5kb3dzKSIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDpGRTk2QjNEOTc5MUMxMUU4QjM3RUJFRkQ0NDE3M0U5MyIgeG1wTU06RG9jdW1lbnRJRD0ieG1wLmRpZDpGRTk2QjNEQTc5MUMxMUU4QjM3RUJFRkQ0NDE3M0U5MyI+IDx4bXBNTTpEZXJpdmVkRnJvbSBzdFJlZjppbnN0YW5jZUlEPSJ4bXAuaWlkOkZFOTZCM0Q3NzkxQzExRThCMzdFQkVGRDQ0MTczRTkzIiBzdFJlZjpkb2N1bWVudElEPSJ4bXAuZGlkOkZFOTZCM0Q4NzkxQzExRThCMzdFQkVGRDQ0MTczRTkzIi8+IDwvcmRmOkRlc2NyaXB0aW9uPiA8L3JkZjpSREY+IDwveDp4bXBtZXRhPiA8P3hwYWNrZXQgZW5kPSJyIj8+hKLCTQAAB6BJREFUeNrcXAeMFVUU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";

var failPic = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEEAAAA/CAYAAAC/36X0AAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyFpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNi1jMTQyIDc5LjE2MDkyNCwgMjAxNy8wNy8xMy0wMTowNjozOSAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIChXaW5kb3dzKSIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDpGN0U1RURCRjc5MjUxMUU4QjAzM0M1Q0FDRjgzRDU0MCIgeG1wTU06RG9jdW1lbnRJRD0ieG1wLmRpZDpGN0U1RURDMDc5MjUxMUU4QjAzM0M1Q0FDRjgzRDU0MCI+IDx4bXBNTTpEZXJpdmVkRnJvbSBzdFJlZjppbnN0YW5jZUlEPSJ4bXAuaWlkOkY3RTVFREJENzkyNTExRThCMDMzQzVDQUNGODNENTQwIiBzdFJlZjpkb2N1bWVudElEPSJ4bXAuZGlkOkY3RTVFREJFNzkyNTExRThCMDMzQzVDQUNGODNENTQwIi8+IDwvcmRmOkRlc2NyaXB0aW9uPiA8L3JkZjpSREY+IDwveDp4bXBtZXRhPiA8P3hwYWNrZXQgZW5kPSJyIj8+Z3GGoAAACD1JREFUeNrUW2lsFVUU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";

var storePic = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACUAAAAhCAYAAABeD2IVAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyFpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNi1jMTQyIDc5LjE2MDkyNCwgMjAxNy8wNy8xMy0wMTowNjozOSAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIChXaW5kb3dzKSIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDpBRjhBNjBDOTc4RTkxMUU4ODJBNkZDNjAzQkJGNEIwMCIgeG1wTU06RG9jdW1lbnRJRD0ieG1wLmRpZDpBRjhBNjBDQTc4RTkxMUU4ODJBNkZDNjAzQkJGNEIwMCI+IDx4bXBNTTpEZXJpdmVkRnJvbSBzdFJlZjppbnN0YW5jZUlEPSJ4bXAuaWlkOkFGOEE2MEM3NzhFOTExRTg4MkE2RkM2MDNCQkY0QjAwIiBzdFJlZjpkb2N1bWVudElEPSJ4bXAuZGlkOkFGOEE2MEM4NzhFOTExRTg4MkE2RkM2MDNCQkY0QjAwIi8+IDwvcmRmOkRlc2NyaXB0aW9uPiA8L3JkZjpSREY+IDwveDp4bXBtZXRhPiA8P3hwYWNrZXQgZW5kPSJyIj8+Jb/F+QAAAuVJREFUeNrsmFtIVUEUhvfZVhb5lllEBvUgQpaZFl3oIXsSslIkNKKiFOylLMooDMoKu2BBD10eootdngwKikKCEiooS4hIoR7ELOwilRRR0bF/wb9hGGefs4M9+7y44GPWmT1z9u+amTXrGCt7PtMxmAv2gPkgDcSd8CwG/oJ20Hy94OWwAaN8Jl4GVY5dWwGyQd0w1YZIzQIv6B8C78AYRsxlf5oSUfGH/uN5nGIqOWYaovU2WaTOsb0HGixGag7IBSdBmb53VJOH8+hvsbx8m9iuKu/MW+gnSvyz9K+AV5ZFPQK36Z/xE7ULTKS/3YnGatjORrTWmfZUI9sL4CP98WAsj3BY6UBskN/5nid9LTgOLqmn7xTYDH4zWoOcfINHN2ybCzrpZ4JeMA7U4yQek+WbQkFiRxVBYhmWls1LGQ5EfEZzwHs/lnGCLN8adkg+2qtNXs0lDDuj96sdENYEMdVwZ4DTImoxnz0xfMEAicIkJ14FFS4jIfbdSa3d8iIponr4ISvFojLZxl0mSofLmBVgP5wArWBbgBfJSb4GOgKMX8m2S/bUA268ycywRQkmSooopV8O0sHhBOPbeb+JFYIvzIMmq2d7xMvopcpEuYhztAmTmNhk3Guwn/1NYLchdeTwj82lsIPsPw826mpw8loYlG6cxBa1dKni7vfsPksYOabL2feTwruY03ay/5ecbEY8HxSzv4/VwAAjtJ79kslvgj8sAqayPxui+vR6qojXTYkhvK28E3u1qmIHWKSNFfEX+eyH0l8LtipL6tlD6YegZ35FnlfrlLAY6+Zee5Ng7+RTWAaX9y6F+dkSUED/KcQ8TlZ5RmqmGt01jFvK62aZZT1Sdjdgk1cGEbWB+6rasqhiXsSNQUR9YNtvWdRXtj1BRKXcRkSNiIpC1GjtdNiyT9r7Ev5s9+rxPDCd/weIhShmiCxQPicV1caLt4LYtrYgy3cH7IsgeX5jfdWsP/gnwAB1B6utzwEnzwAAAABJRU5ErkJggg==";

var StatusUrl = "http://oshop-skip.gangumall.cn/home/pay/Status.html?PayId=";
var u = navigator.userAgent;
//var isAndroid = u.indexOf('Android') > -1 || u.indexOf('Adr') > -1; //android终端
//var isiOS = !!u.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/); //ios终端

function getUrlParam(name) {
    var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)");
    var r = window.location.search.substr(1).match(reg);
    if (r != null) return r[2];
    return null;
}

function OnlyCheck(t) {
	
	reckon();
    if ($("#Grain").is(':checked') && t == 1) {
        $("#Grain").attr('checked', false);
		reckon();
        return;
    }

    if ($("#Balance").is(':checked') && t == 0) {
        $("#Balance").attr('checked', false);
		reckon();
        return;
    }
}

function cursorDisappear()
{
	$('#PayMoeny').text('');
	count++;
	if(count>500)
		return 0;
	setTimeout(cursorAppear(), 1000);
}

function cursorAppear()
{
	$('#PayMoeny').text('|');
	count++;
	if(count>500)
		return 0;
	setTimeout(cursorDisappear(),1000);
}


function reckon(){

	var rice = $("#Rice");
	var PayMoney = $("#PayMoeny").html();
	var MyGrain = $("#pay_Grain span").html();
	var MyBalance = $("#pay_balance span").html();
	var Grain = $("#Grain").is(':checked') ? 1 : 0;
	var rate = $("#StoreRate").val();
	var GiveRice = (Math.floor(PayMoney*rate) / 100).toFixed(2)
		
	if((MyGrain*1) < 0.01){
        $("#Grain").attr('checked', false);
	}
		
    if ((MyBalance*1) < 0.01) {
        $("#Balance").attr('checked', false);
    }
	
	if(GiveRice == "NaN"){
		return;
	}
			
	if(Grain == 1){
					
		if(GiveRice*1 <= MyGrain*1){
			rice.text("您使用谷粒抵扣"+GiveRice+"元.");
		}else{
			rice.text("您使用谷粒抵扣"+MyGrain+"元.");
		}
					
	}else{
		rice.text("您可以获得"+(GiveRice*1).toFixed(2)+"米粒");
	}

	
}


//验证密码
function CheckPass(){
	
	var Token = getUrlParam("key");
	
	var PayMoney = $("#PayMoeny").html();

    if (PayMoney == "" || PayMoney == "￥请输入金额" || PayMoney == "￥0.00") {
        return;
    }

    if (PayMoney < 0.01) {
        $.alert("请输入正确金额");
        return;
    }
	
	var Balance = $("#Balance").is(':checked') ? 1 : 0;
	
	var MyBalance = $("#pay_balance span").html();
	
	if(Balance == 0 || parseInt(PayMoney) > parseInt(MyBalance)){
		Pay();
		return;
	}
	
    $.prompt({
        title: "请输入支付密码",
        onOK: function(text) {
				
			var Obj = { UserId : 0, PayWord : text};

			$.ajax({
				url: "/api/v1.0/Member/CheckPassword",
				contentType: "application/json; charset=utf-8",
				data: Request(Token, Obj),
				type: "post",
				dataType: "json",
				success: function (data) {

					if (data.result && data.result_Code == 0) {
						Pay();
						return;
					}
					$.alert(data.result_Message);
					return;
				},
				error: function (error) {
					$.alert("网络链接超时~！");
					return;
				}
			});
			
		},
		onCancel:function(){
			return;
		},
		
	});
	
}

function is_weixn(){
    var ua = navigator.userAgent.toLowerCase();
    if(ua.match(/MicroMessenger/i)=="micromessenger") {
        return true;
    } else {
        return false;
    }
}

//统一请求
function Request(Token,Obj) {

    var timesmp = 0;//(new Date()).valueOf();

    var postData = JSON.stringify({ token: Token, version: "1.0", reqTime: timesmp, reqData: Obj });

    return postData;
}

//获取信息
function GetInfo() {

    var Token = getUrlParam("key");
    var QrNum = getUrlParam("qr");
    var timesmp = 0;//(new Date()).valueOf();

    $.ajax({
        url: "/api/v1.0/Pay/QrPay",
        contentType: "application/json; charset=utf-8",
        data: Request(Token, QrNum),
        type: "post",
        dataType: "json",
        success: function (data) {

            if (data.result && data.result_Code == 0) {
                Dt = data.result_Data;
                $("#pay_grain span").html(Dt.grain);
                $("#pay_balance span").html(Dt.balance);
                $("#StoreRate").val(Dt.rate);
                $("#storename").html("<span></span> &nbsp;" + Dt.storeName);
				
				if(Dt.grain > 0){
					$("#Grain").attr('checked', true);
					OnlyCheck(0);
				}
				
				if(Dt.balance > 0){
					$("#Balance").attr('checked', true);
					OnlyCheck(1);
				}
				
                return;
            }
            $.alert("扫码失败，请重试~！");
            return;
        },
        error: function (error) {
            $.alert("网络链接超时~！");
            return;
        }
    });
}





//支付
function Pay() {

    var Token = getUrlParam("key");

    var QrNum = getUrlParam("qr");
	
	if(QrNum == "" || QrNum == null){
		
		$.alert("请重新刷码支付");
		return;		
	}
	
		var PayMoney = $("#PayMoeny").html();

    if (PayMoney == "" || PayMoney == "￥请输入金额" || PayMoney == "￥0.00") {
        return;
    }

    if (PayMoney < 0.01) {
        $.alert("请输入正确金额");
        return;
    }
	
    var Balance = $("#Balance").is(':checked') ? 1 : 0;

    var Grain = $("#Grain").is(':checked') ? 1 : 0;

	if(is_weixn()){
		var Obj = { UserId: 0, ShopId: QrNum, OrderType : 1002001, Amount: PayMoney, Balance: Balance, Grain: Grain };
	}else{
		var Obj = { UserId: 0, ShopId: QrNum, OrderType : 1003001, Amount: PayMoney, Balance: Balance, Grain: Grain };
	}

    var De = Request(Token, Obj);

    $.ajax({
        url: "/api/v1.0/Pay/QrSubmit",
        contentType: "application/json; charset=utf-8",
        data: Request(Token, Obj),
        type: "post",
        dataType: "json",
        success: function (data) {

            if (data.result && data.result_Code == 0) {
				
				if(is_weixn()){
					window.location.href = data.result_Data.payUrl;
                    return;
				}
				
				if (u.indexOf('iPhone') > -1) {
					SendPay(StatusUrl+data.result_Data.payId);
					window.location.href = data.result_Data.payUrl;
					return;
				}
				
				if (u.indexOf('Android') > -1 || u.indexOf('Linux') > -1) {
					window.zf.SendPay(StatusUrl+data.result_Data.payId);
					window.location.href = data.result_Data.payUrl;
					return;
				}
            }
            $.alert(data.result_Message);
            return;
        },
        error: function (error) {
            $.alert("网络链接超时~！");
            return;
        }
    });


}

