function mergeSort(arr) {
    if (arr.length > 1) {
        const mid = Math.floor(arr.length / 2);
        const leftHalf = arr.slice(0, mid);
        const rightHalf = arr.slice(mid);

        mergeSort(leftHalf);
        mergeSort(rightHalf);

        let i = 0, j = 0, k = 0;
        while (i < leftHalf.length && j < rightHalf.length) {
            if (leftHalf[i] < rightHalf[j]) {
                arr[k] = leftHalf[i];
                i++;
            } else {
                arr[k] = rightHalf[j];
                j++;
            }
            k++;
        }

        while (i < leftHalf.length) {
            arr[k] = leftHalf[i];
            i++;
            k++;
        }

        while (j < rightHalf.length) {
            arr[k] = rightHalf[j];
            j++;
            k++;
        }
    }
}

const arr = Array.from({ length: 99999999 }, (_,i) => 99999999 -i); //esse codigo faz com que o algoritmo demore aproximadamente 3 minutos para executar.
mergeSort(arr);
console.log(arr);

//Atenção: dependendo das configurações do seu computador pode travar o seus programar abertos.
