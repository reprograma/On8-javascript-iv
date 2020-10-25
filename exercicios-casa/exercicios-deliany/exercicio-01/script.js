let input = document.getElementById('nameInput')
let btn = document.getElementById('input')
let div = document.getElementById('user')

botao.addEventListener("click", (e) => fazerFetch(e));

function fazerFetch(event) {
    event.preventDefault();
    const valorInput= input.value;
    console.log(valorInput);

    const url = `https://api.github.com/users/${valorInput}`
    fetch(url)
    .then(response =>{
        return response.json()
    })
    .then(json =>{
        const imagem = json.avatar_url;
        div.innerHTML = `<img src=${imagem}>`
        div.innerHTML = `<imagem src=${imagem}>`
    })
 }