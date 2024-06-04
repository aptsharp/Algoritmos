//Similiaridades de cossenos
//Metricas usada para medir a similiaridade entre 2 vetores em um espaço multidimensional.
//Usado para recomendar filmes, livros, musicas.

// Função para calcular a similaridade de cosseno entre dois vetores
function cosineSimilarity(vecA, vecB) {
    let dotProduct = 0;
    let normA = 0;
    let normB = 0;
    for (let i = 0; i < vecA.length; i++) {
        dotProduct += vecA[i] * vecB[i];
        normA += vecA[i] * vecA[i];
        normB += vecB[i] * vecB[i];
    }
    normA = Math.sqrt(normA);
    normB = Math.sqrt(normB);
    return dotProduct / (normA * normB);
}

// Função kNearestNeighbors sem bibliotecas externas
function kNearestNeighbors(data, query, k) {
    // Calcula a similaridade de cosseno
    let similarities = data.map(row => cosineSimilarity(row, query));
    
    // Ordena os índices pela similaridade de forma descendente
    let sortedIndices = similarities.map((val, idx) => [val, idx])
                                    .sort((a, b) => b[0] - a[0])
                                    .map(pair => pair[1]);

    // Seleciona os k vizinhos mais próximos
    let nearestNeighbors = sortedIndices.slice(0, k);
    let nearestSimilarities = nearestNeighbors.map(idx => similarities[idx]);
    
    return [nearestNeighbors, nearestSimilarities];
}

// Exemplo de uso
let data = [
    [1, 0, 1, 0, 1],
    [0, 1, 1, 1, 0],
    [1, 1, 1, 0, 0],
    [0, 0, 1, 1, 1],
    [1, 0, 1, 1, 0]
];
let query = [1, 0, 1, 0, 0];

let k = 3;
let [neighbors, similarities] = kNearestNeighbors(data, query, k);
console.log("Neighbors:", neighbors);
console.log("Similarities:", similarities);
