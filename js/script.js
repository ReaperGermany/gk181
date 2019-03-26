var days = ["Понедельник", "Вторник", "Среда", "Четверг", "Пятница", "Суббота", "Воскресение"];
var months = ["Январь", "Февраль", "Март", "Апрель", "Май", "Июнь", "Июль", 
        "Август", "Сентябрь", "Октябрь", "Ноябрь", "Декабрь"];
         
var myDate = new Date();
var fullDate =  myDate.getDate() + " " + months[myDate.getMonth()] + 
            " " + myDate.getFullYear() + ", " + days[myDate.getDay()];

var myDate = new Date();
var hour = myDate.getHours();
var minute = myDate.getMinutes();
var second = myDate.getSeconds();


var idPole = document.getElementById("datetime");
idPole.innerHTML = "Сегодня" + " " + fullDate + " " + hour + ":" + minute + ":" + second;


//Обрабатываем нажатие кнопки купить

var sum = 0;
function addBy(id) {
	var cart = document.getElementById(id);
    console.log(id);
      console.log(cart);
    var price = cart.children[2].innerHTML;//взяли цену
    var priceNum = price.split(" ");
	//var price = document.getElementById("price"+id).innerHTML;
	
	var headerT = cart.children[1].innerHTML;//взяли наименование

var elLi = document.createElement("LI");
var textPrice = document.createTextNode(priceNum[1]);
var textTovar = document.createTextNode(headerT);
elLi.appendChild(textPrice);
document.getElementById("checks").appendChild(elLi);//добавли  цену в спискок

elLi.appendChild(textTovar);
document.getElementById("checks").appendChild(elLi);//добавли  описание товара

var total = [];
total.push(priceNum[1]);
for ( var i=0; i<= (total.length - 1); i++) {
	sum = sum + parseInt(total[i]);
}
var iii = document.getElementById("itogo");
iii.innerHTML = sum;


	//var newStr = document.createElement('p');
	//newStr.innerHTML = priceNum[1];
     //	var text = document.getElementById("checks");
	//text.innerHTML = priceNum[1];
	
	//alert(priceNum[1]);
}
const promo = "4004";
function Order(inp){
	var putInput = document.getElementById(inp);
	var textInput = putInput.value;
	if (textInput == promo) {
		sum = sum - sum * 0.1;
	}
	var ii = document.getElementById("itogo2");
	ii.innerHTML = sum;
}