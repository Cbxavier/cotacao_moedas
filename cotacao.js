// --- Função para retornar o texto selecionado na tag select

function changeOption(){

let select = document.querySelector('#codigo');
let optionValue = select.options[select.selectedIndex];
let text = optionValue.text;

	return text;
}

// Botão cotar

function cotar(){
	
	//Consumindo a API de cotação de moedas e retornando o Json

	fetch('https://economia.awesomeapi.com.br/last/USD-BRL,EUR-BRL,BTC-BRL').then(resposta =>{
		return resposta.json()
	}).then(corpo=>{

		//condicional que analisa a moeda selecionada 

		if (changeOption()==='Dólar'){

			let moeda = document.getElementById('moeda')
			let valor = document.getElementById('cotacao')
			let data = document.getElementById('data')

		//manipulando os dados para ser mostrado no HMTL

			moeda.innerHTML=corpo.USDBRL.name
			valor.innerHTML=corpo.USDBRL.bid
			data.innerHTML=corpo.USDBRL.create_date

		} else if(changeOption() === 'Euro'){

			let moeda = document.getElementById('moeda')
			let valor = document.getElementById('cotacao')
			let data = document.getElementById('data')

			moeda.innerHTML=corpo.EURBRL.name
			valor.innerHTML=corpo.EURBRL.bid
			data.innerHTML=corpo.EURBRL.create_date

		} else{

			let moeda = document.getElementById('moeda')
			let valor = document.getElementById('cotacao')
			let data = document.getElementById('data')

			moeda.innerHTML=corpo.BTCBRL.name
			valor.innerHTML=corpo.BTCBRL.bid
			data.innerHTML=corpo.BTCBRL.create_date


		}
	})
}

