
const form = document.getElementById("pokemonForm")
const input = document.getElementById("pokemonInput")
const pokemon = document.getElementById("pokemon")

form.addEventListener("submit", (evento) => chamarRequisicao(evento))

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

function criarErro(erro) {
    pokemon.innerHTML += `<p>Erro na requisição: ${erro}</p>`
}

function reset() {
    pokemon.innerHTML = ""
    input.value = ""
}

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