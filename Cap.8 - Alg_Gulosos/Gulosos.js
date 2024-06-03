//Resolução de exercicios propostos
//8.1 - Resolução: empresa de mobilia tem que encher o caminhão para distribuição.
//- TODO: Implementação no final do livro

//8.2 - Resolução: Viajando pela Europa visitar o máximo de lugares possíveis.
//- TODO: Implementação no final do livro.


//Estação: algoritmo proposto pelo autor para reoslução de problema de estações de radio e cobertura geografica.
function conjuntoCobertura(estadosAbranger, estacoes) 
{
    let finalEstacoes = new Set();
    while (estadosAbranger.size > 0) {
        let melhorEstacao = null;
        let estadosCobertos = new Set();
        for (let [estacao, estadosPorEstacao] of Object.entries(estacoes)) //Object.entries(objeto) retorna uma array de array, CHAVE E VALOR, visto nos capitulos anteriores.
        {
            let cobertos = new Set([...estadosAbranger].filter(x => estadosPorEstacao.has(x))); // Array de intersecção (noção de conjuntos em matematica).
            if (cobertos.size > estadosCobertos.size && !finalEstacoes.has(estacao)){
                melhorEstacao= estacao;
                estadosCobertos = cobertos;
            }
        }
        if (melhorEstacao !== null) {
            estadosCobertos.forEach(x => estadosAbranger.delete(x));
            finalEstacoes.add(melhorEstacao);
            delete estacoes[melhorEstacao];
        } else {
            return null;
        }
    }
    return finalEstacoes;
}

let finalEstacoes = new Set();

const estadosAbranger = new Set(["mt", "wa", "or", "id", "nv", "ut", "ca", "az"]); // new set em JS cria conjunto de valores UNICOS! ou seja não será computado valores repetidos.
estacoes ={
    kum: new Set(["id", "nv", "ut"]),
    kdois: new Set(["wa", "id", "mt"]),
    ktres: new Set(["or", "nv", "ca"]),
    kquato: new Set(["nv", "ut"]),
    kcinco: new Set(["ca", "az"])
} //tabela hash de estados // tabela hash vistos nos capitulos anteriores

console.log(conjuntoCobertura(estadosAbranger, estacoes));

// nesse codigo foi usado o new Set por não ser permitido a repetição de estados, esse algoritmo tem a ver com problemas de Conjuntos (ver explicçaão de conjuntos em Matematica).
// Conjuntos em Matematica não permite elementos repetidos.