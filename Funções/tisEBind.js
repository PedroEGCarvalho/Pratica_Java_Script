const pessoa = {
    saudacao: "Bom dia",
    falar() {
        console.log(`Olha só ${this.saudacao}`);  
    }
}

let teste = ["pedro","joao","claudia"];

pessoa.falar();

const falarPessoa = pessoa.falar.bind(pessoa);

falarPessoa();