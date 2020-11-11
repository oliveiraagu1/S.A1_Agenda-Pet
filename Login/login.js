const inputs = document.querySelectorAll(".input");


function addcl(){
	let parent = this.parentNode.parentNode;
	parent.classList.add("focus");
}

function remcl(){
	let parent = this.parentNode.parentNode;
	if(this.value == ""){
		parent.classList.remove("focus");
	}
}


inputs.forEach(input => {
	input.addEventListener("focus", addcl);
	input.addEventListener("blur", remcl);
});



function logar(){

	var objetoLocalStorage = JSON.parse(localStorage.getItem('cadastro'));

	var email = document.getElementById("inputLogin").value;
	var senha = document.getElementById("inputSenha").value;

	if(email == "" || senha == ""){

		alert("Campo ´email´ e ´senha´, estão vazio, favor preencher!");

	} else if(objetoLocalStorage == null || objetoLocalStorage == undefined){

		alert("Usuário e senha não foram cadastrados ainda, favor fazer o cadastro!");

	} else{

		for(i=1; i < objetoLocalStorage.length; i++){

			var emailLocalStorage = objetoLocalStorage[i].email;
			var senhaLocalStorage = objetoLocalStorage[i].senha;
	
			if(email == emailLocalStorage && senha == senhaLocalStorage){
	
				window.location.href = "../Main/main.html";
				secessaoClienteAtual()
	
			};
	
		};

		if(objetoLocalStorage){

			alert("E-mail ou senha estão incorretos");
		};
	};
	

};


function secessaoClienteAtual() {

	var inputEmail = document.getElementById("inputLogin").value;
	
	localStorage.setItem("login", JSON.stringify(inputEmail));
};
