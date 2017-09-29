var new_place = [
	{
		src : 'images/new_place_1.png',
		name : '阿宗芋冰城',
		add : '地址:宜蘭縣頭城鎮青雲路三段267號',
		time : '營業時間: 09:00–21:00',
		tel : '電話: 03-977-1362',
		price : '售價: 40~90元',
		text : '建議:<br />可先去頭城老街逛，再過去店裡吃。'
	}, {
		src : 'images/new_place_2.png',
		name : '樂山溫泉拉麵',
		add : '地址:宜蘭縣礁溪鄉礁溪路五段108巷1號',
		time : '營業時間: 11:00–14:00, 17:00–21:00',
		tel : '電話: 03-988-8637',
		price : '售價: 110~420元',
		text : '建議:<br />可先去湯圍溝溫泉公園散步，再過去店裡吃，泡腳多收服務費10元。'
	}, {
		src : 'images/new_place_3.png',
		name : '員山機堡',
		add : '地址:宜蘭縣員山鄉金山東路398號',
		time : '營業時間: 9:00–17:30',
		tel : '電話: 03-922-7181',
		price : '門票: 免費參觀',
		text : '建議:<br />看日據時代的飛機和歷史，累了可以在原點咖啡喝一杯。'
	}, {
		src : 'images/new_place_4.png',
		name : '虎牌米粉觀光工廠',
		add : '地址:宜蘭縣五結鄉利興三路5號',
		time : '營業時間: 9:00–16:30',
		tel : '電話: 03-990-7718',
		price : '門票: 大人200元，3歲以下免費',
		text : '建議:<br />可安排上午去參觀，中午直接在裡面吃，門票的100元可折抵商品。'
	}
];

$(".new_place_img, .new_place_title a").click(function(){
	var self = $(this).parent().index();
	var html = '';
	html += '<div class="new_place_box"><div class="flex_box"><div class="box1"><img src="' + new_place[self].src+ '" alt=""></div><div class="box2"><p>' + new_place[self].name + '</p><p>' + new_place[self].add + '<br />' + new_place[self].time + '<br />' + new_place[self].tel + '<br />' + new_place[self].price + '</p><p>' + new_place[self].text + '</p></div><div class="box_icon"><img src="images/close.png" alt=""></div></div></div>';
	$('header').after(html);
	$(".new_place_box").css("display", "block");
	$(".box_icon").click(function(){
		$(this).parent().parent().remove();
	});
});

