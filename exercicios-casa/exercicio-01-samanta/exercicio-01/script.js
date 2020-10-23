/*
# Exercício:
Fazer GET na rota /users com seu user ex: get em https://api.github.com/users/reprograma e exibir sua foto do github.
01. Fazer chamada primeiro XMLHttpRequest
02. Mudar para fetch
*/
/*
const nameInput = document.getElementById('nome do usuario')
const botao = document.getElementById('input2')
const div = document.getElementById('user')

nameInput.addEventListener("blur", function (event) {// Evento de "blur" olha para foco, qdo o input é selecionado
    event.preventDefault()
     const request = new XMLHttpRequest()
     const metodo = "GET"
     const url = `https://api.github.com/users/reprograma${nameImput.value}/json/`

     request.open(metodo, url, true)

})

request.addEventListener("readystatechange", function () {
    console.log(request)
    if (request.readyState == 4 && request.status == 200) {
    const usuario = JSON.parse(request.response)
    pencherUsuario(usuario)
    }
       request.send()
                 
})
*/

//Exercicio 2

const input = document.getElementById('nameInput')
const botao = document.getElementById('input2')
const div = document.getElementById('user')

botao.addEventListener("click", (e) => fazerFetch(e));

function fazerFetch(event) {
    event.preventDefault();
    const valorInput= input.value;
    console.log(valorInput);

    const url = `https://api.github.com/users/${valorInput}`
    fetch(url).then(response =>{
        return response.json()
    }).then(json =>{
        const srcImg = json.avatar_url
        div.innerHTML = `<img src=${srcImg}>`

        
})
} 
