$(function(){
    /*まずは配列に１〜７５までの数字を代入する */
    const array = [];
    for (let a=1;a<=75;a++){
        array.push(a);
    }
    console.log(array);

    /*配列からランダムに要素を取り出す*/
    let rndnum = array[Math.floor(Math.random()*array.length)];
    console.log(rndnum);

    
   
   
    const selected = randomSelect(array.slice(), 25);
 
    // 配列arrayからランダムにnum個の要素を取り出す
    function randomSelect(array, num){
        let newArray = [];
        while(newArray.length < num && array.length > 0){
            // 配列からランダムな要素を選ぶ
            const rand = Math.floor(Math.random() * array.length);
            // 選んだ要素を別の配列に登並べてく
            newArray.push(array[rand]);
            //取り出した値は選ばない→もとの配列からは削除する    
            array.splice(rand, 1);
        }
        console.log(newArray)
    };
    
   
    
});