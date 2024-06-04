//Algoritmo de Dijkstra
class PriorityQueue {
    constructor() {
        this.queue = [];
    }

    enqueue(element, priority) {
        const node = { element, priority };
        if (this.isEmpty()) {
            this.queue.push(node);
        } else {
            let added = false;
            for (let i = 0; i < this.queue.length; i++) {
                if (node.priority < this.queue[i].priority) {
                    this.queue.splice(i, 0, node);
                    added = true;
                    break;
                }
            }
            if (!added) {
                this.queue.push(node);
            }
        }
    }

    dequeue() {
        return this.queue.shift();
    }

    isEmpty() {
        return this.queue.length === 0;
    }
}

function dijkstra(graphD, start) {
    const distances = {};
    const previous = {};
    const pq = new PriorityQueue();

    // Inicialização
    for (let vertex in graphD) {
        distances[vertex] = Infinity;
        previous[vertex] = null;
    }
    distances[start] = 0;
    pq.enqueue(start, 0);

    while (!pq.isEmpty()) {
        const { element: currentVertex } = pq.dequeue();

        for (let neighbor in graphD[currentVertex]) {
            const weight = graphD[currentVertex][neighbor];
            const distance = distances[currentVertex] + weight;

            if (distance < distances[neighbor]) {
                distances[neighbor] = distance;
                previous[neighbor] = currentVertex;
                pq.enqueue(neighbor, distance);
            }
        }
    }

    return { distances, previous };
}

// Exemplo de uso
const graphD = {
    'A': { 'B': 1, 'C': 4 },
    'B': { 'A': 1, 'D': 2, 'E': 5 },
    'C': { 'A': 4, 'F': 1 },
    'D': { 'B': 2 },
    'E': { 'B': 5, 'F': 2 },
    'F': { 'C': 1, 'E': 2 }
};

const result = dijkstra(graphD, 'A');
console.log("Distâncias: ", result.distances);  // Saída: {'A': 0, 'B': 1, 'C': 4, 'D': 3, 'E': 6, 'F': 5}
console.log("Caminhos: ", result.previous);    // Saída: {'A': null, 'B': 'A', 'C': 'A', 'D': 'B', 'E': 'B', 'F': 'C'}


//Algoritmo de Bellman-Ford  *** esse tema não foi abordado no livro, porem no uso do ChatGPT podemos entender melhor como esse algoritmo funciona e suas aplicações.
function bellmanFord(graph, start) {
    // Inicializa distâncias
    let distance = {};
    for (let vertex in graph) {
        distance[vertex] = Infinity;
    }
    distance[start] = 0;

    let vertices = Object.keys(graph);

    // Relaxamento iterativo
    for (let i = 0; i < vertices.length - 1; i++) {
        for (let vertex in graph) {
            for (let neighbor in graph[vertex]) {
                let weight = graph[vertex][neighbor];
                if (distance[vertex] + weight < distance[neighbor]) {
                    distance[neighbor] = distance[vertex] + weight;
                }
            }
        }
    }

    // Verificação de ciclos negativos
    for (let vertex in graph) {
        for (let neighbor in graph[vertex]) {
            let weight = graph[vertex][neighbor];
            if (distance[vertex] + weight < distance[neighbor]) {
                throw new Error("Grafo contém ciclo de peso negativo");
            }
        }
    }

    return distance;
}

// Exemplo de grafo com pesos (algumas arestas podem ter pesos negativos)
let graph = {
    'A': {'B': 1, 'C': 4},
    'B': {'C': -2, 'D': 2},
    'C': {'D': 3},
    'D': {}
};

try {
    let distances = bellmanFord(graph, 'A');
    console.log(distances);
} catch (error) {
    console.error(error.message);
}
