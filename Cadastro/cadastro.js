function cadastramento(){

  var cadastro = JSON.parse(localStorage.getItem('cadastro'));

  if(cadastro == null){

    var cadastro = [{

      email: "",
      nome: "",
      sobreNome: "",
      senha: "",
      confirmaSenha: "",
    }];

  };
  var inputEmail = document.getElementById("email").value;
  var inputNome = document.getElementById("name").value;
  var inputSobreNome = document.getElementById("lastname").value;
  var inputSenha = document.getElementById("password").value;
  var inputConfirmaSenha = document.getElementById("passwordconfirmation").value;

  cadastro.push({
		email:inputEmail,
		nome:inputNome,
		sobreNome:inputSobreNome,
    senha:inputSenha,
    confirmaSenha:inputConfirmaSenha
	});

  localStorage.setItem("cadastro", JSON.stringify(cadastro));

  window.location.href = "../Login/login.html";

};

function validaCadastro(){

  var email = document.getElementById("email").value;
  var name = document.getElementById("name").value;
  var lastName = document.getElementById("lastname").value;
  var password = document.getElementById("password").value;
  var passwordConfirmation = document.getElementById("passwordconfirmation").value;

  if(email == "" || email.indexOf('@') == -1){
    alert("Por favor, digite um e-mail válido");
  }else if (name == "" || name.length < 3){
    alert("Por favor, preencha o campo nome com mínimo 3 caracteres");
  }else if (lastName == "" || lastName.length < 3){
    alert("Por favor, preencha o campo sobre nome com mínimo 3 caracteres");   
  }else if (password == "" || passwordConfirmation == ""){
    alert("Por favor, preencha o campo!")
  }else if (password !== passwordConfirmation){
    alert("Por favor, as senhas precisam ser iguais nos dois campos!");
  } else{
    cadastramento();
  };
};