// importando dados dos filmes contidos em filme.json (coloquem eles na pasta raiz)
const filmes = require("./filmes.json");

// transformando o objeto filmes em uma array para ter acesso ao metodos map, filter, reduce, etc
let listaDeFilmes = Array.from(filmes);

// dica: criem as funções de callback separadas e não dentro dos métodos para facilitar o racíocinio,
// além de, praticar um pouco a criação de funções em JS

// 1. gere uma lista com todos os filmes contendo a quantidade de atores no elenco (map)

// 2. gere uma lista com todos os gêneros de filmes que existem na lista de filmes (map)

// 3. liste os filmes em que o Clark de 38 anos trabalhou (filter)

// 4. liste os filmes que possuem duração maior que 130 minutos (filter)

// 5. quantos filmes duram menos que 110 minutos? (reduce)

// 6. qual é o filme com maior elenco? (reduce)
