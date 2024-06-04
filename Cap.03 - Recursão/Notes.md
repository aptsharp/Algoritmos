### Recursão
Recusividade tem por padão funções que chamam a si mesmas ate que um codição seja dividamente satisfeita, como por exemplos a codição de um for

    for (let i = 2; i <= n; i++) {
        let temp = a + b;
        a = b;
        b = temp;
    }

esse for é chamado ate que i <=(menor ou igual á) n, isso é uma função recursiva!

### Complexidade 

A complexidade de tão função cresce de acordo com a sua entrada, ou seja toda funão recursiva é O(n).
