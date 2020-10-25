const input = document.querySelector('#nameInput')
const form = document.querySelector('#gitForm')
const div = document.querySelector('#user')

form.addEventListener('submit', function (e) {
    e.preventDefault()

    fetch(`https://api.github.com/users/${input.value}`)
        .then((resposta) => {
            // console.log(resposta);
            if (resposta.status == 200) {
                resposta.json().then(json => {
                    // console.log(json.avatar_url)
                    div.innerHTML = `<img src="${json.avatar_url}">
            <br> <p>${json.name}</p>`
                })
            } else {
                div.innerHTML = `<p>O usuário <strong>${input.value}</strong> não existe</p>`
            }
        })

        .catch(function (erro) {
            console.log(erro)
            div.innerHTML = 'Ops, aconteceu algo errado!'
        })

    input.value = ''
})

// form.addEventListener("submit", function(e){
//     e.preventDefault()

//     const requisicao = new XMLHttpRequest()
//     const metodo = "GET"
//     const url = `https://api.github.com/users/${input.value}`

//     requisicao.open(metodo, url, true);
//     requisicao.addEventListener("readystatechange", function() {
//         if (requisicao.status == 200 && requisicao.readyState == 4){
//             const dados = JSON.parse(requisicao.response)
//             // console.log(dados);
//             div.innerHTML = `<img src="${dados.avatar_url}">
//             <br> <p>${dados.name}</p>`
//         }
//         div.innerHTML = `<p>O usuário <strong>${input.value}</strong> não existe</p>`
//     })    
//         requisicao.send()
// })