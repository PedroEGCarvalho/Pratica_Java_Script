//Toda função possui um array chamado arguments que possui todos os parametros passados.
//Uma função pode receber menos ou mais argumentos do que em sua declaração.
//Por conta de polimorfismo eu poderia ter uma variavel com o nome soma ao invés de resultado.

function soma()
{
    let resultado =0;
    for (i in arguments)
    {
        console.log(arguments[0]);
        resultado += arguments[i];
    }
    return resultado;
}

console.log(soma(2,5,6,7));
console.log(soma(5,5,5,5,5));
console.log(soma());
console.log(soma(1));
console.log(soma(-5,-8,10));