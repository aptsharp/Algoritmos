### Memoria
 Arrays e listas encadeadas tem uma grande diferença no armazendo de informaçãos na memoria do computador.
 
 Array as informações ficam uma ao lado da outra 
 
 <img src="https://github.com/aptsharp/Algoritmos/assets/6175226/b7181abf-f08f-4697-b59d-ca872a86ee07" width="500" align="center">

 array é como se fossem assentos do cinema, mas pode armazenar/solicitar espaços na memoria para o computador.

 #### Desvantagens 
 * Armazenar espaço na memoria e não usar, outro programa não podera usar os espaços já reservados.
 * Dificuldade de armazenar depois que todos os espaços foram preenchidos ( melhor opção, listas encadeadas)

 #### Listas Encadeadas

 <img src="https://github.com/aptsharp/Algoritmos/assets/6175226/2b190e5a-a5ce-43c3-a768-da571960a98d" width="500" align="center">

 com as listas encadeadas os itens podem estar em qualquer lugar da memoria.

 Essa facilidade se dá a cada item armazenando o endereço da memoria do proximo item, ou seja, um monte de endereços de memoria estão interligados cada um aprontando para o proximo item ( por isso que antigamente alguns sistemas operacionais tinham problemas para armazear dados quando um disco estava cheio e as informações acabavam se perdendo - se perdendo no endereçamento da memoria de onde a informação estava gravada).

 ### Contexto e utilidade de cada um.

 #### Array
 São formado por indices então é possivel pular de item por item tornando mais facil a manipulação, são otimos em ler elementos aleatorios. 
 
 #### Listas
 listas so podem ir para o ultimo elemento se passar pelo primeiro ( ou anteriro ), se precisar pular itens de uma lista não é possivel.

 ### Tempo de execução

 Array e listas encadeadas tem tempo de execução diferentes, geralmente são indiretamente propocionais.
 
 <img src="https://github.com/aptsharp/Algoritmos/assets/6175226/7e977acf-79ad-4c4e-883d-4f96651bf30c" width="500" align="center">

No Array para acrescentar um elemento teria problema de espaço para eliminar no caso da lista seria bem mais facil que no array, já que o custo de array seria bem maior.

<img src="https://github.com/aptsharp/Algoritmos/assets/6175226/fbf356df-8848-4596-b7f4-fcbc2e2758c6" width="500" align="center">

nessa imagem vemos que para alimiar um elemento de um array tudo deve ser movido, da lista encadeada não precisa, basta apenas remover o endereço da memoria.

Sendo assim listas encadeadas tem um maior custo beneficio ao longo prazo.

### Modelo Hibrido
Vamos supor que o facebook queira armazenar os dados dos seus usuarios, se usar um array tera O(1) se usar lista para pegar o ultimo elemento tera que passar por todos O(n), então a melhor opção seria misturar os 2 conceitos, já que esses dados teria que ser acessados com muita rapides e facilidade.

<img src="https://github.com/aptsharp/Algoritmos/assets/6175226/da85b41a-06dc-4ee7-a236-638819355837" width="500" align="center">


Mas ainda existes uma solução ainda melhor para esse problema proposto.

### Ordenação por seleção (Crescente)

Ordenação por seleção tem a complexidade de O(n²), são muitos bom porem são um pouco lentos o melhor custo beneficio é o Quicksort (algoritmo de ordenação rapida O(n log n)).
Sendo simples de implementar, mas não eficiente para grandes listas divido a sua complexidade quadratica.


### Recaptulando
* a memoria do seu computador é como um conjunto enorme de gavetas.
* Quando se quer armazenar multiplos elementos, usa-se um array ou uma lista.
* No array, todos os elementos são armazenados um ao lado do outro.
* Na lista, os elementos estão espalahdos e um elemento armazena o endereço do proximo elemento.
* Arrays permitem leituras rapidas.
* Listas encadeadas permitem rápidas inserções e elimanações. 
* Todos os elementos de um array devem ser do mesmo tipo (todos ints, todos doubles, e assim por diante).
