// Fazer GET na rota /users com seu user ex: get em https://api.github.com/users/reprograma e exibir sua foto do github.
// 01. Fazer a chamada primeiro com o fetch() & 03. Lidar com os erros(retorno inválido da API)

const inputName = document.getElementById('nameInput')
const btnSubmit = document.getElementById('btn')
const div = document.getElementById('user')

btnSubmit.addEventListener('click', (e) => fazerFetch(e))

function fazerFetch(e) {

    e.preventDefault()

    const inputNameValue = inputName.value
    const apiGithub = `https://api.github.com/users/${inputNameValue}`
    fetch(apiGithub).then(response => {
        return response.json()
    }).then(json => {
        const imgSearch = json.avatar_url
        div.innerHTML = `<img src=${imgSearch}>`
    }).catch(function (erro) {
        console.log(erro)
        div.innerHTML = 'Desculpe. Não encontramos esse usuário.'
    })

    inputName.value = ''

}


// 02. Mudar para chamada XMLHttpRequest & 03. Lidar com os erros(retorno inválido da API)

// btnSubmit.addEventListener('submit', function (e) {
//     e.preventDefault()

//     const request = new XMLHttpRequest()
//     const metodo = 'GET'
//     const url = `https://api.github.com/users/${inputName.value}`

//     request.open(metodo, url, true)

//     request.addEventListener('readystatechange', function () {

//         if (request.readyState == 4 && request.status == 200) {
//             const objeto = JSON.parse(request.response)
//             div.innerHTML = `<img src=${objeto.avatar_url}>`

//         } else {
//             div.innerHTML = 'Desculpe. Não encontramos esse usuário.'
//         }

//     })

//     request.send()

// })

