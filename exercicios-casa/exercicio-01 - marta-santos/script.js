// Fazer GET na rota /users com seu user ex: get em https://api.github.com/users/reprograma e exibir sua foto do github.
// > Documentação da API do github  https://developer.github.com/v3/
// > Requisição na API pela url https://api.github.com

// 01. Fazer a chamada primeiro com o fetch()
const form = document.getElementById("gitForm")
const input = document.getElementById("nameInput")
const user = document.getElementById("user")

form.addEventListener("submit", (evento) => chamarRequisicao(evento))

// const chamarRequisicao = (evento) => {
//     evento.preventDefault()
//     const nome = input.value.toLowerCase()

//     fetch(`https://api.github.com/users/${nome}`)
//         .then((resposta) => { return resposta.json() })
//         .then((json) => {
//             criarImagem(json)
//         });
// };

function criarImagem(dadosGit) {
    user.innerHTML = `
      <img src=${dadosGit.avatar_url} >
    `
}


// 02. Mudar para chamada XMLHttpRequest
// const chamarRequisicao = (evento) => {
//     evento.preventDefault()
//     const nome = input.value.toLowerCase()
//     const request = new XMLHttpRequest()
//     const metodo = "GET"
//     const url = `https://api.github.com/users/${nome}`

//     request.open(metodo, url, true)

//     request.addEventListener("readystatechange", function () {
//         if (request.readyState == 4 && request.status == 200) {
//             const data = JSON.parse(request.response)
//             criarImagem(data)
//         }
//     })

//     request.send()
// }


// 03. Lidar com os erros(retorno inválido da API)
// fetch()
// const chamarRequisicao = (evento) => {
//     evento.preventDefault()
//     const nome = input.value.toLowerCase()

//     fetch(`https://api.github.com/users/${nome}`)
//         .then((resposta) => {
//             console.log(resposta)
//             if (resposta.ok) {
//                 return resposta.json()
//             } else {
//                 criarErro(`${resposta.status}, ${resposta.statusText}!`)
//             }
//         })
//         .then((json) => criarImagem(json))
//         .catch(erro => criarErro(erro))

//     reset()
// }

function criarErro(erro) {
    user.innerHTML += `<p>Erro na requisição: ${erro}</p>`
}

function reset() {
    user.innerHTML = ""
    input.value = ""
}

// XMLHttpRequest
const chamarRequisicao = (evento) => {
    evento.preventDefault()

    const nome = input.value.toLowerCase()
    const request = new XMLHttpRequest()
    const metodo = "GET"
    const url = `https://api.github.com/users/${nome}`

    request.open(metodo, url, true)

    request.addEventListener("readystatechange", function () {
        if (request.readyState == 4 && request.status == 200) {
            const data = JSON.parse(request.response)
            criarImagem(data)
        }

        if (request.readyState == 4 && request.status != 200) {
            criarErro(`${request.status}, ${request.statusText}!`)
        }
    })

    request.send()
    reset()
}