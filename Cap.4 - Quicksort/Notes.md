### Quicksort
O capitulo mais aguardado!🧙🏻

Nesse capitulo vamos ver uma tecnica de dividir e conquistas ( uma tecnica muito usada ) pelos desenvolvedores, nesse caso então vemos um "Pareto" no aprendizado desse capitulo ( para quem conhece a regra de Pareto que se aplica a muita coisa na vida, ela disse que 80% dos resultados que você tem são responsaveis por 20% do seu conhecimento, ou seja esse algoritmo se bem aprendido os seus conceitos ira te dar 80% dos resultados com 20% do conhecimento de programação.)

Let's go!

#### Dividir para conquistar

Esse termo é bem exepcifico com o que o algoritmo faz, ele divide o problema para conquistar uma solução, para isso devemos seguir 3 passos.
1 - Descubrir o Caso-Base, que deve ser o caso mais simples possivel.
2 - Divida ou diminua o seu problema até que ele se torne o Caso-Base.
3 - Escolha bem o Pivô.

Esse 3 passos são essenciais para a execução do algoritmo em um tempo considerado satisfatorio para o problema que o algoritmo propoe a resolver, o metodo dividir e conquistar é um paradigma de design de algoritmos que resolve um problema. Esse método é especialmente útil para resolver problemas complexos de maneira eficiente.

#### Pivô

O Pivô sendo a parte mais importante do Quicksort, pondo elevar e muito o tempo do algoritmo, ou diminuir, o Pivô é um curinga e precisa ser feito com muita atenção. 

Ao analisarmos os *casos medio com pior caso* temos algumas conclusoes que o desenpenho do quicksort depende diretamente do Pivô.

Vamos ter por base um algoritmo que pegue sempre o primeiro elemente de um array, o quicksort não faz analise para saber se o array esta ordenado ou não, mas ele tentará ordenar o array mesmo assim, mas nesse caso de pegar o primeiro elemento do array ele não funcionara em sua totalidade, o array não tem o pivo certo para a execução do codigo nesse caso a complexidade iria para O(n), ou seja quanto mais elementos maior seria a quantidade de operações ( tempo de execução ) para finalizar o algoritmo. 

A importancia de escolher um bom Pivô vem com o pior caso de QuickSort, nesse cenário um array totalmente desordenado pode ter muiotas operações ate a sua conclusão O(n), com o Pivô certo o algoritmo entende e faz a sua divisão de forma mais assertiva tornando assim o algoritmo mais rapido em sua execução ou seja, seria a mesma coisa que dizer que O(n) * O(log n) = O(n log n) sendo esse o melhor caso.

#### Extras
Tem 2 videos a mais com esse tema para melhorar o entendimento.