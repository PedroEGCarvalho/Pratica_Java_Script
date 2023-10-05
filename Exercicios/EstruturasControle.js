//Praticar o if, for, else, while, switch em jvsc

const arrow = (nota, media) => {return nota - media};

function geraNumeroAleatorio(min,max)
{
    return Math.floor(Math.random() * (max-min) + min);
}

function func(nota, media) 
{
    return media - nota;
}

const imprimirResultado = function (nota) {
    switch(Math.floor(nota))
    {
        case 10:
            console.log("dez");
            console.log("teste");
            break
        case 9:
            console.log("nove");
            break;
        case 8:
            console.log("oito");
            break;
        case 7:
            console.log("sete");
            break;
        case 6:
            console.log("seis");
            break;
        case 5:
            console.log("cinco");
            break;
        case 4:
            console.log("quatro");
            break;
        case 3:
            console.log("tres");
            break;
        case 2:
            console.log("dois");
            break;
        case 1:
            console.log("um");
            break;
        case 0:
            console.log("zero");
            break;
        default:
            console.log("nota invalida");
            break;
    }
}
function TrataErro(erro)
{
    throw "Você deve passar um array de numeros!"
        
    
}
function calculaMedia (notas) {
    try{
        if(notas.length > 0)
        {
            let media= 0;
            for(let i =0; i<notas.length;i++)
            {
                media += notas[i];
            }
            return media/notas.length;
        }
        else
        {
            return notas;
        }
    } catch(e) {TrataErro(e);}
}
const teste = [10,10,10,5,5,5], testes = [2,2,2,2], errado = 5, errado2 = [], palavra = true;

console.log(calculaMedia(teste));
console.log(calculaMedia(testes));
console.log(calculaMedia(errado));
console.log(calculaMedia(errado2));
console.log(calculaMedia(palavra));
var opcao = 10;
do
{
    opcao = geraNumeroAleatorio(0,10);
    console.log(opcao);
}while(opcao != 2)


/*imprimirResultado(10);
imprimirResultado(6);
imprimirResultado(7);
imprimirResultado('a');
imprimirResultado(4);
imprimirResultado(23);*/