$(".box").on({
	mouseover:function(){
		$(this).find("img:nth-child(1)").stop().animate({opacity:0},500);
		$(this).find("img:nth-child(2)").stop().animate({opacity:1},500);
	}, mouseout:function(){
		$(this).find("img:nth-child(1)").stop().animate({opacity:1},500);
		$(this).find("img:nth-child(2)").stop().animate({opacity:0},500);
	} 
});