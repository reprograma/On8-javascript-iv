// Criar uma mini aplicação que recebe o nome de um pokemon, acessa sua API e retorna seu nome e imagem.
// > A API a ser usada é https://pokeapi.co/api/v2/pokemon/${nome_do_pokemon}/
// > Ver documentação em https://pokeapi.co/
// > A imagem deve ser ter essa URL https://pokeres.bastionbot.org/images/pokemon/${id_do_pokemon}.png (Esse id é retirado do retorno da requisição da API)

// 01. Fazer a chamada primeiro com o fetch()
const form = document.getElementById("pokemonForm")
const input = document.getElementById("pokemonInput")
const pokemon = document.getElementById("pokemon")

form.addEventListener("submit", (evento) => chamarRequisicao(evento))

// const chamarRequisicao = (evento) => {
//     evento.preventDefault()
//     const pokemonNome = input.value.toLowerCase()

//     fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonNome}/`)
//         .then((resposta) => { return resposta.json() })
//         .then((json) => {
//             inserirPokemonPagina(json)
//         })
// }

const inserirPokemonPagina = (json) => {
    const paragrafo = document.createElement("p")
    const imagem = document.createElement("img")
    const div = document.createElement("div")

    paragrafo.textContent = json.name
    imagem.setAttribute(
        "src",
        `https://pokeres.bastionbot.org/images/pokemon/${json.id}.png`
    )

    div.appendChild(paragrafo)
    div.appendChild(imagem)
    pokemon.appendChild(div)
}

// 02. Mudar para chamada XMLHttpRequest
// const chamarRequisicao = (evento) => {
//     evento.preventDefault()
//     const pokemonNome = input.value.toLowerCase()
//     const request = new XMLHttpRequest()
//     const metodo = "GET"
//     const url = `https://pokeapi.co/api/v2/pokemon/${pokemonNome}/`

//     request.open(metodo, url, true)

//     request.addEventListener("readystatechange", function () {
//         if (request.readyState == 4 && request.status == 200) {
//             const data = JSON.parse(request.response)
//             inserirPokemonPagina(data)
//         }
//     })

//     request.send()
// }

// 03. Lidar com os erros(retorno inválido da API)
// fetch()
// const chamarRequisicao = (evento) => {
//     evento.preventDefault()
//     const pokemonNome = input.value.toLowerCase()

//     fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonNome}/`)
//         .then((resposta) => { 
//             if (resposta.ok) {
//                 return resposta.json()
//             } else {
//                 criarErro(`${resposta.status} ${resposta.statusText}!`)
//             }
//         })
//         .then((json) => inserirPokemonPagina(json))
//         .catch(erro => criarErro(erro))

//     reset()
// }

function criarErro(erro) {
    pokemon.innerHTML += `<p>Erro na requisição: ${erro}</p>`
}

function reset() {
    pokemon.innerHTML = ""
    input.value = ""
}

// XMLHttpRequest
const chamarRequisicao = (evento) => {
    evento.preventDefault()
    const pokemonNome = input.value.toLowerCase()
    const request = new XMLHttpRequest()
    const metodo = "GET"
    const url = `https://pokeapi.co/api/v2/pokemon/${pokemonNome}/`

    request.open(metodo, url, true)

    request.addEventListener("readystatechange", function () {
        if (request.readyState == 4 && request.status == 200) {
            const data = JSON.parse(request.response)
            inserirPokemonPagina(data)
        }
        if (request.readyState == 4 && request.status != 200) {
            criarErro(`${request.status} ${request.statusText}!`)
        }
    })

    request.send()
}