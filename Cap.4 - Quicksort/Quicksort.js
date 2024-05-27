// //EXERCICIOS DO CAPITULO 4 - Quicksort.

// //1-Escreva o código para a função soma, vista anteriormente.
function sum(n){
    if(n.length == 0) return 0
    return n[0] + sum(n.slice(1));
}
const arr1 = [1,2,3,4,5,6,7,8,9,10,11,12]
const array1 = sum(arr1);
console.log(array1);
// //SLICE
// //em JS o slice tem a função de criar um array novo array copiando o array original.
// // para esse exercicio o o slice funciona da seguinte forma
// // gerado por ChatGPT***
// // sum([1, 2, 3, 4])
// //   = 1 + sum([2, 3, 4])
// //   = 1 + (2 + sum([3, 4]))
// //   = 1 + (2 + (3 + sum([4])))
// //   = 1 + (2 + (3 + (4 + sum([]))))
// //   = 1 + (2 + (3 + (4 + 0)))
// //   = 1 + (2 + (3 + 4))
// //   = 1 + (2 + 7)
// //   = 1 + 9
// //   = 10

// // 2- Escreva uma função recursiva que conte o número de itens em uma lista.

function nItem(n) {
    if (n.length === 0) return 0
     return n.length //conta quantos item tem em um array
}
const arrr2 = [1,2,3,4,5,6,7,8,9,10]
const array2 = nItem(arrr2);
console.log(array2);

//3 - Encontre o valor mais alto em uma lista

function mAlto(n) {
    if (n.length === 0) return 0
    const sub = mAlto(n.slice(1));
    return n[0] > sub ? n[0] : sub;
}
const arrrr = [11,2,3,4,5,6,7,8,9,10];
const arrayy = mAlto(arrrr);
console.log(arrayy);

// //4 - Você consegue determinar o caso-base e o caso recursivo para a pesquisa binária?

function binarySearch(arr, target, start, end) {
    // Caso base: se a sublista está vazia
    if (start > end) {
        return -1; // Elemento não encontrado
    }

    // Calcular o índice do meio
    const mid = Math.floor((start + end) / 2);

    // Caso base: elemento encontrado
    if (arr[mid] === target) {
        return mid;
    }

    // Caso recursivo: elemento menor, pesquisar na metade esquerda
    if (target < arr[mid]) {
        return binarySearch(arr, target, start, mid - 1);
    }

    // Caso recursivo: elemento maior, pesquisar na metade direita
    return binarySearch(arr, target, mid + 1, end);
}

const array3 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const target = 6;
const result = binarySearch(array3, target, 0, array3.length - 1);
console.log(result);


// Algoritmo Quicksort
function qSort(n){
    if (n.length < 2) return n
    const pivo = n[0];
    const menor = n.slice(1).filter(i => i <= pivo);
    const maior = n.slice(1).filter(i => i > pivo);

    return qSort(menor) + pivo + qSort(maior);

}
const arr = [30,200, 101, 11, 111, 645, 234, 40, 1, 2, 3, 4, 5, 6, 7, 89, 54, 27, 80];
const array = qSort(arr);
console.log(array);

