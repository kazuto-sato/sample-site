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
		slidesToShow: 2, // 表示させるスライドの枚数
		responsive: [{ // レスポンシブ設定
		  breakpoint: 768, // ブラウザ幅768px以下
		  settings: {
			slidesToShow: 1,
		  }
		}]
	 });
	 
	$('.slider').slick();

	//日付取得する
	const now = new Date();
	const today = now.getDate();

	//その日付と同じdate-日付のクラスに is-active のクスラスを付与する。
	
});