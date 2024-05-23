// algoritmo de fatirial pode ser considerado como recursividade
function factorial(n) {
    if (n === 0 || n === 1) {
        return 1;
    }
    return n * factorial(n - 1);
}
console.log(factorial(100)); // a função "factorial" subistitui um for feita de maneira mais rudimentar ( for i =2; i <= n; i++)


// exemplo que tem em toda lista de exercicios é o Fibonacci, que tambem é um algoritmo recursivo.
function fibonacci(n) {
    if (n <= 1) {
        return n;
    }
    let a = 0, b = 1;
    for (let i = 2; i <= n; i++) {
        let temp = a + b;
        a = b;
        b = temp;
    }
    return b;
}
//input
console.log(fibonacci(60)); // esse algoriti tambem pode ser com uma função nativa do JS que se chamada "fibonacci"




//Função recursiva para alinhar por seleção um array
function selectionSort(arr) {
    let n = arr.length;
    for(let i = 0; i < n; i++) {
        let min_idx = i;
        for(let j = i+1; j < n; j++) {
            if(arr[j] < arr[min_idx]) {
                min_idx = j;
            }
        }
        [arr[i], arr[min_idx]] = [arr[min_idx], arr[i]];
    }
    return arr;
}

let arr = [64, 25, 12, 22, 11, 10];
console.log("Array ordenado:", selectionSort(arr));
//Algoritmo de ordenação por seleção.
// 2 for, um dentro do outro é a complexidade O(n²) para esse algoritmo