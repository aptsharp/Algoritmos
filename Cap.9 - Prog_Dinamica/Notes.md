# Capítulo 9: Programação Dinâmica

Neste capítulo, estamos aprendendo sobre programação dinâmica, uma técnica poderosa que pode complementar a caixa de ferramentas que desenvolvemos nos capítulos anteriores. A programação dinâmica resolve problemas começando por problemas menores e olhando para a forma geral do problema.

* É útil quando estamos tentando otimizar algo em relação a um limite.
* Se utiliza quando um problema pode ser dividido em subproblemas discretos (que podem ser divididos e resolvidos separadamente).
* Todas as soluções envolvem uma tabela.
* Os valores nas células são, geralmente, o que você está tentando otimizar.
* Cada célula da tabela é um subproblema, que, se possível, pode ser dividido em outros subproblemas.
* Não existe uma fórmula única para calcular uma solução em programação dinâmica.

## Introdução

A programação dinâmica é uma técnica de otimização usada para resolver problemas complexos ao dividi-los em subproblemas mais simples e resolver cada subproblema apenas uma vez, armazenando seus resultados para evitar recomputações. Isso é especialmente útil para problemas que exibem as propriedades de subestrutura ótima e subproblemas sobrepostos.

## Implementação

Vamos considerar um exemplo clássico para entender a programação dinâmica: o problema da subsequência comum mais longa (Longest Common Subsequence, LCS). Este problema envolve encontrar a subsequência mais longa que é comum a duas sequências.

## Existem alguns repositorios que abordam Distancia Levenshtein.

O algoritmo de Levenshtein calcula a distância de edição entre duas strings, que é o número mínimo de operações necessárias para transformar uma string na outra. As operações permitidas são inserção, deleção e substituição de caracteres.

https://github.com/hiddentao/fast-levenshtein
https://github.com/wolfgarbe/SymSpell
https://github.com/sindresorhus/leven
