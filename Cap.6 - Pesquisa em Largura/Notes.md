# Capítulo 6: Pesquisa em Largura (Breadth-First Search, BFS)

## Introdução
O menor caminho é um conceito contextual e pode significar várias coisas dependendo do contexto.

### Exemplos de Aplicações
- **Inteligência Artificial**: Algoritmos que calculam o menor número de movimentos necessários para a vitória em uma partida de damas.
- **Corretor Ortográfico**: Calcular o menor número de edições para transformar uma palavra digitada incorretamente em uma palavra real (ex: modificar LEITOT para LEITOR requer apenas uma edição).
- **Geolocalização**: Encontrar um médico conveniado ao seu plano de saúde que está mais próximo de você.

Além do capítulo anterior, este capítulo traz algoritmos de grafos, que são algoritmos extremamente úteis hoje em dia. Por isso, recomenda-se ler este capítulo com muito cuidado.

## Grafos
Um grafo é um conjunto de conexões, formado por vértices e arestas. Um vértice pode ser diretamente conectado a muitos outros vértices, chamados de vizinhos.

### Pesquisa em Largura
A pesquisa em largura (BFS) é um tipo de algoritmo que utiliza grafos. Ele responde a duas perguntas principais:
1. **Existe um caminho do vértice A até o vértice B?** (Existe um vendedor de manga na minha rede?)
2. **Qual o caminho mínimo do vértice A até o vértice B?** (Quem é o vendedor de manga mais próximo?)

#### Estrutura de Dados: Fila
A pesquisa em largura utiliza uma estrutura de dados chamada FILA para explorar os vértices do grafo.

### Conexão com Tabelas Hash
As tabelas hash têm forte ligação com grafos, pois podem expressar uma relação entre dois objetos. Este conceito é muito importante.

### Digrafo (Grafo Direcionado)
Um digrafo, ou grafo direcionado, é um grafo onde as relações acontecem apenas em um sentido.

### Tempo de Execução
Se você procurar um vendedor de mangas em toda a sua rede, cada aresta (a conexão entre uma pessoa e outra) será analisada. O tempo de execução é, no mínimo, O(número de arestas).

Além disso, também será mantida uma lista com as pessoas já verificadas. Adicionar uma pessoa à lista leva um tempo constante: O(1). Fazer isso para cada pessoa terá um tempo de execução O(número de pessoas) no total.

Portanto, a pesquisa em largura tem tempo de execução O(número de pessoas + número de arestas), que é frequentemente escrito como O(V+A) (V para número de vértices, A para número de arestas).
