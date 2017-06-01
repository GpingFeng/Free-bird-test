/*
使用jquery 插件Swiper
*/
$(function(){
  var mySwiper = $('.swiper-container').swiper({
    //Your options here:
    mode:'horizontal',
    loop: true
    //etc..
  });
})

// 标签切换
$(function(){
	$("#list #listTitle ul li").click(function(){
		$(this).find("span.bgList").show();
		$(this).siblings().find("span.bgList").hide();
		var className = $(this).attr('class');
		if (className == 'week') {
			$("#list .commentsWeek").show();
			$("#list .commentsWeek").siblings(".comments").hide();
		}else if (className == 'month') {
			$("#list .commentsMonth").show();
			$("#list .commentsMonth").siblings(".comments").hide();
		}else {
			$("#list .commentsNum").show();
			$("#list .commentsNum").siblings(".comments").hide();
		}
	})
})

// 点赞
$(function(){
	$("#list .comments .comment .commentFooter .likeImg .text").click(function(){
		$(this).parent(".likeImg").children("img").attr("src","images/icon_pl_03.png");
	});
})
