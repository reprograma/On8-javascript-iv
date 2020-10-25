const form = document.querySelector('#pokemonForm')
const input = document.querySelector('#pokemonInput')
const div = document.querySelector('#pokemon')
div.classList.add('classeimg')

// form.addEventListener('submit', function (e) {
//     e.preventDefault()

//     fetch(`https://pokeapi.co/api/v2/pokemon/${input.value}/`)
//         .then((resposta) => {
//             if (resposta.status == 200) {
//                 resposta.json().then((json => {
//                     const idPokemon = json.id

//                     div.innerHTML = `<img src="https://pokeres.bastionbot.org/images/pokemon/${idPokemon}.png"><strong><p>
//         ${json.name}</p></strong>`
//                 }))
//             } else {
//                 div.innerHTML = `<p>Não existe um pokemon chamado<strong>
//         ${input.value}</strong>.</p>`
//             }
//         })

//         .catch((erro) => {
//             div.innerHTML = 'Ops, aconteceu algo errado!'
//             return erro
//         })
//         input.value = ''

// })

form.addEventListener('submit', function (e) {
    e.preventDefault()

    const request = new XMLHttpRequest()

    request.open("GET", `https://pokeapi.co/api/v2/pokemon/${input.value}/`, true)

    request.addEventListener('readystatechange', function () {

        if (request.status == 200 && request.readyState == 4) {
            const objeto = JSON.parse(request.response)
            const idPokemon = objeto.id

            div.innerHTML = `<img src="https://pokeres.bastionbot.org/images/pokemon/${idPokemon}.png"><strong><p>
        ${objeto.name}</p></strong>`
        } else {
            div.innerHTML = `<p>Não existe um pokemon chamado<strong>
        ${input.value}</strong>.</p>`
        }
    })
    request.send()
    input.value = ''

})