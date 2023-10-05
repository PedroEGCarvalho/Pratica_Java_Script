var input = require('fs').readFileSync('stdin', 'utf8')


let a = 2 ;
let b = 94 ;
//a = ("Digite o valor de a");
//b = window.prompt("Digite o valor de b");
let temp;
console.log("Antes da troca");
console.log("a = " + a);
console.log("b = " + b);


temp = a;
a = b;
b = temp;
console.log("\n"+"Após a troca");
console.log("a = " + a);
console.log("b = " + b);

console.log("Trocando os valores agora com grupos em javascript");
[a, b] = [b, a];
a = Math.pow(a, 4);
console.log("a = " + a);
console.log("b = " + b);
console.log(b.toString(3));