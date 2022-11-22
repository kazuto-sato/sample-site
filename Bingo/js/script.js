$(function(){
    /*まずは配列に１〜７５までの数字を代入する */
    const array = [];
    for (let a=1;a<=75;a++){
        array.push(a);
    }
    console.log(array);

    /*配列から重複なしにランダムに要素を取り出す*/
    const rndnum = array[Math.floor(Math.random()*array.length)];
    console.log(rndnum);

    
    /*選んだ */
});