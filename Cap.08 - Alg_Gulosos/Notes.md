# Capítulo 8: Algoritmos Gulosos

Nesse capitulo vamos ter uma noção do que são algoritmos gulososo e suas aplicações. 

* Lidando com o impossível: problemas que não têm um algoritmo de solução rápida.
* Como identificar problemas ao se deparar com eles, de forma que não perca tempo tentando achar um algoritmo rápido para solução.
* Algoritmos de aproximação para maneiras aproximadas de solução em tempo aceitável (problemas NP-Completo).
* Estratégias gulosas simples para resolver problemas.

## Introdução

O capítulo 8 do livro "Entendendo Algoritmos" de Aditya Y. Bhargava explora o uso de algoritmos gulosos, uma classe de algoritmos que fazem a escolha localmente ótima em cada etapa com a esperança de encontrar uma solução globalmente ótima. Esses algoritmos são conhecidos por sua rapidez e simplicidade, mas nem sempre garantem a solução ideal. No entanto, eles são especialmente úteis para problemas NP-completos, onde soluções exatas são inviáveis em tempo hábil.

## Implementação

O capítulo detalha várias implementações de algoritmos gulosos, abordando desde problemas clássicos, como o problema do troco, até aplicações mais complexas, como o problema da mochila fracionária. A implementação de um algoritmo guloso geralmente envolve:

1. Ordenar os elementos de acordo com algum critério de otimização.
2. Iterar sobre os elementos, fazendo a escolha localmente ótima em cada passo.
3. Verificar se a solução encontrada é válida e, se necessário, ajustá-la.

## Como Identificar Problemas que se Resolvem com Algoritmos Gulosos

Para identificar se um problema pode ser resolvido com um algoritmo guloso, considere os seguintes pontos:
1. **Subestrutura Otimizada Localmente**: A solução ótima global pode ser construída a partir de soluções ótimas locais.
2. **Escolha Gulosa**: Em cada passo, a escolha localmente ótima leva à solução global ótima.
3. **Propriedade de Subproblemas**: O problema pode ser decomposto em subproblemas que podem ser resolvidos independentemente usando a mesma estratégia gulosa.

Se um problema apresenta essas características, é provável que um algoritmo guloso seja uma abordagem eficiente.

## Noção de Conjuntos

Conjuntos são estruturas de dados semelhantes a listas, mas que não podem conter elementos repetidos. Essa propriedade é útil para certos tipos de problemas onde a unicidade dos elementos é crucial. No contexto de algoritmos gulosos, conjuntos podem ser usados para garantir que a escolha localmente ótima não inclua elementos duplicados, mantendo a solução válida.

## Extra - Alguns Repositórios no GitHub que Usam Algoritmos Gulosos

Para aprofundar o conhecimento sobre algoritmos gulosos, explore os seguintes repositórios no GitHub:

1. [Dynamic-Programming-Greedy-Algorithms](https://github.com/TyTe108/Dynamic-Programming-Greedy-Algorithms): Contém projetos de um curso de design de algoritmos, cobrindo técnicas como divide and conquer, programação dinâmica e algoritmos gulosos.
2. [Codeforces-Greedy-Algorithm-problems](https://github.com/unnati109c/Codeforces-Greedy-Algorithm-problems): Contém soluções para problemas de algoritmos gulosos do Codeforces.
3. [Canonical coin systems - greedy algorithms](https://gist.github.com/tommyod/bdd13a83d3577634b91b79b1c00bce14): Explica como os algoritmos gulosos são usados para resolver o problema de troco em sistemas de moedas canônicos.
4. [DijkstraOnMaps](https://github.com/shivansh1012/DijkstraOnMaps): Implementação do algoritmo de Dijkstra usando abordagem gulosa.
5. [PathPlanner](https://github.com/walid-git/PathPlanner): Planejamento de caminhos utilizando algoritmos gulosos para encontrar a rota mais curta.
