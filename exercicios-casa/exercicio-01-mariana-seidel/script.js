// # Exercício:
// Fazer GET na rota /users com seu user ex: get em https://api.github.com/users/reprograma e exibir sua foto do github.
// 01. Fazer chamada primeiro XMLHttpRequest
// 02. Mudar para fetch
// 03. Lidar com os erros(retorno inválido da API)
// 04. Mudar chamada para async await.
// > Documentação da API do github  https://developer.github.com/v3/
// > Requisição na API pela url https://api.github.com

// ---> QUESTÃO 01 <--- // 
// const formInput = document.querySelector('#nameInput')
// const div = document.querySelector('#user')
// const button = document.querySelector('#gitForm')

// button.addEventListener('submit', function(event){
//     event.preventDefault()

//     const request = new XMLHttpRequest()
//     const metodo = 'GET'
//     const url = `https://api.github.com/users/${formInput.value}`

//     request.open(metodo, url, true)

//     request.addEventListener('readystatechange', function(){
//         //console.log(request.readyState)
//         //console.log(request.status)
//         formInput.value = ''

//         if (request.readyState == 4 && request.status == 200){
//             const objeto = JSON.parse(request.response)
//             const foto = objeto.avatar_url
//             div.innerHTML = `<img src=${foto}>`
//         }

//         if(request.readyState != 4 && request.status != 200){
//             div.innerHTML = 'Usuário não encontrado!'
//         }
//     })
//     request.send()
// })


//---> QUESTÃO 02 / QUESTÃO 03 <--- //
const formInput = document.querySelector('#nameInput')
const div = document.querySelector('#user')
const button = document.querySelector('#gitForm')

button.addEventListener('submit', function(event){
    event.preventDefault();

    fetch(`https://api.github.com/users/${formInput.value}`)
        .then(response => {
            return response.json()
        }).then(json => {
            const srcImg = json.avatar_url
            div.innerHTML = `<img src=${srcImg}>`

            if(json.message == 'Not Found'){
                div.innerHTML = 'Usuário não encontrado!'
            }
        })
        .catch(function(erro){
            console.log(erro)
            div.innerHTML = 'Usuário não encontrado!'
        })
    formInput.value = ''
})

