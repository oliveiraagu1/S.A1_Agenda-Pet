function contato(){

    var contato = JSON.parse(localStorage.getItem('contato'));
  
    if(contato == null){
  
      var contato = [{
  
        email: "",
        nome: "",
        numero: "",
        motivo: "",
        mensagem: "",
      }];
  
    };
    var inputNome = document.getElementById("inputNome").value;
    var inputEmail = document.getElementById("inputEmail").value;
    var inputNumero = document.getElementById("inputNumero").value;
    var inputMotivo = document.getElementById("inputMotivo").value;
    var inputMensagem = document.getElementById("inputMensagem").value;
  
    contato.push({
        email:inputEmail,
        nome:inputNome,
        numero:inputNumero,
        motivo:inputMotivo,
        mensagem:inputMensagem
      });
  
    localStorage.setItem("contato", JSON.stringify(contato));
};

function validaContato(){

  var inputNome = document.getElementById("inputNome").value;
  var inputEmail = document.getElementById("inputEmail").value;
  var inputNumero = document.getElementById("inputNumero").value;
  var inputMotivo = document.getElementById("inputMotivo").value;
  var inputMensagem = document.getElementById("inputMensagem").value;

  if(inputEmail == "" || inputEmail.indexOf('@')== -1){
   alert("Por favor, digite um e-mail válido");
  } else if(inputNome = "" || inputNome.length < 5){
    alert("Por favor, preencha o campo nome com mínimo 5 caracteres");
  } else if(inputNumero == "" || inputMotivo == "" || inputMensagem == ""){
    alert("Por favor, preencha o campo!");
  } else{
   contato();
    alert("Seus dados foram enviados com sucesso!");
  };

};

function voltarPagina(){
  
  window.location.assign("../Formulario/formulario.html");
};