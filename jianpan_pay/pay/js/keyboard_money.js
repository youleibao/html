$(document).ready(function() {
    var ipt = $("#PayMoeny");
	var rice = $("#Rice");
    var isPoint = false;
    var val = "";
    var limitedMoney = 999999;
    var keyboard = $(".num1,.num2,.num3,.num4,.num5,.num6,.num7,.num8,.num9,.num0,.del,.point");
    function text(value) {
        if (value == "") {
            ipt.text("￥0.00");
            ipt.addClass('inputed');
            $("#IsPay div").css("background", "#c3c3c3");
			rice.text("您可以获得0米粒");
        } else {
            var iptInt = parseInt(value);
            $("#IsPay div").css("background", "#41D60F");
            if (iptInt < limitedMoney || value == limitedMoney) {
                if (String(iptInt).length < value.length - 3) {
                    val = val.substr(0, val.length - 1);
                    value = value.substr(0, value.length - 1)
                }
				var rate = $("#StoreRate").val();

                ipt.text(value);
				var MyGrain = $("#pay_Grain span").html();
				var Balance = $("#Balance").is(':checked') ? 1 : 0;
				var Grain = $("#Grain").is(':checked') ? 1 : 0;
				var GiveRice = (Math.floor(value*rate) / 100).toFixed(2);

				if ((GiveRice*1) < 0.01) {
					$("#Grain").attr('checked', false);
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
				
                ipt.removeClass('inputed');
            } else {
                if (iptInt > limitedMoney || iptInt == limitedMoney) {
                    val = val.substr(0, val.length - 1)
                }
            }
            $(".input_pay").attr("disabled", false)
        }
        $(".keyboard td span").css("background-color", "#ffffff");
        $(".del,.point").css("background-color", "#eeeeee");
    }
    keyboard.bind("touchstart",
    function() {
        $(this).find('span:eq(0)').css("background-color", "#BFC3C8")
    });
    $(".num1").bind("touchend",
    function() {
        if (val.substr(0, 1) == "0" && val.length == 1) {
            val = ""
        }
        val = val + "1";
        text(val)
    });
    $(".num2").bind("touchend",
    function() {
        if (val.substr(0, 1) == "0" && val.length == 1) {
            val = ""
        }
        val = val + "2";
        text(val)
    });
    $(".num3").bind("touchend",
    function() {
        if (val.substr(0, 1) == "0" && val.length == 1) {
            val = ""
        }
        val = val + "3";
        text(val)
    });
    $(".num4").bind("touchend",
    function() {
        if (val.substr(0, 1) == "0" && val.length == 1) {
            val = ""
        }
        val = val + "4";
        text(val)
    });
    $(".num5").bind("touchend",
    function() {
        if (val.substr(0, 1) == "0" && val.length == 1) {
            val = ""
        }
        val = val + "5";
        text(val)
    });
    $(".num6").bind("touchend",
    function() {
        if (val.substr(0, 1) == "0" && val.length == 1) {
            val = ""
        }
        val = val + "6";
        text(val)
    });
    $(".num7").bind("touchend",
    function() {
        if (val.substr(0, 1) == "0" && val.length == 1) {
            val = ""
        }
        val = val + "7";
        text(val)
    });
    $(".num8").bind("touchend",
    function() {
        if (val.substr(0, 1) == "0" && val.length == 1) {
            val = ""
        }
        val = val + "8";
        text(val)
    });
    $(".num9").bind("touchend",
    function() {
        if (val.substr(0, 1) == "0" && val.length == 1) {
            val = ""
        }
        val = val + "9";
        text(val)
    });
    $(".num0").bind("touchend",
    function() {
        if (val.substr(0, 1) == "0" && val.length == 1) {
            return
        }
        val = val + "0";
        text(val)
    });
    $(".point").bind("touchend",
    function() {
        if (val != "" && isPoint == false) {
            val = val + ".";
            isPoint = true;
            text(val)
        }
        text(val)
    });
    $(".del").bind("touchend",
    function() {
        if (val.substr(val.length - 1, 1) == ".") {
            isPoint = false;
            val = val.substring(0, val.length - 1);
            text(val)
        } else {
            val = val.substring(0, val.length - 1);
            text(val)
        }
    });
    $(".input_pay").bind("touchstart",function() {
        if($(".input_pay").attr("disabled") == undefined) {
            $(this).addClass('touchstart');
        }
    });
    $(".input_pay").bind("touchend",function() {
        if($(".input_pay").attr("disabled") == undefined) {
            $(this).removeClass('touchstart');
        }
    });
    $(".remarks td").bind("touchstart",function() {
        $(this).css("background-color","#f6f6f6");
    });
    $(".remarks td").bind("touchend",function() {
        $(this).css("background-color","#fff");
    });
    $(".remarks td label").width(document.body.clientWidth - 25);
});