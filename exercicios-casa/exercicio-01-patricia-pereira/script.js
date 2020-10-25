// Fazer GET na rota /users com seu user ex: get em https://api.github.com/users/reprograma
//  e exibir sua foto do github.
// 01. Fazer chamada primeiro XMLHttpRequest
// 02. Mudar para fetch
// 03. Lidar com os erros(retorno inválido da API)
// 04. Mudar chamada para async await.
// > Documentação da API do github  https://developer.github.com/v3/
// > Requisição na API pela url https://api.github.com

const api = "https://api.github.com/users/reprograma"

    async function getDados(url) {
    try {
        const response = await fetch(url);
        const json = await response.json();
        console.log(json);
    } catch (err) {
        console.error(err);
    }
}
getDados(api);


let user;
const input = document.getElementById('nameInput');
const botao = document.getElementById('botao');
const img = document.getElementById('img');
console.log(img.src)
let imgUrl = img.src

botao.addEventListener('click', addNome);
   
  
function addNome(e){
    e.preventDefault()
    user = input.value
    fetch(`https://api.github.com/users/${user}`)
    .then(response => response.json())
    .then(data => img.src = data.avatar_url)
        img.src = `https://api.github.com/users/${user}`
    
        console.log(img)
         
    }



