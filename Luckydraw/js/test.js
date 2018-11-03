	! function(n) {
		var e = n.document,
			t = e.documentElement,
			i = 750,
			d = i / 100,
			o = "orientationchange" in n ? "orientationchange" : "resize",
			a = function() {
				var n = t.clientWidth || 320;
				n > 750 && (n = 750);
				t.style.fontSize = n / d + "px"
			};
		e.addEventListener && (n.addEventListener(o, a, !1), e.addEventListener("DOMContentLoaded", a, !1))
	}(window);

function getUrlParam(name) {
  var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)"); 
  var r = window.location.search.substr(1).match(reg); 
  if (r != null) return unescape(r[2]); return null; 
 }


var token =getUrlParam('token');
//var token = "N2E2YmQ0ZTZmNzU1NGFiMGIzNGE2MjY2MjdlZWZiZGE%3d.GQCJPISekWcBf2rnm8ObwEv%2bKGl0XI8AXU0q4N1pQRWIzyxXDX056Za24pXFbfNZB2dsmpg9fA%2b0zXZQcvjFWw%3d%3d.E76C1F405C90FB5C02FEBE87A127E3CD5C8ADEFF821CEEB0A8FC1647C21DA8BC2F8C83759016A6D4C831FCBD63F9B3F78F6806CA7B6141F38C6F83D969C191AE"




	//错误提示
	function errInfo() {
		$('.tishi_show').fadeIn();
		setTimeout(function() {
			$('.tishi_show').fadeOut();
		}, 2000)
	}

	

	//关闭成功弹窗
	$(".cj-dialog-close").click(function() {
		$(".cj-dialog-wrap").hide();
	});
	//禁止滑动
         $('.cj-dialog-wrap').bind("touchmove",function(e){  
                e.preventDefault();  
        });  
	//用户持有的订单所获得的抽奖机会列表接口
	cjjh();
	function cjjh() {
		var datajson = JSON.stringify({
				"Token": token,
				"Type": "",
				"V": "",
				"ReqData": {
				"ActId":38
				}
			});
		$.ajax({
			url:'/api/DrawAward/PostDrawOrder',
			type: "post",
			contentType: "application/json;charset=utf-8",
			dataType: "json",
			async: false,
			data: datajson,
			success: function(data) {
				console.log(data)
				var cont = data.Data;	
				if(data.Success == true && data.Error == 0) {
					var html = '';				
					for(var i = 0; i < cont.length; i++) {
						html += '<li>';
						html += '<span>' + cont[i].OrderId + '</span><i>' + cont[i].DrawCount + '次</i>';
						if(cont[i].IsUse == true) { //使用过
							html += '<button  lic="1" id="' + cont[i].RecordId + '" class="yishiyong" >已使用</button>';

						} else {

								html += '<button lic="2" id="' + cont[i].RecordId + '">使用</button>';
//						
						}
						html += '</li>';
					}

					$(".cj-order-list").html(html);
					if(cont.length==0){
						$(".cj-order-list").html("<li>还没有可抽奖订单哦</li>");
					}

				} else {
					errInfo();
					$('.tishi_show').html(data.ErrorMsg);
				}
			},
			error: function() {
				errInfo();
				$('.tishi_show').html("稍后重试");
			}
		});
	}

	var ID = "";

	//1.使用过，2.未使用可使用 3.正在使用 4.不可以点可使用
     var Id = '';
	$("#cj-order-list").delegate("li button", "click", function() {
		var lic = $(this).attr("lic");
		Id = $(this).attr("id");
        var datajson = JSON.stringify({
				"Token": token,
				"Type": "",
				"V": "",
				"ReqData": {
				"ActId":38,
				"RecordId":Id
				}
			});
		$.ajax({
			url: '/api/DrawAward/PostChangeDraw',
			type: "post",
			contentType: "application/json;charset=utf-8",
			dataType: "json",
			async: false,
			data: datajson,
			success: function(data) {
				if(data.Success == true&&data.Error == 0) {
					ID = data.Data.Count;
					$(".cj-draw-tit span").html(data.Data.Count);
						cjjh();

				} else {
					errInfo();
					$('.tishi_show').html(data.ErrorMsg);
				}
			},

		});
	});