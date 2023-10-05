//Aula sobre funções

var a = 2; var b = 3;


function AreaCirculo(a)
{

    return (a*a*b);
}


console.log("A área do circulo de raio 4 é igual a: " + AreaCirculo(a).toFixed(2));


//Outra maneira de declarar. Variavel pode receber função
const Area = AreaCirculo;

console.log(Area(5).toFixed(2));

//Arrow function
const AreaRetangulo = (a,b) => 
{
    return a*b;
}
console.log(AreaRetangulo(a,b).toFixed(2));
//Arrow function com retorno simples
const AreaQuadrado = a => a*a;
console.log(AreaQuadrado(a).toFixed(2));

console.log(a);
