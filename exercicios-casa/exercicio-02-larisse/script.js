// # Exercício:
// Criar uma mini aplicação que recebe o nome de um pokemon, acessa sua API e retorna seu nome e imagem.
// 01. Fazer chamada primeiro XMLHttpRequest
// 02. Mudar para fetch
// 03. Lidar com os erros(retorno inválido da API)
// 04. Mudar chamada para async await.
// > A API a ser usada é https://pokeapi.co/api/v2/pokemon/${nome_do_pokemon}/
// > Ver documentação em https://pokeapi.co/
// > A imagem deve ser ter essa URL https://pokeres.bastionbot.org/images/pokemon/${id_do_pokemon}.png (Esse id é retirado do retorno da requisição da API)

const formu = document.querySelector('#pokemonForm')
const nameInput = document.querySelector('#pokemonInput')
const div = document.querySelector('#pokemon')
formu.addEventListener('submit', function (event) {
    event.preventDefault()
    const inputPesquisa = nameInput.value.toLowerCase()
    fetch(`https://pokeapi.co/api/v2/pokemon/${inputPesquisa}/`)
        .then(response => {
            return response.json()
        })
        .then(json => {
            const id = json.id
            const imagem = `https://pokeres.bastionbot.org/images/pokemon/${id}.png`
            const nome = json.name
            div.innerHTML = `<p>${nome}</p> <img src=${imagem}>`
        })
        .catch(function (erro) {
            console.log(erro)
            div.innerHTML = `<p>O Pokemon não foi Capturado</p>`
        })
    nameInput.value = ''
}) 