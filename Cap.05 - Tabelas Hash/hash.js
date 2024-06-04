// Exemplo de uso de uma estrutura com objetos( tabela hash )
let voted = {};
voted["Alice"] = true;
voted["Bob"] = false;

if (voted["Alice"]) {
    console.log("Alice já votou!");
}

//-- Exemplo de estrutura

let informacoesDoUsuario = {
    nome: "Alice",
    idade: 25,
    cidade: "São Paulo"
};
console.log(informacoesDoUsuario.nome); // "Alice"




// Exemplo de uso de uma estrutura com array.
let voted = [];
voted.push("Alice");
voted.push("Bob");

if (voted.includes("Alice")) {
    console.log("Alice já votou!");
}

//-- Exemplo de estrutua

let listaDeNomes = ["Alice", "Bob", "Charlie"];
console.log(listaDeNomes[0]); // "Alice"




