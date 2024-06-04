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

let arr = [64, 25, 12, 22, 11];
console.log("Array ordenado:", selectionSort(arr));
//Algoritmo de ordenação por seleção.
// 2 for, um dentro do outro é a complexidade O(n²) para esse algoritmo