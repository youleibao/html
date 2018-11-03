	function getUrlParam(name) {
		var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)");
		var r = window.location.search.substr(1).match(reg);
		if(r != null) return unescape(r[2]);
		return null;
	}

	var Token = getUrlParam('token');

	//1.获取活动详情接口 2.用户持有的订单所获得的抽奖机会列表接口 3.使用抽奖机会接口
	inf(Token);
	//获取活动详情接口
	function inf(Token) {
	var datajson = JSON.stringify({
					"Token": Token,
					"Type": "",
					"V": "",
					"ReqData": {
					"ActId":38
					}
				});
		$.ajax({
			url: '/api/DrawAward/PostActivityDetail',
			type: "post",
			contentType: "application/json;charset=utf-8",
			dataType: "json",
			async: false,
			beforeSend: function(XMLHttpRequest) {
					loadinglayer = layer.load(1, {
						shade: [0.1, '#fff'] //0.1透明度的白色背景
					});
				},
			data: datajson,
			success: function(data) {
				layer.close(loadinglayer);
				$(".cj-draw-tit span").html(data.Data.HaveCount)
				if(data.Success == true&& data.Error == 0) {
					$(".cj-overtime").html(data.Data.StartDate+"--"+data.Data.EndDate); //开始结束时间
					$(".cj-guize").html(data.Data.ActDes); //活动规则
					//获奖记录
					var winlist = data.Data.Awards;
					var html = '';
					for(var i = 0; i < winlist.length; i++) {
						html += "<li><span>" + winlist[i].Cellphone + "</span>&nbsp;&nbsp;" + winlist[i].AwardName + "</li>";
					}
					$("#marquee2 ul").html(html);
					//转动数据
					var txt = '';
					for(var j = 0; j <= 3; j++) {
						txt += "<td class='lottery-unit lottery-unit-" + j + "'><img src='img/gu.png'> <span number-Level='" + data.Data.Awards[j].Level + "'>" + data.Data.Awards[j].AwardName + "</span></td>"
					}
					$(".lottery-list").html(txt);
					//流落在外的数据
					$(".lottery-unit-4").html("<img src='img/gu.png'><sapn><span number-Level='" + data.Data.Awards[4].Level + "' >" + data.Data.Awards[4].AwardName + "</span></sapn>");
					$(".lottery-unit-5").html("<img src='img/gu.png'><sapn><span number-Level='" + data.Data.Awards[5].Level + "' >" + data.Data.Awards[5].AwardName + "</span></sapn>");
					$(".lottery-unit-6").html("<img src='img/gu.png'><sapn><span number-Level='" + data.Data.Awards[6].Level + "' >" + data.Data.Awards[6].AwardName + "</span></sapn>");
					$(".lottery-unit-7").html("<img src='img/gu.png'><sapn><span number-Level='" + data.Data.Awards[7].Level + "' >" + data.Data.Awards[7].AwardName + "</span></sapn>");
					$(".lottery-unit-8").html("<img src='img/gu.png'><sapn><span number-Level='" + data.Data.Awards[8].Level + "' >" + data.Data.Awards[8].AwardName + "</span></sapn>");
					$(".lottery-unit-9").html("<img src='img/gu.png'><sapn><span number-Level='" + data.Data.Awards[9].Level + "' >" + data.Data.Awards[9].AwardName + "</span></sapn>");
					$(".lottery-unit-10").html("<img src='img/gu.png'><sapn><span number-Level='" + data.Data.Awards[10].Level + "' >" + data.Data.Awards[10].AwardName + "</span></sapn>");
					$(".lottery-unit-11").html("<img src='img/hongbao.png'><sapn><span number-Level='" + data.Data.Awards[11].Level + "' >" + data.Data.Awards[11].AwardName + "</span></sapn>");
					//
				} else {
					errInfo();
					$('.tishi_show').html(data.ErrorMsg);
				}
			},
			error: function() {

			}
		});

	}

	var place = '';
	var lottery = {
		index: -1, //当前转动到哪个位置，起点位置
		count: 12, //总共有多少个位置
		timer: 0, //setTimeout的ID，用clearTimeout清除
		speed: 80, //初始转动速度
		times: 0, //转动次数
		cycle: 42, //转动基本次数：即至少需要转动多少次再进入抽奖环节
		prize: -1, //中奖位置
		init: function(id) {
			if($("#" + id).find(".lottery-unit").length > 0) {
				$lottery = $("#" + id);
				$units = $lottery.find(".lottery-unit");
				this.obj = $lottery;
				this.count = $units.length;
				$lottery.find(".lottery-unit-" + this.index).addClass("active");
			};
		},
		roll: function() {
			var index = this.index;
			var count = this.count;
			var lottery = this.obj;
			$(lottery).find(".lottery-unit-" + index).removeClass("active");
			index += 1;
			if(index > count - 1) {
				index = 0;
			};
			$(lottery).find(".lottery-unit-" + index).addClass("active");
			this.index = index;
			return false;
		},
		stop: function(index) {
			this.prize = index;
			return false;
		}
	};

	function roll() {
		lottery.times += 1;
		lottery.roll();
		if(lottery.times > lottery.cycle + 10 && lottery.prize == lottery.index) {
			clearTimeout(lottery.timer);
			lottery.prize = -1;
			lottery.times = 0;
			click = false;

			setTimeout(function() {
                 $('body').css("overflow","hidden");
				$(".cj-dialog-wrap").show();
				$(".cj-submit-succeed").attr("class", "cj-submit-succeed succeedshow");
				$("#lottery").find("td").removeClass("active");
				$("#lottery button").attr("disabled", false);
			}, 1000)
		} else {
			if(lottery.times < lottery.cycle) {
				lottery.speed -= 10;
			} else if(lottery.times == lottery.cycle) {
              
				lottery.prize = place; //转动的位置
//              
			} else {

				if(lottery.times > lottery.cycle + 10 && ((lottery.prize == 0 && lottery.index == 7) || lottery.prize == lottery.index + 1)) {
					lottery.speed += 110;
				} else {
					lottery.speed += 20;
				}
			}
			if(lottery.speed < 40) {
				lottery.speed = 40;
			}

			if(lottery.speed <= 0) {
				$(".cj-dialog-wrap").show();
			}

			lottery.timer = setTimeout(roll, lottery.speed);

		}

		return false;
	}

	//抽奖接口
	var ting = '';

	window.onload = function() {
		lottery.init('lottery');
		$("#lottery button").click(function() {
			//button禁止时间
			var datajson = JSON.stringify({
					"Token": Token,
					"Type": "",
					"V": "",
					"ReqData": {
					"ActId":38
					}
				});
			$.ajax({
				url: '/api/DrawAward/PostDraw',
				type: "post",
				contentType: "application/json;charset=utf-8",
				dataType: "json",
				async: false,
				data: datajson,
				success: function(data) {
					if(data.Success == true && data.Error == 0) {
						cjjh();
						place = data.Data.Level-1;
						if(data.Data.AwardName == "免单") {
							$("#qian").html("<span>" + data.Data.AwardName + "</span>");
						}else if(data.Data.AwardName == "幸运奖"){
							$("#qian").html("<span>抵扣订单金额50%</span>");
						}
						else {
							$("#qian").html("<span>" + data.Data.AwardAmount + "</span><span>" + data.Data.AwardType + "</span>");
						}
						var click = false;
						if(click) {
							return false;
						} else {
							lottery.speed = 100;
							roll();
							click = true;
							return false;
						}

					} else {
						errInfo();
						$('.tishi_show').html(data.ErrorMsg);
						$("#lottery button").attr("disabled", false);
					}
				},

			});

		});
	};

	//获奖获奖记录
	var off_on = true;
	//获奖记录列表
//	inforecord(Token);
	function inforecord(Token) {
		var datajson = JSON.stringify({
					"Token": Token,
					"Type": "",
					"V": "",
					"ReqData": {
					"ActId":38,
					"OrderId":Id
					}
				});
		$.ajax({
			url: '/api/DrawAward/PostWinRecord',
			type: "post",
			contentType: "application/json;charset=utf-8",
			dataType: "json",
			async: false,
			data: datajson,
			success: function(data) {
				console.log(data)
				if(data.Success == true && data.Error == 0) {
					var hjlist = data.Data;
					if(data.Data.length == "") {
						$(".cj-rceord-list").html("<li class='wushuju'>暂无数据</li>");
					}else{
						
					$(".wushuju").css("display","none")
					var html = '';
					for(var i = 0; i < hjlist.length; i++) {
						html += '<li>';
						html += '<span>' + hjlist[i].DrawTime + '</span>';
						if(hjlist[i].AwardName == "免单") {
							html += "<p><i>" + hjlist[i].AwardName + "</i></p>";
						} else {
							html += '<p>鼓励金<i>' + hjlist[i].AwardAmount + '</i></p>';
						}
						html += '</li>';
					}
					    $(".cj-rceord-list").html(html);
					}


				} else {
					errInfo();
					$('.tishi_show').html(data.ErrorMsg);
				}
			},

		});

	}
	$(document).ready(function() {
		inforecord(Token);
	});
     //中奖记录
	$(".cj-draw-btn").click(function() {
		$(".cj-dialog-wrap2").show();
		$(".cj-record").show();
		inforecord(Token);
		$("html").css("overflow", "hidden");
		$("body").css("overflow", "hidden");
	});
	//中奖记录显示
	$(".cj-dialog-wrap2").click(function() {
		$(".cj-dialog-wrap2").hide();
		$(".cj-record").hide();
		$("html").css("overflow", "auto");
		$("body").css("overflow", "auto");
	});
	