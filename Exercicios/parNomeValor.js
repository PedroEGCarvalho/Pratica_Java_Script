//Função pode criar objetos nessa linguagem

function Obj(nome) {
    this.nome = nome;
    this.exec = function() {console.log(this.nome)}
}

let obj2 = new Obj("Pedro");
let obj3 = new Obj("Carlos");
let obj4 = new Obj("Ranna");

obj2.exec();
obj3.exec();
obj4.exec();