console.log('\nTrabalhando com loops');
const listasDeDestinos = ['Salvador', 'São Paulo', 'Rio de Janeiro'];

const idadeComprador = 18;
const estaAcompanhada = false;
const temPassagemComprada = false;
const destino = 'São Paulo';

console.log('  Idalgo Airlines');
console.log('Compra de Passagens');
console.log('Destinos possíveis: \n');
console.log(listasDeDestinos);

const podeComprar = idadeComprador >= 18 || estaAcompanhada == true;

// let contador = 0;
let destinoExiste = false;
// while (contador < listasDeDestinos.length) {
// 	if (listasDeDestinos[contador] == destino) {
// 		destinoExiste = true;
// 		break;
// 	}
// 	contador += 1;
// }

for (let i = 0; i < listasDeDestinos.length; i++) {
	if (listasDeDestinos[i] == destino) {
		destinoExiste = true;
		break;
	}
}

console.log('Destino existe: ', destinoExiste);

if (podeComprar && destinoExiste) {
	console.log('Boa viagem!');
} else {
	console.log('Desculpe, tivemos um erro');
}
