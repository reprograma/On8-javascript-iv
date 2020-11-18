// Criar uma mini aplicação que recebe o nome de um pokemon, acessa sua API e retorna seu nome e imagem.
// 01. Fazer a chamada primeiro com o fetch() & 03. Lidar com os erros(retorno inválido da API)

const inputName = document.getElementById('pokemonInput')
const form = document.getElementById('pokemonForm')
const div = document.getElementById('pokemon')

form.addEventListener('submit', function(e){
    e.preventDefault()
    const inputValue = inputName.value.toLowerCase()

    fetch(`https://pokeapi.co/api/v2/pokemon/${inputValue}/`)
        .then (response =>{
            return response.json()
        }).then (json =>{
            div.innerHTML = `<p>${json.name}</p> <img src='https://pokeres.bastionbot.org/images/pokemon/${json.id}.png'>`
        }).catch((erro) => {
            div.innerHTML = 'Desculpe. Ocorreu algum erro. Tente novamente.'
            return erro
        })

        inputName.value = ''

}) 



// 02. Mudar para chamada XMLHttpRequest & 03. Lidar com os erros(retorno inválido da API)

// form.addEventListener('submit', function(e){
//     e.preventDefault()
//     const inputValue = inputName.value.toLowerCase()

//     const request = new XMLHttpRequest
//     const metodo = 'GET'
//     const url = `https://pokeapi.co/api/v2/pokemon/${inputValue}/`

//     request.open(metodo, url, true)

//     request.addEventListener('readystatechange', function(){

//         if (request.readyState == 4 && request.status == 200){
//             const objeto = JSON.parse(request.response)
//             div.innerHTML = `<p>${objeto.name}</p> <img src='https://pokeres.bastionbot.org/images/pokemon/${objeto.id}.png'>`

//         } else {
//             div.innerHTML = 'Desculpe. Ocorreu algum erro. Tente novamente.'
//         }

//     })   

//     request.send()

// })

