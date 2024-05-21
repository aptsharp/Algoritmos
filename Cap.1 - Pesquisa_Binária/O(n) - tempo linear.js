function tempoLinear(arr) 
{
 let arrNew = [];
 let i;
  if (arr.length > 0) 
  {
    for (i = 0; i < arr.length; i++)
        {
            arrNew[i] = arr[i]; // copia todos os elementos de uma array para outro array, quando mais elementos, mais demorado!
            //esse codigo vai ser de principio para o O(n log n), será preciso 3 arrays nessa solução.
        }
  }
  let result = `${arr[0]} - ${arrNew[i-1]}`;
  return result;
}

const arr = Array.from({ length: 99999999 }, (_, i) => 99999999 - i);
// const arr = [10, 20, 30, 40, 50];
const array = tempoLinear(arr);
console.log(array);
//Quanto mais elementos mais domorado pra concluir.