var erase = document.querySelector("#erase");
var clear = document.querySelector("#clear");
var equal = document.querySelector("#ans");

var btn_0 = document.querySelector("#ze");
var btn_00 = document.querySelector("#db_ze");
var btn_1 = document.querySelector("#on");
var btn_2 = document.querySelector("#tw");
var btn_3 =document.querySelector("#th");
var btn_4 =document.querySelector("#fo");
var btn_5 =document.querySelector("#fi");
var btn_6 =document.querySelector("#si");
var btn_7 =document.querySelector("#se");
var btn_8 =document.querySelector("#ei");
var btn_9 =document.querySelector("#ni");

var btn_plus = document.querySelector("#plus");
var btn_min = document.querySelector("#min");
var btn_multi = document.querySelector("#multi");
var btn_divide = document.querySelector("#div");
var btn_per = document.querySelector("#per");
var btn_point = document.querySelector("#point");

var write_me = document.querySelector("#type");
var write_me = document.querySelector("#result");

btn_0.onclick = () => {
	type_to(0);
}
btn_00.onclick = () => {
	type_to("00");
}
btn_1.onclick = () => {
	type_to(1);
}
btn_2.onclick = () => {
	type_to(2);
}
btn_3.onclick = () => {
	type_to(3);
}
btn_4.onclick = () => {
	type_to(4);
}
btn_5.onclick = () => {
	type_to(5);
}
btn_6.onclick = () => {
	type_to(6);
}
btn_7.onclick = () => {
	type_to(7);
}
btn_8.onclick = () => {
	type_to(8);
}
btn_9.onclick = () => {
	type_to(9);
}
btn_plus.onclick = () => {
	type_to("+");
}
btn_minus.onclick = () => {
	type_to("-");
}
btn_multi.onclick = () => {
	type_to("x");
}
btn_div.onclick = () => {
	type_to("/");
}
btn_point.onclick = () => {
	type_to(".");
}
btn_per.onclick = () => {
	type_to("%");
}
clear.onclick = () => {
	clearscreen("");
}
erase.onclick = () => {
	erasescreen("");
}
	equal.onclick = () =>{
	calculate();
}



document.onkeyup = e =>{
	if(e.key == "0" || e.key == "Num0"){
		type_to(0);
	} else if(e.key == "1" || e.key == "Num1"){
	    type_to(1);
	} else if(e.key == "2" || e.key == "Num2"){
	    type_to(2);
	} else if(e.key == "3" || e.key == "Num3"){
	    type_to(3);		
	} else if(e.key == "4" || e.key == "Num4"){
	    type_to(4);
	} else if(e.key == "5" || e.key == "Num5"){
	    type_to(5);
	} else if(e.key == "6" || e.key == "Num6"){
	    type_to(6);
	} else if(e.key == "7" || e.key == "Num7"){
	    type_to(7);	
	} else if(e.key == "8" || e.key == "Num8"){
	    type_to(8);
	} else if(e.key == "9" || e.key == "Num9"){
	    type_to(9);
	} else if(e.key == "+" || e.key == "Num+"){
	    type_to("+");
	} else if(e.key == "-" || e.key == "Num-"){
	    type_to("-");				
	} else if(e.key == "/" || e.key == "Num/"){
	    type_to("/");
	} else if(e.key == "*" || e.key == "Num*"){
	    type_to("X");
	} else if(e.key == "%" || e.key == "Num%"){
	    type_to("%");		
	} else if(e.key == "." || e.key == "Num."){
	    type_to(".");
	} else if (e.key == "Enter" || e.key == "NumEnter"){
		calculate();
	} else if (e.key == "delete") {
		clear_screen();
	} else if (e.key == "Backsapce" || e.key == "Escape"){
		erase_screen();
	}		
    
}
var type_to = text =>{
	if (write_me.innertext == ""){
		write_me.innertext = text;
	} else if (write_me.innertext.length <= 23){
		write_me.innertext = write_me.innertext +text;
	} else{
		alert("digit limit reached");
	}
}

var calculate = () => {
	var res = write_me.innertext;

	if (res.indexof("%") == -1){
	   if(res.indexof("X") != -1) {
		  res = res.replace("X", "*");
		}
    } else{
		res = res.replace("%", "");
	    if(res.indexof("X") != -1) {
			var res_ar = res.split("x");
			var total = eval(res_ar[0]);
			var need = eval(res_ar[1]);
		    res = (need / 100) * total;
	    } else{
		    alert("math error. percent cant be eveluate without multiplication");
		}
	}		
	
	result.innertext = eval(res);
}	

var clear_screen = () =>{
	write_me.innertext = "";
}

var erase_screen = () =>{
	write_me.innertext = write_me.innertext.subtr(0, write_me.innertext.length - 1);
}






