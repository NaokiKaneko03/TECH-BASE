function omikuji(){
	var num = Math.random();
    var random_num = num * 3;
    var int_rannum = Math.floor(random_num);
    var omikuji = ["大吉", "中吉", "小吉"];
    var message = omikuji[int_rannum];
    var object = document.getElementById("omikuji");
    object.innerText = message;
}