function TempConst(arr) 
{
  if (arr.length > 0) 
  {
    const E = arr[0];
    return E;
  }
}

const arr = Array.from({ length: 99999999 }, (_, i) => 99999999 - i);
const array = TempConst(arr);
console.log(array);
//execução imediata, a unica demora é para gerar a massa de dados.