# Capítulo 10: K-vizinhos mais próximos
Muito usado em ML para agrupar clusters de dados, mas também usado em desenvolvimento para recomendações de filmes, livros, e produtos de varejo. Algoritmo de várias aplicações!

## Introdução

Ao trabalhar com o algoritmo dos k-vizinhos mais próximos, é muito importante escolher as características certas para serem comparadas:
* Diretamente correlacionadas ao contexto da análise.
* Características imparciais (não tem como fazer uma avaliação de filmes se os únicos filmes disponíveis forem comédia).

## Implementação

A implementação do algoritmo KNN envolve calcular a distância entre o ponto de interesse e todos os outros pontos no conjunto de dados, ordenando essas distâncias e selecionando os K pontos mais próximos. A escolha do valor de K e a métrica de distância usada são cruciais para o desempenho do algoritmo.

## Introdução ao algoritmo de K vizinhos (KNN) e Similaridade de cosseno

O algoritmo de K-vizinhos mais próximos (KNN) é uma técnica simples e eficaz usada tanto para classificação quanto para regressão. Ele funciona observando os K exemplos mais próximos em um espaço de características e tomando decisões baseadas nesses vizinhos. A similaridade de cosseno é uma métrica comum usada em KNN para medir a similaridade entre vetores, especialmente em espaços de alta dimensionalidade, como textos.

## OCR

O OCR é um acrônimo para "Optical Character Recognition" (reconhecimento óptico de caracteres). É uma tecnologia que converte diferentes tipos de documentos, como documentos escaneados, PDFs ou imagens capturadas por uma câmera digital, em dados editáveis e pesquisáveis. Algoritmos de aprendizado de máquina, como KNN, podem ser usados para classificar caracteres reconhecidos.

## Filtros de Spam (Naive Bayes)

Embora Naive Bayes seja o algoritmo mais comum para filtros de spam, o KNN também pode ser usado para essa tarefa. O KNN filtra emails comparando novos emails com emails previamente classificados como spam ou não-spam, baseando-se nas semelhanças de suas características.

## Aprendizado de máquina

Aprendizado de máquina é uma área fascinante que usa algoritmos como o K-NN em sua essência, tendo vários algoritmos:

* K-vizinhos mais próximos é utilizado na classificação e também na regressão. Ele envolve observar os K vizinhos mais próximos.
* Classificação em grupo: Agrupar itens similares com base em suas características.
* Regressão: Adivinhar uma resposta com base nas características de vizinhos próximos.
* Converter um item em uma lista que pode ser comparada: Transformar dados em um formato que permita a comparação direta.
* Escolher características importantes para que um algoritmo K-vizinhos opere corretamente: Identificar e selecionar as características mais relevantes para o problema em questão.

KNN é simples, intuitivo e pode ser extremamente eficaz com a escolha adequada de características e métricas de similaridade.
