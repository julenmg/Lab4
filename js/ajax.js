XMLHttpRequestObject = new XMLHttpRequest();

function galderakIkusi(){
	XMLHttpRequestObject.onreadystatechange = function(){
		
		document.getElementById("prioritycase").innerHTML="";
		document.getElementById("erakutsiGalderak").innerHTML="";
		//alert(XMLHttpRequestObject.readyState);
		if ((XMLHttpRequestObject.readyState==4)&&(XMLHttpRequestObject.status==200 )){
			document.getElementById("erakutsiGalderak").innerHTML=XMLHttpRequestObject.responseText;
		}
	}
	XMLHttpRequestObject.open("GET","./php/quizzesAJAX.php", true);
	XMLHttpRequestObject.send();
}

function galderaSortu(galdera,erantzuna,zailtasuna){
	if(/^\s*$/.test(galdera) || /^\s*$/.test(erantzuna)){
		alert("Galdera edo erantzuna hutsik");
}else{
	XMLHttpRequestObject.onreadystatechange = function(){
		document.getElementById("prioritycase").innerHTML="";
		document.getElementById("erakutsiGalderak").innerHTML="";
		//alert(XMLHttpRequestObject.readyState);
		if ((XMLHttpRequestObject.readyState==4)&&(XMLHttpRequestObject.status==200 )){
			document.getElementById("prioritycase").innerHTML=XMLHttpRequestObject.responseText;
		}
	}
	XMLHttpRequestObject.open("GET","./php/insertquestionAJAX.php?GALDERA="+galdera+"&ERANTZUNA="+erantzuna+"&ZAILTASUNA="+zailtasuna, true);
	XMLHttpRequestObject.send();
}
}

function galderaEditatu(id,galdera,erantzuna,zailtasuna){
	XMLHttpRequestObject.onreadystatechange = function(){
		document.getElementById("prioritycase").innerHTML="";
		document.getElementById("erakutsiGalderak").innerHTML="";
		//alert(XMLHttpRequestObject.readyState);
		if ((XMLHttpRequestObject.readyState==4)&&(XMLHttpRequestObject.status==200 )){
			document.getElementById("erakutsiGalderak").innerHTML=XMLHttpRequestObject.responseText;
		}
	}
	XMLHttpRequestObject.open("GET","./php/editquestionAJAX.php?GALDERA_ID="+id+"&GALDERA="+galdera+"&ERANTZUNA="+erantzuna+"&ZAILTASUNA="+zailtasuna, true);
	XMLHttpRequestObject.send();
}
