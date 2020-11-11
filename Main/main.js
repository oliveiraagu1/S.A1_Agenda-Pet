
function popularSelectsServico(s1,s2){
    var s1 = document.getElementById(s1);
    var s2 = document.getElementById(s2);
    s2.innerHTML = "";
    
	if(s1.value == "cachorro"){
		var selectServico = ["|","banhoP|Banho (Pequeno)","banhoM|Banho (Médio)","banhoG|Banho (Grande)",
		"tosaP|Tosa (Pequeno)","tosaM|Tosa (Médio)","tosaG|Tosa (Grande)",
		"banhoTosaP|Banho + Tosa (Pequeno)","banhoTosaM|Banho + Tosa (Médio)","banhoTosaG|Banho + Tosa (Grande)"];
	} else if(s1.value == "gato"){
		var selectServico = ["|","banhoPadrao|Banho (Médio)","tosaPadrao|Tosa (Médio)","banhoTosaPadrao|Banho + Tosa (Médio)"];
    };
	for(var option in selectServico){
		var pair = selectServico[option].split("|");
		var newOption = document.createElement("option");
		newOption.value = pair[0];
		newOption.innerHTML = pair[1];
		s2.options.add(newOption);
	};
};

function popularSelectsHorario(){

	var selectServico = document.getElementById("servico").value;

	var teste = document.getElementById("horarioServico").value;
	
	if(teste !== ""){

		limpaSelect()

	};

	if(selectServico == "banhoP"){
		var node = document.createElement("option");
		var node2 = document.createElement("option"); 
		var node3 = document.createElement("option");   
		var node4 = document.createElement("option");  
		var node5 = document.createElement("option");  
	
		textnode = document.createTextNode("08:00");
		textnode2 = document.createTextNode("09:00");
		textnode3 = document.createTextNode("10:00");
		textnode4 = document.createTextNode("11:00");
		textnode5 = document.createTextNode("13:00");
		
		node.appendChild(textnode); 
		node2.appendChild(textnode2);
		node3.appendChild(textnode3);  
		node4.appendChild(textnode4); 
		node5.appendChild(textnode5); 
		
		document.getElementById("horarioServico").appendChild(node);
		document.getElementById("horarioServico").appendChild(node2);
		document.getElementById("horarioServico").appendChild(node3);
		document.getElementById("horarioServico").appendChild(node4);
		document.getElementById("horarioServico").appendChild(node5);
		
	}else if(selectServico == "banhoM"){

		var node = document.createElement("option");
		var node2 = document.createElement("option");

		textnode = document.createTextNode("15:00");
		textnode2 = document.createTextNode("18:00");

		node.appendChild(textnode);
		node2.appendChild(textnode2);

		document.getElementById("horarioServico").appendChild(node);
		document.getElementById("horarioServico").appendChild(node2);
		
	}else if(selectServico == "banhoG"){

		var node = document.createElement("option");
		var node2 = document.createElement("option");

		textnode = document.createTextNode("14:30");
		textnode2 = document.createTextNode("17:00");

		node.appendChild(textnode);
		node2.appendChild(textnode2);

		document.getElementById("horarioServico").appendChild(node);
		document.getElementById("horarioServico").appendChild(node2);
		
		
	}else if(selectServico == "tosaP"){

		var node = document.createElement("option");
		var node2 = document.createElement("option");
		var node3 = document.createElement("option");

		textnode = document.createTextNode("14:30");
		textnode2 = document.createTextNode("15:30");
		textnode3 = document.createTextNode("16:30");

		node.appendChild(textnode);
		node2.appendChild(textnode2);
		node3.appendChild(textnode3);

		document.getElementById("horarioServico").appendChild(node);
		document.getElementById("horarioServico").appendChild(node2);
		document.getElementById("horarioServico").appendChild(node3);
		
	}else if(selectServico == "tosaM"){

		var node = document.createElement("option");
		var node2 = document.createElement("option");
		var node3 = document.createElement("option");
		var node4 = document.createElement("option");

		textnode = document.createTextNode("11:30");
		textnode2 = document.createTextNode("12:30");
		textnode3 = document.createTextNode("14:30");
		textnode4 = document.createTextNode("16:30");

		node.appendChild(textnode);
		node2.appendChild(textnode2);
		node3.appendChild(textnode3);
		node4.appendChild(textnode4);

		document.getElementById("horarioServico").appendChild(node);
		document.getElementById("horarioServico").appendChild(node2);
		document.getElementById("horarioServico").appendChild(node3);
		document.getElementById("horarioServico").appendChild(node4);

	}else if(selectServico == "tosaG"){

		var node = document.createElement("option");
		var node2 = document.createElement("option");
		var node3 = document.createElement("option");
		var node4 = document.createElement("option");

		textnode = document.createTextNode("07:30");
		textnode2 = document.createTextNode("09:30");
		textnode3 = document.createTextNode("11:30");
		textnode4 = document.createTextNode("14:30");

		node.appendChild(textnode);
		node2.appendChild(textnode2);
		node3.appendChild(textnode3);
		node4.appendChild(textnode4);

		document.getElementById("horarioServico").appendChild(node);
		document.getElementById("horarioServico").appendChild(node2);
		document.getElementById("horarioServico").appendChild(node3);
		document.getElementById("horarioServico").appendChild(node4);

	}else if(selectServico == "banhoTosaP"){

		var node = document.createElement("option");
		var node2 = document.createElement("option");

		textnode = document.createTextNode("11:00");
		textnode2 = document.createTextNode("15:00");

		node.appendChild(textnode);
		node2.appendChild(textnode2);

		document.getElementById("horarioServico").appendChild(node);
		document.getElementById("horarioServico").appendChild(node2);
		
		
	}else if(selectServico == "banhoTosaM"){

		var node = document.createElement("option");
		var node2 = document.createElement("option");
		var node3 = document.createElement("option");

		textnode = document.createTextNode("10:30");
		textnode2 = document.createTextNode("14:30");
		textnode3 = document.createTextNode("17:30");

		node.appendChild(textnode);
		node2.appendChild(textnode2);
		node3.appendChild(textnode3);

		document.getElementById("horarioServico").appendChild(node);
		document.getElementById("horarioServico").appendChild(node2);
		document.getElementById("horarioServico").appendChild(node3);
		
	}else if(selectServico == "banhoTosaG"){

		var node = document.createElement("option");
		var node2 = document.createElement("option");
		var node3 = document.createElement("option");
		var node4 = document.createElement("option");

		textnode = document.createTextNode("08:00");
		textnode2 = document.createTextNode("10:30");
		textnode3 = document.createTextNode("13:30");
		textnode4 = document.createTextNode("16:30");

		node.appendChild(textnode);
		node2.appendChild(textnode2);
		node3.appendChild(textnode3);
		node4.appendChild(textnode4);

		document.getElementById("horarioServico").appendChild(node);
		document.getElementById("horarioServico").appendChild(node2);
		document.getElementById("horarioServico").appendChild(node3);
		document.getElementById("horarioServico").appendChild(node4);

	}else if(selectServico == "banhoPadrao"){

		var node = document.createElement("option");
		var node2 = document.createElement("option");
		var node3 = document.createElement("option");
		
		textnode = document.createTextNode("10:00");
		textnode2 = document.createTextNode("13:30");
		textnode3 = document.createTextNode("13:30");

		node.appendChild(textnode);
		node2.appendChild(textnode2);
		node3.appendChild(textnode3);
		
		document.getElementById("horarioServico").appendChild(node);
		document.getElementById("horarioServico").appendChild(node2);
		document.getElementById("horarioServico").appendChild(node3);

	}else if(selectServico == "tosaPadrao"){

		var node = document.createElement("option");
		var node2 = document.createElement("option");
		var node3 = document.createElement("option");
		var node4 = document.createElement("option");
		
		textnode = document.createTextNode("08:00");
		textnode2 = document.createTextNode("09:30");
		textnode3 = document.createTextNode("11:00");
		textnode4 = document.createTextNode("14:30");

		node.appendChild(textnode);
		node2.appendChild(textnode2);
		node3.appendChild(textnode3);
		node4.appendChild(textnode4);
		
		document.getElementById("horarioServico").appendChild(node);
		document.getElementById("horarioServico").appendChild(node2);
		document.getElementById("horarioServico").appendChild(node3);
		document.getElementById("horarioServico").appendChild(node4);

	}else if(selectServico == "banhoTosaPadrao"){

		var node = document.createElement("option");
		var node2 = document.createElement("option");
		var node3 = document.createElement("option");
		var node4 = document.createElement("option");
		
		textnode = document.createTextNode("09:00");
		textnode2 = document.createTextNode("11:00");
		textnode3 = document.createTextNode("13:00");
		textnode4 = document.createTextNode("15:30");

		node.appendChild(textnode);
		node2.appendChild(textnode2);
		node3.appendChild(textnode3);
		node4.appendChild(textnode4);
		
		document.getElementById("horarioServico").appendChild(node);
		document.getElementById("horarioServico").appendChild(node2);
		document.getElementById("horarioServico").appendChild(node3);
		document.getElementById("horarioServico").appendChild(node4);
	};
};


function agendar(){

	var agendamento = JSON.parse(localStorage.getItem('agendamento'));


	if(agendamento == null){

		var agendamento = [{

			pet: "", 
			nomeCliente: "",
			servico: "",
			horario: "",
			data: ""
		}];
	};

	var selectPet = document.getElementById("pet").value;
	var nomeCliente = localStorage.getItem("login");
	var selectServico = document.getElementById("servico").value;
	var selectHorario = document.getElementById("horarioServico").value;
	var selectData = document.getElementById("dateInput").value

	nomeCliente = nomeCliente.replace(/"/g, "");


	agendamento.push({
		pet:selectPet,
		nomeCliente:nomeCliente,
		servico:selectServico,
		horario:selectHorario,
		data:selectData
		
	});

	localStorage.setItem("agendamento", JSON.stringify(agendamento));

	window.location.href = "../Formulario/formulario.html";
};

function limpaSelect(){

	var limparSelect = document.getElementById("horarioServico");
	limparSelect.innerHTML = "";
};

function validaAgendamento() {
	let inputData = document.getElementById("dateInput").value
	let now = new Date(inputData.split('-'));

	let selectPet = document.getElementById("pet").value;
	let selectServico = document.getElementById("servico").value;
	let selectHorario = document.getElementById("horarioServico").value;

	if (selectPet == "" || selectServico == "" || selectHorario == "" || inputData == ""){
		alert("Favor preencher todos os campos!");
	} else if (now < Date.now()){
		alert("Não é possível agendar em uma data anterior a atual!");
	} else {
		agendar();
	};
};


function sair() {

	window.location.href = "../Login/login.html";
	
	localStorage.removeItem("login");
};

function consulta() {

	window.location.href = "../Formulario/formulario.html";
};