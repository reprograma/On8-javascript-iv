// Use o fetch para consultar o arquivo gibli.json
// Printe no console as propriedades de cada filme dos studios Gibli

fetch("gibli.json") // pocurar o arquivo
    .then(response => response.json()) // resposta e convertendo em um obj javascript
    // .then(function(response) {
    //     return response.json()
    // }) 
    .then(objeto => {
        // console.log(objeto)
        // console.log(objeto[0])
        // console.log(objeto[0].titulo)
        // console.log(objeto[0].descricao)
        for(let i = 0; i < objeto.length; i++){
            const filme = objeto[i]
            console.log(filme)
            console.log(filme.titulo)
            console.log(filme.descricao)
            console.log("---------------")
        }
    })
