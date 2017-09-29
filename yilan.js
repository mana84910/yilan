/*漢堡*/
$(".menu_icon").click(function(){
	$(this).toggleClass("active");
	$(".nav_menu").toggleClass("nav_menu_active");
	$(".menu_list").toggleClass("menu_list_active");
});

/*幻燈片*/
$(".sliders1").vegas({
	slide: 2,
	preload: true,
	timer: false,
	slides: [
    { src: "images/slider_1.jpg" },
    { src: "images/slider_2.jpg" },
    { src: "images/slider_3.jpg" },
    { src: "images/slider_4.jpg" },
    { src: "images/slider_5.jpg" }
	],
	animation: 'kenburns'
});
$(".sliders2").vegas({
	slide: 2,
	preload: true,
	timer: false,
    slides: [
        { src: "images/slider_1.jpg" },
	    { src: "images/slider_2.jpg" },
	    { src: "images/slider_3.jpg" },
	    { src: "images/slider_4.jpg" },
    	{ src: "images/slider_5.jpg" }
    ],
	animation: 'kenburns'
});
/*totop*/
$(function(){
	$(window).scroll(function(even){
		var st = $(this).scrollTop();
		if(st >= 180){
			$(".totop a").css("display", "block");
		}else{
			$(".totop a").css("display", "none");
		}
	});
});
$(".totop").click(function(){
	$("html, body").animate({ scrollTop: 0 }, 600);
	return false;
});
