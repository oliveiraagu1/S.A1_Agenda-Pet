function apresentarDados(){

   var objetoLocalStorage = JSON.parse(localStorage.getItem('agendamento'));
   var nomeCliente = localStorage.getItem("login");

	for(i=1; i < objetoLocalStorage.length; i++){

      if(objetoLocalStorage[i].servico == "banhoP"){

         var valor = "R$ 30,00"

      }else if(objetoLocalStorage[i].servico == "banhoM"){

         var valor = "R$ 40,00";

      }else if(objetoLocalStorage[i].servico == "banhoG"){

         var valor = "R$ 50,00"

      }else if(objetoLocalStorage[i].servico == "tosaP"){

         var valor = "R$ 25,00"
      }else if(objetoLocalStorage[i].servico == "tosaM"){

         var valor = "R$ 35,00"

      }else if(objetoLocalStorage[i].servico == "tosaG"){

         var valor = "R$ 45,00"

      }else if(objetoLocalStorage[i].servico == "banhoTosaP"){

         var valor = "R$ 45,00"

      }else if(objetoLocalStorage[i].servico == "banhoTosaM"){

         var valor = "R$ 55,00"

      }else if(objetoLocalStorage[i].servico == "banhoTosaG"){

         var valor = "R$ 65,00"

      }else if(objetoLocalStorage[i].servico == "banhoPadrao"){

         var valor = "R$ 32,00"

      }else if(objetoLocalStorage[i].servico == "tosaPadrao"){

         var valor = "R$ 42,00"

      }else if(objetoLocalStorage[i].servico == "banhoTosaPadrao"){

         var valor = "R$ 52,00"

      };

      nomeCliente = nomeCliente.replace(/"/g, "");

      if (objetoLocalStorage[i].nomeCliente == nomeCliente) {

         var id = i
         var pet = objetoLocalStorage[i].pet;
         var nomeCliente = objetoLocalStorage[i].nomeCliente;
         var servico = objetoLocalStorage[i].servico;
         var horario = objetoLocalStorage[i].horario;
         var data = objetoLocalStorage[i].data;

         var tr = document.createElement("tr")

         var idNode = document.createElement("td");
         var petNode = document.createElement("td");
         var nomeClienteNode = document.createElement("td");
         var servicoNode = document.createElement("td");
         var horarioNode = document.createElement("td");
         var dataNode = document.createElement("td");
         var valorNode = document.createElement("td");
      
         idText = document.createTextNode(id);
         petText = document.createTextNode(pet);
         nomeClienteText = document.createTextNode(nomeCliente);
         servicoText = document.createTextNode(servico);
         horarioText = document.createTextNode(horario);
         dataText = document.createTextNode(data);
         valorText = document.createTextNode(valor);

         idNode.appendChild(idText);
         petNode.appendChild(petText);
         nomeClienteNode.appendChild(nomeClienteText);
         servicoNode.appendChild(servicoText);
         horarioNode.appendChild(horarioText);
         dataNode.appendChild(dataText);
         valorNode.appendChild(valorText);

         tr.appendChild(idNode);
         tr.appendChild(petNode);
         tr.appendChild(nomeClienteNode);
         tr.appendChild(servicoNode);
         tr.appendChild(horarioNode);
         tr.appendChild(dataNode);
         tr.appendChild(valorNode);

         document.getElementById("tabelaDados").appendChild(tr)

      };

      
	};
};

function voltarPagina(){
   
   window.location.assign("../Main/main.html");
};

function deletarDados(){

   var objetoLocalStorage = JSON.parse(localStorage.getItem('agendamento'));
   var numeroUsuario = document.getElementById("numeroUsuario").value

  
   if(objetoLocalStorage.length == 1 || numeroUsuario <= 0 || objetoLocalStorage.length <= numeroUsuario){

      alert("Para apagar um (Id), é necessário informar o número correspondente ao da tabela");

   }else {

      if (confirm("Você deseja mesmo deletar isso?")){

         objetoLocalStorage.splice(numeroUsuario, 1);

         localStorage.setItem("agendamento", JSON.stringify(objetoLocalStorage));
   
         window.location.reload();
       
      };
   };

};

function paginaContato(){

   window.location.href = "../Contato/contato.html";
}