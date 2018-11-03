var token = '';
var QrNum = '';
var StatusUrl = '';
//截取url后面拼接的参数
function getQueryString(name) {
	var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)", "i");
	var r = window.location.search.substr(1).match(reg);
	if(r != null) return decodeURI(r[2]);
	return null;

}
 
//显示隐藏
function errInfo() {
	$('.tishi_show').fadeIn();
	setTimeout(function() {
		$('.tishi_show').fadeOut();
	}, 2000)
}
$(function(){
	token = getQueryString("key");
	 QrNum = getQueryString("qr");
	load();
	//支付的点击事件
	$(".right").on("click", function() {
		pandaun();	

	})
		
		
//点击取消的事件
	$(".call").on("click", function() {
		$(".tanchuang_mengban").hide();
	})
	//点击确定的事件
	$(".confirm").on("click", function() {
		if($("#pass").val() == '') {
			$(".tishi_show").html('密码不能为空!');
			errInfo();
			return;
		} else {
			mima();

		}
       

	})

})
//获取用户信息
function load() {
				 token = getQueryString("key");
//	 token = "MTU3MGNiNGMzNzIyNDc3OWIzNDliYTc3YmEzY2M0YTM%3d.V%2fBect%2fLmmqTU1fFnJ8Q4nGuZu1y%2f6ItlIqiAGGjwvZ3HFP1tRrzVP5Kb4hsEF0tVR3i9PvIxMK%2bsOU7h2DmyHjrrD1JbKR3suIlmkV2T%2bI%3d.9238BBD140C4D96598D165BE4ACEE20E5AF99A28F48CED452DED0A4CD47F2CE3BCD84B7A0AA9BBEBA16D6665412E8EB1790BF50DD0A7D2F41A80795D1F67DBFF"
				QrNum = getQueryString("qr");
//	 QrNum = '4ffe2752-24aa-4152-beda-12214ceae245';
	var datajsonM = JSON.stringify({
		"Token": token,
		"version": "string",
		"reqTime": 0,
		"reqData": QrNum
	});
	$.ajax({
		type: "post",
		url:"/api/v1.0/Pay/QrPay",
		data: datajsonM,
		dataType: "json",
		contentType: 'application/json',
		success: function(data) {
			if(data.result == true) {
				if(data.result_Data.isFirst == false) {
					$("#pay_Grain").show();
				}
				$("#pay_Grain span").html(data.result_Data.grain);
				$("#pay_balance span").html(data.result_Data.balance);
				$(".section_mingzi").html('<img src="img/icon-dianpu-2.png" />' + data.result_Data.storeName);
				$(".ret").html(data.result_Data.rate);
				$(".userid").html(data.result_Data.userId);
				$(".storeid").html(data.result_Data.storeId);
				if(data.result_Data.grain > 0) {
					$("#Grain").attr('checked', true);
					OnlyCheck(0);
				}

				if(data.result_Data.balance > 0) {
					$("#Balance").attr('checked', true);
					OnlyCheck(1);
				}

				return;
			}
		},
		error: function(err) {
			console.log(err)
		},
		async: false
	});

}
//按钮的点击事件
function OnlyCheck(t) {

	reckon();
	if($("#Grain").is(':checked') && t == 1) {
		$("#Grain").attr('checked', false);
		reckon();
		return;
	}

	if($("#Balance").is(':checked') && t == 0) {
		$("#Balance").attr('checked', false);
		reckon();
		return;
	}
}
//判断支付方式
function pandaun() {
	amount = "";
	balance = "";
	grain = "";

	$("#pass").val('')
	if($("#div").html() < 0.01) {
		$(".tishi_show").html('请输入正确金额!');
		errInfo();
		return;
	}

var Balance = $("#Balance").is(':checked') ? 1 : 0;
var Grain = $("#Grain").is(':checked') ? 1 : 0;
	 if(Balance == 1){
		if( parseFloat($("#pay_balance span").html()) >= parseFloat($("#div").html())){
			amount = $("#div").html();
			balance = $("#pay_balance span").html();
			grain = 0;
			$(".tanchuang_mengban").show();
			return;
		}

	}
	 if(Balance == 0&&Grain == 0){
		    amount = $("#div").html();
			balance = 0;
			grain = 0;
			pay()
			return;
	}
	if(Grain == 1){
		    amount = $("#div").html();
			balance = 0;
			var guli = ($("#div").html() * $(".ret").html() / 100).toFixed(2)
				if(guli <= $("#pay_Grain span").html()) {
					grain = guli;
				} else {
					grain = $("#pay_Grain span").html()
				}
			
			pay();
			return;
	}
}
//判断是否微信打开
function is_weixn() {
	var ua = navigator.userAgent.toLowerCase();
	if(ua.match(/MicroMessenger/i) == "micromessenger") {
		return true;
	} else {
		return false;
	}
}


function reckon() {

	var rice = $(".acquire");
	var PayMoney = $("#div").html();
	var MyGrain = $("#pay_Grain span").html();
	var MyBalance = $("#pay_balance span").html();
	var Grain = $("#Grain").is(':checked') ? 1 : 0;
	var rate = $(".ret").html();
	var GiveRice = (Math.round(PayMoney * rate) / 100).toFixed(2)
   
	if((MyGrain * 1) < 0.01) {
		$("#Grain").attr('checked', false);
	}

	if((MyBalance * 1) < 0.01) {
		$("#Balance").attr('checked', false);
	}

	if(GiveRice == "NaN") {
		return;
	}

	if(Grain == 1) {

		if(GiveRice * 1 <= MyGrain * 1) {
			rice.text("您使用米券抵扣" + GiveRice + "元.");
		} else {
			rice.text("您使用米券抵扣" + MyGrain + "元.");
		}

	} else {
		if($("#pay_Grain").css("display") == "none"){
	      	if(GiveRice < 200){
	      		var jine = GiveRice
	      	}else{
	      		var jine = 200.00
	      	}
	      	rice.text("您可以获得" + (jine * 1).toFixed(2) + "米");
	      	return;
        }
		rice.text("您可以获得" + (GiveRice * 1).toFixed(2) + "米");
	}
  
}
//提交
function pay() {
//	 token = "MTU3MGNiNGMzNzIyNDc3OWIzNDliYTc3YmEzY2M0YTM%3d.V%2fBect%2fLmmqTU1fFnJ8Q4nGuZu1y%2f6ItlIqiAGGjwvZ3HFP1tRrzVP5Kb4hsEF0tVR3i9PvIxMK%2bsOU7h2DmyHjrrD1JbKR3suIlmkV2T%2bI%3d.9238BBD140C4D96598D165BE4ACEE20E5AF99A28F48CED452DED0A4CD47F2CE3BCD84B7A0AA9BBEBA16D6665412E8EB1790BF50DD0A7D2F41A80795D1F67DBFF"
	 token = getQueryString("key");
   QrNum = getQueryString("qr");
//	 QrNum = '4ffe2752-24aa-4152-beda-12214ceae245';
	if(is_weixn()) {
		var datajsonM = JSON.stringify({
			"token": token,
			"version": "",
			"reqTime": 0,
			"reqData": {
				"userId": $(".userid").html(),
				"shopId": QrNum,
				"orderType": 1002001,
				"amount": amount,
				"balance": balance,
				"grain": grain
			}
		});
	} else {
		var datajsonM = JSON.stringify({
			"token": token,
			"version": "",
			"reqTime": 0,
			"reqData": {
				"userId": $(".userid").html(),
				"shopId": QrNum,
				"orderType": 1003001,
				"amount": amount,
				"balance": balance,
				"grain": grain
			}
		});
	}
   
    var u = navigator.userAgent;
    StatusUrl = URL+"/home/payz/Status.html?PayId=";
	$.ajax({
		type: "post",
		url:"/api/v1.0/Pay/QrSubmit",
		data: datajsonM,
		dataType: "json",
		beforeSend: function(XMLHttpRequest) {
			loadinglayer = layer.load(1, {
				shade: [0.1, '#fff'] //0.1透明度的白色背景
			});
		},
		contentType: 'application/json',
		success: function(data) {
			layer.close(loadinglayer);
			if(data.result == true && data.result_Code == 0) {
				var payId = data.result_Data.payId;
				//window.location.href = 'Status.html?payId='+payId;
				if(is_weixn()) {
					window.location.href = data.result_Data.payUrl;
					return;
				}

				if(u.indexOf('iPhone') > -1) {
					SendPay(StatusUrl + data.result_Data.payId);
					window.location.href = data.result_Data.payUrl;
					return;
				}

				if(u.indexOf('Android') > -1 || u.indexOf('Linux') > -1) {
					window.zf.SendPay(StatusUrl + data.result_Data.payId);
					window.location.href = data.result_Data.payUrl;
					return;
				}
			}
		},
		error: function(err) {
			alert("网络链接超时~！")
		},
		async: true
	});
}
//密码接口
		function mima() {
//		     token = "MTU3MGNiNGMzNzIyNDc3OWIzNDliYTc3YmEzY2M0YTM%3d.V%2fBect%2fLmmqTU1fFnJ8Q4nGuZu1y%2f6ItlIqiAGGjwvZ3HFP1tRrzVP5Kb4hsEF0tVR3i9PvIxMK%2bsOU7h2DmyHjrrD1JbKR3suIlmkV2T%2bI%3d.9238BBD140C4D96598D165BE4ACEE20E5AF99A28F48CED452DED0A4CD47F2CE3BCD84B7A0AA9BBEBA16D6665412E8EB1790BF50DD0A7D2F41A80795D1F67DBFF";
			 token = getQueryString("key");
			var datajsonM = JSON.stringify({
				"token": token,
				"version": "",
				"reqTime": 0,
				"reqData": {
					"userId": 0,
					"payWord": $("#pass").val()
				}
			});
			$.ajax({
				url:"/api/v1.0/Member/CheckPassword",
				contentType: "application/json; charset=utf-8",
				data: datajsonM,
				type: "post",
				dataType: "json",
				success: function(data) {
					
					if(data.result == true&&data.result_Code == 0){
						pay();
						return;
					}
					else {
						$(".tishi_show").html(data.result_Message);
						errInfo();
						return;

					}

				},
				error: function(error) {
					alert("网络链接超时~！");
					return;
				}
			});

		}
