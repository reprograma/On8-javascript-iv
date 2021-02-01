// # Exercício:
// Criar uma mini aplicação que recebe o nome de um pokemon, acessa sua API e retorna seu nome e imagem.
// 01. Fazer chamada primeiro XMLHttpRequest
// 02. Mudar para fetch
// 03. Lidar com os erros(retorno inválido da API)
// 04. Mudar chamada para async await.
// > A API a ser usada é https://pokeapi.co/api/v2/pokemon/${nome_do_pokemon}/
// > Ver documentação em https://pokeapi.co/
// > A imagem deve ser ter essa URL https://pokeres.bastionbot.org/images/pokemon/${id_do_pokemon}.png (Esse id é retirado do retorno da requisição da API)

// ---> QUESTÃO 01 <--- //
// const nomeInput = document.querySelector('#pokemonInput')
// const form = document.querySelector('#pokemonForm')
// const div = document.querySelector('#pokemon')

// form.addEventListener('submit', function(event){
//     event.preventDefault()
//     const inputLowerCase = nomeInput.value.toLowerCase()
    
//     const request = new XMLHttpRequest
//     const metodo = 'GET'
//     const url = `https://pokeapi.co/api/v2/pokemon/${inputLowerCase}/`
    
//     request.open(metodo, url, true)
    
//     request.addEventListener('readystatechange', function(){
//         nomeInput.value = ''
        
//         if (request.readyState == 4 && request.status == 200){
//             const objeto = JSON.parse(request.response)
//             const nome = objeto.name
//             const id = objeto.id
//             const imagem = `https://pokeres.bastionbot.org/images/pokemon/${id}.png`
//             div.innerHTML = `<p>${nome}</p> <img src=${imagem}>`
//         }
        
//         if(request.readyState != 4 && request.status != 200){
//             div.innerHTML = 'Ops, aconteceu algo errado! Tente uma nova busca.'
//         }
//     })   
//     request.send()
// })


// ---> QUESTÃO 02 / QUESTÃO 03 <--- //
const form = document.querySelector('#pokemonForm')
const nomeInput = document.querySelector('#pokemonInput')
const div = document.querySelector('#pokemon')

form.addEventListener('submit', function(event){
    event.preventDefault()
    const inputLowerCase = nomeInput.value.toLowerCase()

    fetch(`https://pokeapi.co/api/v2/pokemon/${inputLowerCase}/`)
        .then (response =>{
            return response.json()
        }) 
        .then (json =>{
            const id = json.id
            const imagem = `https://pokeres.bastionbot.org/images/pokemon/${id}.png`
            const nome = json.name
            div.innerHTML = `<p>${nome}</p> <img src=${imagem}>`
        })
        .catch(function(erro){
            console.log(erro)
            div.innerHTML = 'Ops, aconteceu algo errado! Tente uma nova busca.'
        })
        nomeInput.value = ''
})