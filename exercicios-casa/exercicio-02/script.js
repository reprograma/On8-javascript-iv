//Criar uma mini aplicação que recebe o nome de um pokemon, acessa sua API e retorna seu nome e imagem.
//01. Fazer chamada primeiro XMLHttpRequest
//02. Mudar para fetch
//03. Lidar com os erros(retorno inválido da API)
//04. Mudar chamada para async await.
//> A API a ser usada é https://pokeapi.co/api/v2/pokemon/${nome_do_pokemon}/
//> Ver documentação em https://pokeapi.co/
//> A imagem deve ser ter essa URL https://pokeres.bastionbot.org/images/pokemon/${id_do_pokemon}.png (Esse id é retirado do retorno da requisição da API)


const nomeInput = document.querySelector('#pokemonInput')
const form = document.querySelector('pokemonForm')
const div = document.querySelector('#pokemon')
const test = nomeInput.value.toLowerCase()


form.addEventListener('submit'), function(event){
    event.preventDefault()

    fetch(`https://pokeapi.co/api/v2/pokemon/${teste}/`)
    .then(response => {
        return response.json()
    }).then(json => {
        const id = json.id
        const imagem = `https://pokeres.bastionbot.org/images/pokemon/${id}.png`
        const nome = json.name
        div.innerHTML = '<p>${nome}</p> <img src=${imagem}>'
    })


    

  
}