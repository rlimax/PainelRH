function atual(){
	let data = new Date();
	hora = data.getHours();
	min = data.getMinutes();
	seg = data.getSeconds();
	if(hora<=9){
		hora = "0"+hora;
	}
	if(min<=9){
		min = "0"+min;
	}
	if(seg<=9){
		seg = "0"+seg;
	}
	document.getElementById('hora').innerHTML = "<img class=\"logo\" src=\"./img/logo.png\"></img><h3>RECURSOS HUMANOS</h3>"+
                                                //"<span class=\"barra\">&nbsp&nbsp Hora<br>"+
												"<span>"+
												"&nbsp&nbsp&nbsp&nbsp"+
                                                hora+":"+min+":"+seg+
                                                "</span>";
}
