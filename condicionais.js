console.log(`Trabalhando com condicionais`);
const listasDeDestinos = [`Salvador`, `São Paulo`, `Rio de Janeiro`];

const idadeComprador = 18;
const estaAcompanhada = false;
const temPassagemComprada = true;

console.log('Destinos possíveis: ');
console.log(listasDeDestinos);

// if (idadeComprador >= 18) {
// 	console.log('Comprador maior de idade, compra disponível!');
// 	listasDeDestinos.splice(1, 1); //removendo item
// } else if (estaAcompanhada) {
// 	console.log('Comprador menor de idade e está acompanhado, compra disponível!');
// 	listasDeDestinos.splice(1, 1); //removendo item
// } else {
// 	console.log('Comprador menor de idade e desacompanhado, compra indisponível!');
// }

if (idadeComprador >= 18 || estaAcompanhada == true) {
	console.log('Compra efetuada!!');
	listasDeDestinos.splice(1, 1); //removendo item
} else {
	console.log('Menor de idade sem acompanhante.\nProibido vender!\n');
}

console.log('Embarque: \n\n');
if ((idadeComprador >= 18 || estaAcompanhada) && temPassagemComprada) {
	console.log('Boa viagem!!');
} else {
	console.log('Você não pode embarcar!');
}

console.log(listasDeDestinos);

// console.log(idadeComprador > 18);
// console.log(idadeComprador < 18);
// console.log(idadeComprador <= 18);
// console.log(idadeComprador >= 18);
// console.log(idadeComprador == 18);
