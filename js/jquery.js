$(function(){
    $('button').on('click',function(){
        $('.menu').slideToggle();
    });

	$('a[href^="#"]').on('click',function(){
		var speed = 500;
		var href= $(this).attr("href");
		var target = $(href == "#" || href == "" ? 'html' : href);
		var position = target.offset().top;
		$("html, body").animate({scrollTop:position}, speed, "swing");
		return false;
	});
	
	$('.slide-items').slick({
		autoplay: true, // スライド自動再生
		slidesToShow: 1, // 表示させるスライドの枚数
		responsive: [{ // レスポンシブ設定
		  breakpoint: 768, // ブラウザ幅768px以下
		  settings: {
			slidesToShow: 1,
		  }
		}]
	 });
	 
	$('.slider').slick();


	/*
	日本語に手順を起こしてから、知らないことは調べる。
	日付取得→td要素取得→同じならAddClass
	 */
	 
	const now = new Date();
	const date =now.getDate(); 
	
	$("td").each(function(i, o){
		console.log('インデックス番号:' + i + '、テキスト:' + $(o).text());
		if (date == $(o).text()){
			$($(o)).addClass('is-active');
		}	
	});
	

	/*
	2行で書いてみたい
	*/


	
});