/*var valores = [['o'],'l','l','e','h'];
valores[0].push('A');
console.log(valores);
valores[0] = valores[0].join('');
console.log(valores);
var oi = valores.reverse().join("");

var teste = ['o','A']; 
console.log(teste);
teste = teste.join('');
console.log(teste);
console.log(oi);

var questao = "Pedro Eugenio";

console.log(questao.split('').reverse().join(''));

var prod = {};
prod.nome= "Pedro";
prod.idade = 26;
prod.namorada= {nome: "Ranna", idade:28};

console.log(prod);

var teste2 = {};

teste2.propriedade = 2;

console.log(teste2);*/

let Pessoa = {Nome: "Pedro", Idade: 20, Informacoes: ["Masculino", "Sargitario", "Estoicista"]};
Pessoa.Informacoes = Pessoa.Informacoes.join("-");
console.log (Pessoa);