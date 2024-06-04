# Tabelas Hash

## Introdução
As tabelas hash são estruturas de dados amplamente utilizadas na programação atual. Elas são similares a objetos, permitindo uma associação eficiente de chaves a valores.

## Performance e Complexidade

### Array
- **Acesso e manipulação baseados em índice** são geralmente rápidos (O(1)).
- Operações como **adição e remoção de elementos** podem ter complexidade maior, dependendo da posição.

### Objeto
- **Acesso por chave** é geralmente rápido (O(1)), mas a performance pode variar dependendo da implementação do motor JavaScript.
- Ideal para situações onde a **inserção, atualização e exclusão de pares chave-valor** são frequentes.

### Quando Usar

#### Array
- Use quando a ordem dos elementos é importante e você precisa iterar frequentemente sobre eles.
- Facilita operações que dependem da posição dos elementos.

#### Objeto
- Use quando você precisa associar valores a chaves específicas, tornando o código mais legível e fácil de manter.
- Facilita o acesso direto a elementos pelo nome da chave.

## Exemplos de Aplicações

### Array
- Lista de itens de um carrinho de compras.
- Lista de tarefas a serem executadas em ordem.

### Objeto
- Informações de um usuário (nome, idade, endereço).
- Configurações de um aplicativo (chaves e valores de configuração).

## Considerações para Decisão
Para tomar a decisão final, considere:
- **Tipo de dados**: Os dados têm uma ordem específica ou são melhor representados como pares chave-valor?
- **Operações**: Quais operações você precisa realizar frequentemente?
- **Performance**: Há requisitos de performance que tornam um tipo mais adequado que o outro?
- **Legibilidade**: Qual estrutura torna o código mais legível e fácil de manter?

## Caching
As tabelas hash são frequentemente usadas com a técnica de caching em páginas web. Problemas de limpeza de cache e demora para carregar uma página podem estar ligados à falta de uma organização adequada do hash utilizado como cache.

### Vantagens do Caching
- **Carregamento rápido** de uma página web (ex: tela de login do Facebook).
- **Redução de operações de requisição** no servidor, facilitando o tráfego de dados e evitando sobrecarga (DDos).

### Aplicações de Caching
- **Modelar relações entre dois itens**.
- **Filtrar duplicatas**.
- **Caching/memorização de dados**, em vez de solicitar estes dados do servidor.

## Colisões
Quando duas chaves diferentes geram o mesmo índice na tabela hash, ocorre uma colisão. Existem várias técnicas para tratar colisões. Vamos dar uma olhada em duas delas.

Imagine que você está inserindo uma lista de frutas em uma lista de arrays e, de repente, tenta inserir o preço dos abacates junto na hash que está as ameixas. Isso é uma colisão!

Neste exemplo, tanto a “ameixa” quanto o “abacate” são mapeados para o mesmo espaço. Logo, você deve iniciar uma lista encadeada neste espaço. Caso você queira saber o preço das bananas, esta informação ainda será acessada de maneira rápida.

![image](https://github.com/aptsharp/Algoritmos/assets/6175226/8766f241-5799-40e5-acb0-ab9f0e38593e)



### Técnicas para Tratar Colisões

#### Encadeamento
No encadeamento, cada posição da tabela hash armazena uma lista (ou outra estrutura de dados) de pares chave-valor. Quando ocorre uma colisão, o novo par chave-valor é simplesmente adicionado à lista no índice correspondente.

#### Endereçamento Aberto
No endereçamento aberto, quando ocorre uma colisão, o algoritmo procura por outra posição disponível na tabela usando um método de sondagem.

## Desempenho
No caso médio, as tabelas hash têm tempo de execução O(1) para tudo. Assim, O(1) é chamado de tempo constante. Tempo constante não é algo que acontece instantaneamente, mas sim um tempo que continuará sempre o mesmo, independentemente de quão grande a tabela hash possa ser.

### Evitando o Pior Caso
Para evitar colisões, são necessários:
- Um **baixo fator de carga**;
- Uma **boa função hash**.

## Função SHA
SHA (Secure Hash Algorithm) é uma família de funções hash criptográficas projetadas para fornecer segurança e integridade de dados. SHA foi desenvolvido pela National Security Agency (NSA) e publicado pelo National Institute of Standards and Technology (NIST).

### Aplicações do SHA
- **Integridade de Dados**: Garantir que os dados não foram alterados.
- **Assinaturas Digitais**: Verificar a autenticidade e integridade de mensagens e documentos.
- **Armazenamento Seguro de Senhas**: Proteger senhas ao armazená-las de forma segura.
- **Verificação de Arquivos**: Garantir que arquivos baixados não foram corrompidos.
- **Criação de Tabelas Hash Seguras**: Em certos casos, funções hash criptográficas são usadas para criar índices em tabelas hash, especialmente quando a segurança é uma preocupação.

As funções SHA garantem a integridade e segurança dos dados. Embora não sejam comumente usadas em tabelas hash convencionais devido ao custo computacional, são essenciais em contextos onde a segurança é crítica.

 🙋🏻 obs: Esse conteúdo é muito extenso e bastante denso levando muitas horas de estudo aqui está uddma breve introdução sobre este tema mas ainda não está nem perto de ser razoável 🪧