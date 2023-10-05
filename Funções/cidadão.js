// Função de alta ordem a função é tratada como dado. Javascript possui é multiparadigma. Dá para programar funcional, OO, etc.
var a =10;


//Criando de forma literal
function fun1() 
{
    console.log(`Ela funciona! ${a}`);
}

//Armazenando em uma variavel
const fun2 = function () {}

//Pode ser armazenada em um array
const vetorFuncao = [function (a,b) {return a+b}, fun1, fun2];

//Pode ser associada com atributos de objetos
const Obj = 
{
    nome: "Teste",
    falar: function () {console.log(this.nome)}
}
Obj.falar();
Obj.gritar = function () {a=a+2; console.log(this.nome.toUpperCase())};
Obj.gritar();

//Função pode ser passada como parâmetro
function rodar(fun)
{
    fun();
}

rodar(fun1);

//Função pode interagir e modificar variaveis globais e pode ser declarada dentro de outra função

function soma(a,b)
{
    b=2;
    return function abaco(c)
    {
    
        return a+b+c;
    }
}

console.log(soma(2,2)(2));
console.log(a);