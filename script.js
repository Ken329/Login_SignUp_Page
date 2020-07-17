var attempts = 3;
var myuser = "ken";
var mypass = "liau";

document.getElementById("mybtn").addEventListener("click", check);

function check(){
	var username = document.getElementById("username").value;
	var password = document.getElementById("password").value;

	if(username == myuser && password == mypass){
		//alert("Successful login");
		window.location = "success.html";
		return false;
	}else{
		attempts--;
		alert(attempts + " attempts left");
		if (attempts == 0) {
			document.getElementById("username").disabled = true;
			document.getElementById("password").disabled = true;
			document.getElementById("mybtn").disabled = true;
			return false;
		}
	}	
}


