	
function getUrlParam(name) {
  var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)"); 
  var r = window.location.search.substr(1).match(reg); 
  if (r != null) return unescape(r[2]); return null; 
 }


var get =getUrlParam('Token');
	
	
	var Token = "ZDhjZDQ3MmViNDU1NDQzNDk1OTk0MTEyNjliNDY1YmM%3d.oOzmewjU7AQS3puM5YzWCFtdJgKiYwZs61OY6SAc9u5jyg0DMuzT09BEV3JE5jh9j9ULcVkPL7QnaNsavvBwsA%3d%3d.D2FE43626D596360C1878ECC3144AC54F8A4D9AE2DB0FC20000F7C2FB9FC0959C4D8159A946842C24085C8C45DF01E4954A552E05CEE9CDC586ED39F7F9CF0B9";
	
	//1.获取活动详情接口 2.用户持有的订单所获得的抽奖机会列表接口 3.使用抽奖机会接口
	function postJsonDat(token, type, Vdata, req) {
		var json = {
			"Token": token,
			"Type": type,
			"V": Vdata,
			"ReqData": req
		};
		return json;
	}

	inf(Token);
	//获取活动详情接口
	function inf(Token) {

		$.ajax({
			url: '/Api/DrawActivity/PostActivityDetail',
			type: "post",
			contentType: "application/json;charset=utf-8",
			dataType: "json",
			async: false,
			data: JSON.stringify(postJsonDat(Token, "", "", {})),
			success: function(data) {

				$(".cj-draw-tit span").html(data.Data.HaveCount)
				if(data.Success == true) {
					$(".cj-overtime").html(data.Data.ActDetail.TimeDes); //开始结束时间
					$(".cj-guize").html(data.Data.ActDetail.ActDes); //活动规则
					//获奖记录
					var winlist = data.Data.WinList;
					var html = '';
					for(var i = 0; i < winlist.length; i++) {
						html += "<li><span>" + winlist[i].Cellphone + "</span>&nbsp;&nbsp;" + winlist[i].AwardName + "</li>";
					}
					$("#marquee2 ul").html(html);
					//转动数据
					var txt = '';
					for(var j = 0; j <= 3; j++) {
						txt += "<td class='lottery-unit lottery-unit-" + j + "'><img src='img/gu.png'> <span number-Level='" + data.Data.Awards[j].Level + "'>" + data.Data.Awards[j].Name + "</span></td>"
					}
					//
					$(".lottery-list").html(txt);
					//流落在外的数据
					$(".lottery-unit-4").html("<img src='img/gu.png'><sapn><span number-Level='" + data.Data.Awards[4].Level + "' >" + data.Data.Awards[4].Name + "</span></sapn>");
					$(".lottery-unit-5").html("<img src='img/gu.png'><sapn><span number-Level='" + data.Data.Awards[5].Level + "' >" + data.Data.Awards[5].Name + "</span></sapn>");
					$(".lottery-unit-6").html("<img src='img/gu.png'><sapn><span number-Level='" + data.Data.Awards[6].Level + "' >" + data.Data.Awards[6].Name + "</span></sapn>");
					$(".lottery-unit-7").html("<img src='img/gu.png'><sapn><span number-Level='" + data.Data.Awards[7].Level + "' >" + data.Data.Awards[7].Name + "</span></sapn>");
					$(".lottery-unit-8").html("<img src='img/gu.png'><sapn><span number-Level='" + data.Data.Awards[8].Level + "' >" + data.Data.Awards[8].Name + "</span></sapn>");
					$(".lottery-unit-9").html("<img src='img/gu.png'><sapn><span number-Level='" + data.Data.Awards[9].Level + "' >" + data.Data.Awards[9].Name + "</span></sapn>");
					$(".lottery-unit-10").html("<img src='img/gu.png'><sapn><span number-Level='" + data.Data.Awards[10].Level + "' >" + data.Data.Awards[10].Name + "</span></sapn>");
					$(".lottery-unit-11").html("<img src='img/hongbao.png'><sapn><span number-Level='" + data.Data.Awards[11].Level + "' >" + data.Data.Awards[11].Name + "</span></sapn>");
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
		count: 9, //总共有多少个位置
		timer: 0, //setTimeout的ID，用clearTimeout清除
		speed: 80, //初始转动速度
		times: 0, //转动次数
		cycle:80, //转动基本次数：即至少需要转动多少次再进入抽奖环节
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
				$(".cj-dialog-wrap").show();
				$(".cj-submit-succeed").attr("class", "cj-submit-succeed succeedshow");
			 
			}, 1000)
		} else {
			if(lottery.times < lottery.cycle) {
				lottery.speed -= 10;
			} else if(lottery.times == lottery.cycle) {

				lottery.prize = place; //转动的位置

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
	var click = false;
	window.onload = function() {
		lottery.init('lottery');
		$("#lottery button").click(function() {
			//button禁止时间
			$("#lottery button").attr("disabled", true);
			setTimeout(function() {
				$("#lottery button").attr("disabled", false);
			}, 8000);
			$.ajax({
				url: '/Api/DrawActivity/PostDoDraw',
				type: "post",
				contentType: "application/json;charset=utf-8",
				dataType: "json",
				async: false,
				data: JSON.stringify(postJsonData(Token, "", "", {})),
				success: function(data) {
					if(data.Success == true) {
						ting = data.Data.LeaveAccount;
						if(ting == "0") {
							cjjh();
						}
							$(".cj-draw-tit span").html(data.Data.LeaveAccount);
							place = data.Data.Level;
							if(data.Data.Award == "免单") {
								$("#qian").html("<span>" + data.Data.Award + "</span>");
							}
							console.log(data.Data.Award);
							$("#qian").html("<span>" + data.Data.Award + "</span>谷粒金");
							
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
					}
				},

			});

		});
	};
	

	//获奖获奖记录

	var page = 1;

	var off_on = true;

	function infore(token, type, Vdata, size, inde) {
		var json = {
			"Token": token,
			"Type": type,
			"V": Vdata,
			"ReqData": {
				"PageSize": size,
				"PageIndex": inde
			}
		};
		return json;
	}

 

	//获奖记录列表
	inforecord(Token);
	function inforecord(Token) {
		$.ajax({
			url: '/Api/DrawActivity/PostUserWinList',
			type: "post",
			contentType: "application/json;charset=utf-8",
			dataType: "json",
			async: false,
			data: JSON.stringify(infore(Token, "", "", 12, page)),
			success: function(data) {
				if(data.Success == true) {
					var hjlist = data.Data.WinList;
					if(page == 1) {
						$(".cj-rceord-list").html("<li class='wushuju'>暂无数据</li>");
					}
					var html = '';
					for(var i = 0; i < hjlist.length; i++) {
						html += '<li>';
						html += '<span>' + hjlist[i].Date + '</span>';
						if(hjlist[i].AwardName == "免单") {
							html += "<p><i>" + hjlist[i].AwardName + "</i></p>";
						}
						html += '<p>谷粒金<i>' + hjlist[i].AwardName + '</i></p>';
						html += '</li>';
					}
					if(hjlist.length > 0) {
						if(page == 1) {
							$(".cj-rceord-list").html(html);
						} else {
							$(".cj-rceord-list").append(html);
						}
					} else {
						off_on = false;
					}

				} else {
					errInfo();
					$('.tishi_show').html(data.ErrorMsg);
				}
			},

		});

	}

	//滚动加载方法1
	$('#tixian-list').scroll(function() {
		//当时滚动条离底部60px时开始加载下一页的内容
		if(($(this)[0].scrollTop + $(this).height() + 30) >= $(this)[0].scrollHeight) {
			//这里用 [ off_on ] 来控制是否加载 （这样就解决了 当上页的条件满足时，一下子加载多次的问题啦）
			if(off_on) {
				page++;
				inforecord(Token); 
			}
		}
	});
	$(document).ready(function() {
		inforecord(Token);
	});
	
	//中奖记录显示
	$(".cj-dialog-wrap2").click(function() {
		$(".cj-dialog-wrap2").hide();
		$(".cj-record").hide();
	});
	//中奖记录
	$(".cj-draw-btn").click(function() {
		$(".cj-dialog-wrap2").show();
		$(".cj-record").show();
		inforecord(Token);
	});
	

	

	
