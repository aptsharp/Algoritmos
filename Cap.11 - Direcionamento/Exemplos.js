//Todos os exemplos de codigos foram gerados por inteligencia artificial somente para entendimento do conceito.

// ARVORES BINARIAS
// Definindo os nós da árvore binária
class TreeNode {
    constructor(value) {
        this.value = value;
        this.left = null;
        this.right = null;
    }
}

// Definindo a árvore binária e suas funções de inserção e busca
class BinaryTree {
    constructor() {
        this.root = null;
    }

    insert(value) {
        const newNode = new TreeNode(value);
        if (this.root === null) {
            this.root = newNode;
        } else {
            this.insertNode(this.root, newNode);
        }
    }

    insertNode(node, newNode) {
        if (newNode.value < node.value) {
            if (node.left === null) {
                node.left = newNode;
            } else {
                this.insertNode(node.left, newNode);
            }
        } else {
            if (node.right === null) {
                node.right = newNode;
            } else {
                this.insertNode(node.right, newNode);
            }
        }
    }

    search(value) {
        return this.searchNode(this.root, value);
    }

    searchNode(node, value) {
        if (node === null) {
            return false; // Valor não encontrado
        }

        if (value < node.value) {
            return this.searchNode(node.left, value);
        } else if (value > node.value) {
            return this.searchNode(node.right, value);
        } else {
            return true; // Valor encontrado
        }
    }
}

// Criando a árvore binária
const tree = new BinaryTree();

// Inserindo valores na árvore
tree.insert(10);
tree.insert(5);
tree.insert(15);
tree.insert(3);
tree.insert(7);
tree.insert(12);
tree.insert(18);

// Realizando buscas na árvore
console.log(tree.search(7)); // true
console.log(tree.search(20)); // false

//------------------------------------------------------------------
// Transformada de Fourier
// Serve para varias coisas desde aplicativos que identifica musicas como o Shazan ate seguenciamento de DNA.

// Definindo a função Complex
class Complex {
    constructor(real, imag) {
        this.real = real;
        this.imag = imag;
    }

    add(other) {
        return new Complex(this.real + other.real, this.imag + other.imag);
    }

    multiply(other) {
        return new Complex(
            this.real * other.real - this.imag * other.imag,
            this.real * other.imag + this.imag * other.real
        );
    }

    magnitude() {
        return Math.sqrt(this.real ** 2 + this.imag ** 2);
    }

    toString() {
        return `${this.real} + ${this.imag}i`;
    }
}

// Função para calcular a DFT
function dft(signal) {
    const N = signal.length;
    let result = [];

    for (let k = 0; k < N; k++) {
        let sum = new Complex(0, 0);
        for (let n = 0; n < N; n++) {
            const angle = (2 * Math.PI * k * n) / N;
            const twiddleFactor = new Complex(Math.cos(angle), -Math.sin(angle));
            sum = sum.add(twiddleFactor.multiply(new Complex(signal[n], 0)));
        }
        result.push(sum);
    }

    return result;
}

// Exemplo de sinal no tempo
const signal = [1, 0, -1, 0];

// Calculando a DFT do sinal
const dftResult = dft(signal);

// Exibindo os resultados
dftResult.forEach((value, index) => {
    console.log(`X[${index}] = ${value.toString()} (Magnitude: ${value.magnitude()})`);
});


//------------------------------------------------------------------
// Algoritmos Paralelos.
// para fixar o conceito de paralelismo a outra parte desse algoritmo esta esta no arquivo anexado. 
//main
const { Worker } = require('worker_threads');
const path = require('path');

function parallelSum(array, numWorkers) {
    return new Promise((resolve, reject) => {
        const workers = [];
        const segmentSize = Math.ceil(array.length / numWorkers);
        let completedWorkers = 0;
        let totalSum = 0;

        const workerPath = path.resolve(__dirname, 'worker.js'); //__dirname: pega o caminho absoluto // path.resolve obtém o caminho absoluto de onde o arquivo esta. 

        for (let i = 0; i < numWorkers; i++) {
            const worker = new Worker(workerPath);
            workers.push(worker);

            const start = i * segmentSize;
            const end = Math.min(start + segmentSize, array.length);

            worker.postMessage({ start, end, array });

            worker.on('message', (sum) => {
                totalSum += sum;
                completedWorkers++;

                if (completedWorkers === numWorkers) {
                    resolve(totalSum);
                    workers.forEach(worker => worker.terminate());
                }
            });

            worker.on('error', (error) => {
                reject(error);
                workers.forEach(worker => worker.terminate());
            });
        }
    });
}

// Exemplo de uso
const array = Array.from({ length: 1000000 }, () => Math.floor(Math.random() * 100));
const numWorkers = 4;

parallelSum(array, numWorkers).then(sum => {
    console.log(`A soma total é: ${sum}`);
}).catch(error => {
    console.error('Ocorreu um erro:', error);
});



//------------------------------------------------------------------
// Estrura de dados probabilisticas - Filtro de Bloom

class BloomFilter {
    constructor(size = 100) {
        this.size = size;
        this.bitArray = new Array(size).fill(0);
        this.hashFunctions = [
            this.hashFunction1.bind(this),
            this.hashFunction2.bind(this),
            this.hashFunction3.bind(this)
        ];
    }

    // Função de hash 1
    hashFunction1(item) {
        let hash = 0;
        for (let i = 0; i < item.length; i++) {
            hash = (hash << 5) - hash + item.charCodeAt(i);
            hash |= 0; // Converte para 32 bits
        }
        return Math.abs(hash % this.size);
    }

    // Função de hash 2
    hashFunction2(item) {
        let hash = 0;
        for (let i = 0; i < item.length; i++) {
            hash = item.charCodeAt(i) + ((hash << 5) - hash);
            hash |= 0; // Converte para 32 bits
        }
        return Math.abs(hash % this.size);
    }

    // Função de hash 3
    hashFunction3(item) {
        let hash = 5381;
        for (let i = 0; i < item.length; i++) {
            hash = (hash * 33) ^ item.charCodeAt(i);
        }
        return Math.abs(hash % this.size);
    }

    // Método para adicionar um item ao filtro
    add(item) {
        this.hashFunctions.forEach((hashFunction) => {
            const index = hashFunction(item);
            this.bitArray[index] = 1;
        });
    }

    // Método para verificar se um item está no filtro
    contains(item) {
        return this.hashFunctions.every((hashFunction) => {
            const index = hashFunction(item);
            return this.bitArray[index] === 1;
        });
    }
}

// Exemplo de uso
const bloomFilter = new BloomFilter(100);

// Adicionando elementos ao filtro
bloomFilter.add('apple');
bloomFilter.add('banana');
bloomFilter.add('orange');

// Verificando se os elementos estão no filtro
console.log(bloomFilter.contains('apple')); // true
console.log(bloomFilter.contains('banana')); // true
console.log(bloomFilter.contains('orange')); // true
console.log(bloomFilter.contains('grape')); // false (ou possivelmente true devido a falso positivo)



//------------------------------------------------------------------
// Algoritmo SHA
// Constantes e funções auxiliares
const K = [
    0x428a2f98, 0x71374491, 0xb5c0fbcf, 0xe9b5dba5, 0x3956c25b, 0x59f111f1, 0x923f82a4, 0xab1c5ed5,
    0xd807aa98, 0x12835b01, 0x243185be, 0x550c7dc3, 0x72be5d74, 0x80deb1fe, 0x9bdc06a7, 0xc19bf174,
    0xe49b69c1, 0xefbe4786, 0x0fc19dc6, 0x240ca1cc, 0x2de92c6f, 0x4a7484aa, 0x5cb0a9dc, 0x76f988da,
    0x983e5152, 0xa831c66d, 0xb00327c8, 0xbf597fc7, 0xc6e00bf3, 0xd5a79147, 0x06ca6351, 0x14292967,
    0x27b70a85, 0x2e1b2138, 0x4d2c6dfc, 0x53380d13, 0x650a7354, 0x766a0abb, 0x81c2c92e, 0x92722c85,
    0xa2bfe8a1, 0xa81a664b, 0xc24b8b70, 0xc76c51a3, 0xd192e819, 0xd6990624, 0xf40e3585, 0x106aa070,
    0x19a4c116, 0x1e376c08, 0x2748774c, 0x34b0bcb5, 0x391c0cb3, 0x4ed8aa4a, 0x5b9cca4f, 0x682e6ff3,
    0x748f82ee, 0x78a5636f, 0x84c87814, 0x8cc70208, 0x90befffa, 0xa4506ceb, 0xbef9a3f7, 0xc67178f2
];

function rotr(n, x) {
    return (x >>> n) | (x << (32 - n));
}

function sha256(message) {
    // Inicializar variáveis de hash
    let h0 = 0x6a09e667;
    let h1 = 0xbb67ae85;
    let h2 = 0x3c6ef372;
    let h3 = 0xa54ff53a;
    let h4 = 0x510e527f;
    let h5 = 0x9b05688c;
    let h6 = 0x1f83d9ab;
    let h7 = 0x5be0cd19;

    // Preprocessamento
    let bytes = new TextEncoder().encode(message);
    let bits = new Uint8Array([...bytes, 0x80, ...new Uint8Array((64 - ((bytes.length + 9) % 64)) % 64)]);
    let bitLen = bytes.length * 8;
    let lenArray = new Uint8Array(8);
    new DataView(lenArray.buffer).setUint32(4, bitLen, false);
    bits = new Uint8Array([...bits, ...lenArray]);

    // Processamento dos blocos de 512 bits
    for (let i = 0; i < bits.length / 64; i++) {
        let w = new Uint32Array(64);
        for (let j = 0; j < 16; j++) {
            w[j] = bits[i * 64 + j * 4] << 24 | bits[i * 64 + j * 4 + 1] << 16 | bits[i * 64 + j * 4 + 2] << 8 | bits[i * 64 + j * 4 + 3];
        }
        for (let j = 16; j < 64; j++) {
            let s0 = rotr(7, w[j - 15]) ^ rotr(18, w[j - 15]) ^ (w[j - 15] >>> 3);
            let s1 = rotr(17, w[j - 2]) ^ rotr(19, w[j - 2]) ^ (w[j - 2] >>> 10);
            w[j] = (w[j - 16] + s0 + w[j - 7] + s1) | 0;
        }
        let a = h0;
        let b = h1;
        let c = h2;
        let d = h3;
        let e = h4;
        let f = h5;
        let g = h6;
        let h = h7;
        for (let j = 0; j < 64; j++) {
            let S1 = rotr(6, e) ^ rotr(11, e) ^ rotr(25, e);
            let ch = (e & f) ^ (~e & g);
            let temp1 = (h + S1 + ch + K[j] + w[j]) | 0;
            let S0 = rotr(2, a) ^ rotr(13, a) ^ rotr(22, a);
            let maj = (a & b) ^ (a & c) ^ (b & c);
            let temp2 = (S0 + maj) | 0;
            h = g;
            g = f;
            f = e;
            e = (d + temp1) | 0;
            d = c;
            c = b;
            b = a;
            a = (temp1 + temp2) | 0;
        }
        h0 = (h0 + a) | 0;
        h1 = (h1 + b) | 0;
        h2 = (h2 + c) | 0;
        h3 = (h3 + d) | 0;
        h4 = (h4 + e) | 0;
        h5 = (h5 + f) | 0;
        h6 = (h6 + g) | 0;
        h7 = (h7 + h) | 0;
    }

    // Concatenação final do hash
    return [h0, h1, h2, h3, h4, h5, h6, h7].map(h => ('00000000' + h.toString(16)).slice(-8)).join('');
}

// Exemplo de uso
const message = 'Hello, World!';
const hash = sha256(message);

console.log(`Mensagem: ${message}`);
console.log(`SHA-256 Hash: ${hash}`);

//------------------------------------------------------------------
//-> Algoritmo de Diffie-Hellman. ( algoritmo de criptografia )
const crypto = require('crypto');

// Função para gerar números primos grandes
function generatePrime(bits) {
    return new Promise((resolve, reject) => {
        crypto.generatePrime(bits, { safe: true }, (err, prime) => {
            if (err) reject(err);
            else resolve(BigInt(prime.toString()));
        });
    });
}

// Função para gerar um número aleatório grande
function generateRandomBigInt(bits) {
    return new Promise((resolve, reject) => {
        crypto.randomBytes(bits / 8, (err, buf) => {
            if (err) reject(err);
            else resolve(BigInt('0x' + buf.toString('hex')));
        });
    });
}

// Implementação do Diffie-Hellmanconst crypto = require('crypto');

// Função para gerar números primos grandes
function generatePrime(bits) {
    return new Promise((resolve, reject) => {
        crypto.generatePrime(bits, { bigint: true, safe: true }, (err, prime) => {
            if (err) reject(err);
            else resolve(prime);
        });
    });
}

// Função para gerar um número aleatório grande
function generateRandomBigInt(bits) {
    return new Promise((resolve, reject) => {
        crypto.randomBytes(bits / 8, (err, buf) => {
            if (err) reject(err);
            else resolve(BigInt('0x' + buf.toString('hex')));
        });
    });
}

// Implementação do Diffie-Hellman
async function diffieHellman() {
    // Gerar números primos públicos p e g
    const p = await generatePrime(2048);
    const g = BigInt(2); // g geralmente é pequeno e fixo, como 2

    console.log(`Número primo p: ${p}`);
    console.log(`Gerador g: ${g}`);

    // Chave privada de Alice
    const a = await generateRandomBigInt(2048);
    console.log(`Chave privada de Alice (a): ${a}`);

    // Chave pública de Alice
    const A = modExp(g, a, p);
    console.log(`Chave pública de Alice (A): ${A}`);

    // Chave privada de Bob
    const b = await generateRandomBigInt(2048);
    console.log(`Chave privada de Bob (b): ${b}`);

    // Chave pública de Bob
    const B = modExp(g, b, p);
    console.log(`Chave pública de Bob (B): ${B}`);

    // Chave compartilhada calculada por Alice
    const sAlice = modExp(B, a, p);
    console.log(`Chave compartilhada calculada por Alice: ${sAlice}`);

    // Chave compartilhada calculada por Bob
    const sBob = modExp(A, b, p);
    console.log(`Chave compartilhada calculada por Bob: ${sBob}`);

    // As chaves compartilhadas devem ser iguais
    console.log(`As chaves compartilhadas são iguais: ${sAlice === sBob}`);
}

// Função de exponenciação modular (BigInt)
function modExp(base, exp, mod) {
    if (mod === BigInt(1)) return BigInt(0);
    let result = BigInt(1);
    base = base % mod;
    while (exp > 0) {
        if (exp % BigInt(2) === BigInt(1)) {
            result = (result * base) % mod;
        }
        exp = exp >> BigInt(1);
        base = (base * base) % mod;
    }
    return result;
}

// Executar o protocolo Diffie-Hellman
diffieHellman().catch(console.error);

//------------------------------------------------------------------
// Programação Linear - maximizar lucros.

function simplex(c, A, b) {
    const m = A.length; // número de restrições
    const n = c.length; // número de variáveis
    const tableau = Array(m + 1).fill(null).map(() => Array(n + m + 1).fill(0));

    // Preenchendo a tabela Simplex
    for (let i = 0; i < m; i++) {
        for (let j = 0; j < n; j++) {
            tableau[i][j] = A[i][j];
        }
        tableau[i][n + i] = 1; // variáveis de folga
        tableau[i][n + m] = b[i];
    }
    for (let j = 0; j < n; j++) {
        tableau[m][j] = c[j];
    }

    // Função para encontrar a coluna pivot
    const pivotColumn = () => {
        let index = 0;
        for (let j = 1; j < n + m; j++) {
            if (tableau[m][j] > tableau[m][index]) {
                index = j;
            }
        }
        return index;
    };

    // Função para encontrar a linha pivot
    const pivotRow = (col) => {
        let index = -1;
        for (let i = 0; i < m; i++) {
            if (tableau[i][col] > 0) {
                const ratio = tableau[i][n + m] / tableau[i][col];
                if (index === -1 || ratio < tableau[index][n + m] / tableau[index][col]) {
                    index = i;
                }
            }
        }
        return index;
    };

    // Função para realizar a operação pivot
    const pivot = (row, col) => {
        const pivotElement = tableau[row][col];
        for (let j = 0; j <= n + m; j++) {
            tableau[row][j] /= pivotElement;
        }
        for (let i = 0; i <= m; i++) {
            if (i !== row) {
                const factor = tableau[i][col];
                for (let j = 0; j <= n + m; j++) {
                    tableau[i][j] -= factor * tableau[row][j];
                }
            }
        }
    };

    // Iteração do Simplex
    while (true) {
        const col = pivotColumn();
        if (tableau[m][col] <= 0) break;
        const row = pivotRow(col);
        if (row === -1) throw new Error('Solução ilimitada');
        pivot(row, col);
    }

    // Extraindo a solução
    const solution = Array(n).fill(0);
    for (let i = 0; i < m; i++) {
        let isBasic = true;
        let index = -1;
        for (let j = 0; j < n; j++) {
            if (tableau[i][j] === 1) {
                if (index === -1) {
                    index = j;
                } else {
                    isBasic = false;
                    break;
                }
            } else if (tableau[i][j] !== 0) {
                isBasic = false;
                break;
            }
        }
        if (isBasic && index !== -1) {
            solution[index] = tableau[i][n + m];
        }
    }
    return { solution, optimalValue: tableau[m][n + m] };
}

// Exemplo de uso
const c = [3, 2];
const A = [
    [2, 1],
    [2, 3],
    [3, 1]
];
const b = [18, 42, 24];

const result = simplex(c, A, b);
console.log(`Solução ótima - Simplex ${result.solution}`);
console.log(`Valor ótimo - Simplex ${result.optimalValue}`);

