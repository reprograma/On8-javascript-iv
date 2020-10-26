//Fazer GET na rota /users com seu user ex: get em https://api.github.com/users/reprograma e exibir sua foto do github.
//01. Fazer chamada primeiro XMLHttpRequest
//02. Mudar para fetch
//03. Lidar com os erros(retorno inválido da API)
//04. Mudar chamada para async await.
//> Documentação da API do github  https://developer.github.com/v3/
//> Requisição na API pela url https://api.github.com

const inputNome = document.getElementById('nameInput')
const inputProcurar = document.getElementById('search')
const divUser = document.getElementById('user')
inputProcurar.addEventListener('click', function (e) {
    e.preventDefault();
    const inputValue = inputNome.value;
    const request = new XMLHttpRequest()
    const metodo = "GET"
    const url = `https://api.github.com/users/${inputValue}`
    request.open(metodo, url, true);
    request.addEventListener("readystatechange", () => {
        if (request.readyState == 4 && request.status == 200) {
            const avatar = JSON.parse(request.response);
            divUser.innerHTML = `<img src="${avatar.avatar_url}">`
        } else {
            divUser.innerHTML = `<p> Não encontramos sua foto </p>`

        }
    })
    inputNome.value = "";
    request.send();
})

const inputNome = document.getElementById('nameInput')
const inputProcurar = document.getElementById('search')
const divUser = document.getElementById('user')
inputProcurar.addEventListener('click', function (event) {
    event.preventDefault()
    const usuario = inputNome.value
    const url = `https://api.github.com/users/${usuario}`
    fetch(url)
        .then(response => response.json())
        .then(github => {
            const avatarGit = github.avatar_url
            divUser.innerHTML = `<img src="${avatarGit}"/>`
        })
        .catch(function (erro) {
            divUser.innerHTML = `<p> Não encontramos sua foto </p>`
        })
    divUser.value = ""
    inputNome.value = ""

})

