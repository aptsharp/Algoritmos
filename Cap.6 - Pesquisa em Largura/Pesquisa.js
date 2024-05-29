function pesquisa(nome) {
    let filaDePesquisa = []; // cria uma fila
    filaDePesquisa = filaDePesquisa.concat(grafo[nome]); // adiciona todos os amigos para a lista de pesquisa
    let verificadas = []; // armazenamento das pessoas já verificadas

    while (filaDePesquisa.length > 0) { // enquanto a fila de pesquisa não está vazia
        let pessoa = filaDePesquisa.shift(); // pego a primeira pessoa da fila
        if (!verificadas.includes(pessoa)) { // verifico se essa pessoa já foi verificada
            if (pessoaEVendedor(pessoa)) {
                console.log(pessoa + " vende mangas");
                return true; // encerra aqui. pesquisa realizada.
            } else {
                filaDePesquisa = filaDePesquisa.concat(grafo[pessoa]); // adiciona todos os amigos para a lista de pesquisa
                verificadas.push(pessoa); // marca a pessoa como verificadas (evita loop eterno)
            }
        }
    }
    return false; // retorna false se ninguém for encontrado
}

// Função exemplo para verificar se a pessoa é um vendedor
function pessoaEVendedor(nome) {
    // Lógica para determinar se a pessoa é um vendedor de mangas
    return nome.endsWith('m'); // apenas um exemplo simples
}

// Exemplo de grafo
let grafo = {
    'voce': ['alice', 'bob', 'claire'],
    'bob': ['anuj', 'peggy'],
    'alice': ['peggy'],
    'claire': ['thom', 'jonny'],
    'anuj': [],
    'peggy': [],
    'thom': [],
    'jonny': []
};

// Teste da função
pesquisa('voce');

// É aconselhavel fazer o debugger nesse codigo para poder ver os passo a passo da execução.