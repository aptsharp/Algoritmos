function generatePermutations(array) {
    if (array.length === 0) return [[]];
    return array.flatMap((v, i) =>
        generatePermutations(array.slice(0, i).concat(array.slice(i + 1))).map(p => [v, ...p])
    );
}

const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const array = generatePermutations(arr)
console.log(array);

//OBS: flatMap é a mesma coisa que um for elaborado. 
// for (let i = 0; i < array.length; i++) {
//     const v = array[i];
// }

