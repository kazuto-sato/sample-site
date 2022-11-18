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
	
	
	
	const now = new Date();
	const date =now.getDate(); 
		console.log(date);

	/*
	const x = document.getElementsByTagName("td");
	  console.log(x);
	
	$("td").each(function(i, o){
		console.log('インデックス番号:' + i + '、テキスト:' + $(o).text());
	});
	*/

	const x = ; 

	if (date == x){
		console.log('AAAAAAAAAAAAAAA');
	}

	
	
	/*
	console.log(getElementById('#td');

	


	/*
	const date = document. querySelector(td);
	  console.log('tdだぞ'); */

	/*const = this.documentElement.querySelector('id');*/
	
	/*
	$('td').each(function(index){
		console.log(index);
	})
	
	if　(now == ){
		$('追加したいタグ').addClass('is-active');
	};*/
});