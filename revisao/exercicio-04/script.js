//Use o JSON para criar um objeto javaScript e printe no console suas propriedades

const json = `
    {
      "titulo": "A Viagem de Chihiro",
      "descricao": "A história de uma menina que viaja com seus pais mas se perde em um mundo encantado, onde precisa ajudar os habitantes a restaurar a ordem e lidar com outros problemas. O longa animado é cheio de alegorias narrativas interessantes e figuras folclóricas japonesas."
    }`

console.log(json)
const objeto = JSON.parse(json)
console.log(objeto)