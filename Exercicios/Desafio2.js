

const PI = Math.PI;
let raio = 1;
let escola = "Coeder cool guy falks";

function CalculaArea (r) 
{
    let raioQuadrado = r*r;
    return raioQuadrado*PI;
}

console.log(CalculaArea(raio).toFixed(2),"cms quadrados");
raio =2;
console.log(CalculaArea(raio).toFixed(2),"cms quadrados");
raio =3;
console.log(CalculaArea(raio).toFixed(2),"cms quadrados");
raio =4;
console.log(CalculaArea(raio).toFixed(2),"cms quadrados");

console.log(escola.charAt(1));
console.log(escola.charCodeAt(3));
console.log(escola.indexOf('e'));
console.log(escola.substring(2));
console.log(escola.substring(2,5));
console.log(escola.concat("!!!"));
escola = escola.concat(" !!!");
console.log(escola.replace('o', 'u'));
console.log(escola.split(' '));