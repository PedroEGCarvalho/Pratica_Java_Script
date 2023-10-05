//Destructuring de objeto. Se a variavel final for nula ou undefined não dá problema, mas se o objeto for undefined não funciona.

const OBJ = {nome: "Pedro", idade: 23, Endereco: { bairro: "Lago Sul", Numero: 3}};
//Destructuring pegando de dentro do objeto os valores de nome idade e bairro
const {nome: n, idade: i, Endereco: {bairro: b}} = OBJ;

console.log(n);
console.log(i);
console.log(b);

//Destructuring de array
const vetor = [4,1,1,1,1,1,1];

//Destrycturing ignorando indices no array e criando uma nova variavel que está fora dele
var [a, ,f,c, , d, e, h =0] = vetor;
var d1 = new Date(1);
var d2 = new Date(2);
console.log(a);
console.log(f);
console.log(c);
console.log(d);
console.log(e);
console.log(typeof d2);
console.log(d1==d2);
a **= 3;

console.log(a);
//