$(function(){
    /*まずは配列に１〜７５までの数字を代入する */
    const array = [];
    for (let a=1;a<=75;a++){
        array.push(a);
    }

    /*配列からランダムに要素を取り出す*/
    let rndnum = array[Math.floor(Math.random()*array.length)];


    $(document).on('click','.create_card',function(i,o) {
    	randomSelect(array.slice(), 25);
    });
 
    // 配列arrayからランダムにnum個の要素を取り出す
    function randomSelect(array, num){
        let newArray = [];
        
        let html ='';
        html += '<tr>'
        while(newArray.length < num && array.length > 0){
        	if(array.length % 5 == 0) {
        		html += '<tr>'	
        	}
        	const rand = Math.floor(Math.random() * array.length);
        	html += '<td class="num-'+ array[rand] +'">' + array[rand] + '</td>';
            newArray.push(array[rand]);
            array.splice(rand, 1);
            if(array.length % 5 == 0) {
        		html += '</tr>'	
        	}
        }
        console.log(html);
        $('.container table').append(html);
        console.log(newArray)
    };

    $(document).on('click','.switch',function(i,o) {

    	let ttt = array[Math.floor(Math.random()*array.length)];

    	console.log(ttt);
    	$('.num-'+ ttt).addClass('highlight');
    	$('.switch_num').text(ttt);
    })

});