/* # Exercício:
Fazer GET na rota /users com seu user ex: get em https://api.github.com/users/reprograma e exibir sua foto do github.
01. Fazer chamada primeiro XMLHttpRequest
02. Mudar para fetch
03. Lidar com os erros(retorno inválido da API)
04. Mudar chamada para async await.
> Documentação da API do github  https://developer.github.com/v3/
> Requisição na API pela url https://api.github.com*/

//COMEÇANDO O EXERCÍCIO

const nomeInput = document.getElementById("nameInput")
const div = document.getElementById("user")
const submit = document.querySelector("#submit")


submit.addEventListener('click', e => {
    e.preventDefault()
   // console.log(nomeInput.value)
   adicionarFotos()
 })

const adicionarFotos = () => {
    const nome = nomeInput.value
    const url = `https://api.github.com/users/${nome}`;
    //div.innerHTML = ""
    
    fetch(url)
    .then(response => response.json())
    .then(object => {
      //  console.log(object)
       //console.log(object.data) // ate aqui ta correto 
        const foto = object.avatar_url
        div.innerHTML = `<img src=${foto}>`
       // console.log(fotos)
 
       
    })
}


























