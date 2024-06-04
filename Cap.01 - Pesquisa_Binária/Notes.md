### Notação Big-O
A notação Big O é uma anotação especial que diz o quão rápido é um algoritmo, levando em consideração que um algoritmo não se mede em segundos, mas sim pelo meio de seu crescimento(log n, n log n, n!, etc) isso influencia em seu tempo em segundos para o termino da execução.

Isso é mostrado no grafico de anotações Big-O

<img src="https://github.com/aptsharp/Algoritmos/assets/6175226/77dbe2a7-395a-4f21-8332-ae5d830de4a9" width="500" align="center">

### Alguns exemplos de algoritmos e onde são usados

* O(log n), também conhecido como tempo logarítmico. Exemplo: pesquisa binária.
* O(n), conhecido como tempo linear. Exemplo: pesquisa simples.
* O(n * log n). Exemplo: um algoritmo rápido de ordenação, como a ordenação quicksort.
* O(n²). Exemplo: um algoritmo lento de ordenação, como a ordenação por seleção
* O(n!). Exemplo: um algoritmo bastante lento, como o do caixeiro-viajante
* O(1) Tempo Constante. O tempo de execução não depende do tamanho da entrada Exemplo: Acesso direto a um elemento em um array.
* O(n²n) Tempo Exponencial - O tempo de execução cresce exponencialmente com o tamanho da entrada Exemplo: Algoritmo de Fibonacci recursivo.
* O(n^c) Tempo Polinomial - O tempo de execução cresce polinomialmente com o tamanho da entrada Exemplo: Multiplicação de matrizes de forma ingênua.
* O(√n) Tempo Sub-Linear - O tempo de execução cresce com a raiz quadrada do tamanho da entrada Exemplo: Jump Search
* O(log² n) Tempo Logarítmico ao Quadrado - O tempo de execução cresce logaritmicamente ao quadrado com o tamanho da entrada Exemplo Algoritmos que envolvem operações em árvores segmentadas.

  Percebe que o o meio de seu crescimento influencia diretamente no tempo de execução por isso existem tecnicas para quebrar esse algoritmos quando o tempo de execução se torna inviavel ou sobre humano, algumas dessas tecnicas são: Divisão e Conquista, Programação Dinâmica, Algoritmos Gulosos, Backtracking, Heurísticas e Metaheurísticas, Algoritmos Aproximados, Parallelização,Estruturas de Dados Eficientes, entre muitos outros.

### Comparativos.
No grafico podemos ver a compração de execução entre os algotimos.

<img src="https://github.com/aptsharp/Algoritmos/assets/6175226/f238f5ab-0822-4ade-ade3-30446655f792" width="500" align="center">

### Recaptulando
* A pesquisa binaria é muito mais rapida do que a pesquisa simples.
* O (og n) é mais rapida do que O(n), e O(log n) fica ainda mais rápido conforme os elementos da lista aumentam.
* A rapidez de um algoritmo não é medida em segundos.
* O tempo de execução de um algoritmo é medido por meio de seu crescimento.
* O tempo de execução dos algoritmos é expresso na notação Big O. 
