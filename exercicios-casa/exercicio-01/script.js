//# Exercício:
//Fazer GET na rota /users com seu user ex: get em https://api.github.com/users/reprograma e exibir sua foto do github.
//01. Fazer chamada primeiro XMLHttpRequest
//02. Mudar para fetch
//03. Lidar com os erros(retorno inválido da API)
//04. Mudar chamada para async await.
//> Documentação da API do github  https://developer.github.com/v3/
//> Requisição na API pela url https://api.github.com





const input = document.getElementById('nameInput')
const botao = document.getElementById('input2')
const div = document.getElementById('user')

botao.addEventListener("click", (e) => fazerFetch(e));

function fazerFetch(event) {
    event.preventDefault();
    const valorInput= input.value;
    console.log(valorInput);

    const url = `//api.github.com/users/${valorInput}`
    fetch(url).then(response =>{
        return response.json()
    }).then(json =>{
       const srcImg = json.avatar_url
        div.innerHTML = `<img src=${srcImg}>`
    })
}


