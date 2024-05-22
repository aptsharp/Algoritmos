### Memoria
 Arrays e listas encadeadas.
 array as informações ficam uma ao lado da outra 
 <imagem do livro>

 array é como se fossem assentos do cinema, mas pode armazenar/solicitar espaços na memoria para o computador.

 -desvantagens disso 
 - armazenar espaço na memoria e não usar, outro programa não podera usar tambem.
 - dificuldade de armazenar depois que todos os espaços foram preenchidos ( melhor opção, listas encadeadas)

 listas encadeadas.
 com as listas encadeadas os itens podem estar em qualquer lugar da memoria. 
 <imagem>

 essa facilidade se dá pq cada item armazena o endereço da memoria do proximo item, ou seja, um monte de endereços de memoria estão interligados. ( estudar mais sobre isso, pode ser considerado um ataque )

 ### Contexto e utilidade de cada um.

 #array
são formado por indices então é possivel pular de item por item tornando mais facil a manipulação, são otimos em ler elementos aleatorios. 
 #listas
 listas so podem ir para o ultimo elemento se passar pelo primeiro, se precisar pular itens de uma lista não é possivel.

 ### tempo de execução

 array e listas encadeadas tem tempo de execução diferentes, geralmente são indiretamente propocionais.
 <imagem >


se para acrescentar um elemento teria problema de espaço para eliminar no caso da lista seria bem mais facil que no array, já que o curso de array seria bem maior 

<imagem>

nessa imagem vemos que para alimiar um elemento de um array tudo deve ser movido, da lista encadeada não precisa, basta apenas remover o endereço da memoria.

sendo assim listas encadeadas tem um maior custo beneficio ao longo prazo.

### Hibrido
vamos supor que o facebook queira armazenar os dados dos seus usuarios, se usar um array tera O(1) se usar lista para pegar o ultimo elemento tera que passar por todos O(n), então a melhor opção seria misturar os 2 conceitos, já que esses dados teria que ser acessados com muita rapides e facilidade.

Mas ainda existes uma solução ainda melhor para esse problema proposto.

### Ordenação por seleção

### Recaptulando
* a memoria do seu computador é como um conjunto enorme de gavetas.
* Quando se quer armazenar multiplos elementos, usa-se um array ou uma lista.
* No array, todos os elementos são armazenados um ao lado do outro.
* Na lista, os elementos estão espalahdos e um elemento armazena o endereço do proximo elemento.
* Arrays permitem leituras rapidas.
* Listas encadeadas permitem rápidas inserções e elimanações. 
* Todos os elementos de um array devem ser do mesmo tipo (todos ints, todos doubles, e assim por diante).