# Capítulo 7: Algoritmo de Dijkstra

## Introdução

O capítulo 7 do livro aborda o algoritmo de Dijkstra, um algoritmo eficiente para encontrar o caminho mais curto em grafos ponderados com pesos não negativos. Este algoritmo é amplamente utilizado em sistemas de navegação, redes de comunicação e muitas outras áreas que requerem otimização de caminhos.

## Arestas com Pesos Negativos

O algoritmo de Dijkstra não funciona corretamente em grafos que contêm arestas com pesos negativos. Isso ocorre porque Dijkstra assume que, ao encontrar um caminho mais curto para um vértice, esse caminho não pode ser melhorado. No entanto, com arestas de peso negativo, é possível reduzir a soma total do caminho passando repetidamente por ciclos de peso negativo. Para lidar com grafos que contêm arestas de peso negativo, é necessário usar o algoritmo de Bellman-Ford.

## Implementação

A implementação do algoritmo de Dijkstra envolve os seguintes passos:

1. **Inicialização**: Define a distância do vértice inicial para si mesmo como 0 e para todos os outros vértices como infinito. Usa uma fila de prioridade para explorar os vértices na ordem de suas distâncias atuais mínimas.
2. **Exploração dos Vértices**: Para o vértice atual, verifica todos os seus vizinhos. Para cada vizinho, calcula a distância do vértice inicial até ele, passando pelo vértice atual. Se a nova distância calculada for menor que a distância armazenada, atualiza a distância.
3. **Atualização e Repetição**: Marca o vértice atual como visitado. Seleciona o próximo vértice não visitado com a menor distância calculada como o novo vértice atual. Repete o processo até que todos os vértices sejam visitados.
4. **Finalização**: Quando todos os vértices tiverem sido visitados, as distâncias armazenadas representam os caminhos mais curtos do vértice inicial para todos os outros vértices no grafo.

## Bellman-Ford vs Dijkstra.

* Bellman-Ford: Pode lidar com grafos que contêm arestas de peso negativo. É mais lento que Dijkstra, com complexidade de tempo O(VE), onde V é o número de vértices e E é o número de arestas.
* Dijkstra: Mais rápido que Bellman-Ford para grafos sem arestas de peso negativo, com complexidade de tempo O(V^2) ou O(E + V log V) usando uma fila de prioridade. Não pode lidar com arestas de peso negativo.



## Extra - Alguns repositorios no GitHub que usam Dijkstra em seu projeto.

https://github.com/shivansh1012/DijkstraOnMaps

https://github.com/walid-git/PathPlanner

https://github.com/CGHoussem/dijkstra-gui

https://github.com/RajJoya/MapNavigator

https://github.com/fehmisener/Dijkstra-Shortest-Path-Project

