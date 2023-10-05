console.log( 3>= 2 ? "Sim":"Não");

let pessoa = {nome: "Pedro", falar: function() {console.log("eu sou", this.nome);
return "Eu sou ${this.nome}" }};


pessoa.falar();
console.log(pessoa.falar());