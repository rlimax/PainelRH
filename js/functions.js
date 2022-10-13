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
	document.getElementById('hora').innerHTML = "<img src=\"./img/logo.jpg\"></img>"+
                                                //"<span class=\"barra\">&nbsp&nbsp Hora<br>"+
												"<span>"+
												"<h3>Painel RH</h3>&nbsp&nbsp&nbsp&nbsp"+
                                                hora+":"+min+":"+seg+
                                                "</span>";
}
