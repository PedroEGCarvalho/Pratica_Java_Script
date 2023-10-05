//Ecma script 2015  gerar valor padrão
function soma1(a,b,c)
{
a=a||1;
b=b||1;
c=c||1;
return a+b+c;
}

console.log(soma1(3,2));
console.log(soma1(2));


function soma2(a,b,c)
{
    a= a != undefined ? a:1;
    b = b != null ? b:2;
    c = 2 in arguments ? c:3

    return a+b+c;
}

console.log(soma2(3,2));
console.log(soma2(2));

function soma3(a=1,b=1,c=1)
{
    return a+b+c;
}

console.log(soma3(3,2));
console.log(soma3(2));


let obje = {nome:"pedro", idade: 23};
obje.nome = "juca";
obje.drogas="dalva";
console.log(obje.drogas);
let a;
const teste=() => console.log(3);

teste();
// gerar valor padrão 3 estrategias