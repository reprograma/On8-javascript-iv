// 1 USANDO O FETCH E TRATANDO ERRO

const input = document.getElementById("nameInput")
const user = document.getElementById("user")
const submit = document.getElementById("submit")

submit.addEventListener ('click', cancelEvent => {
    cancelEvent.preventDefault();
    usuarioGit()
})

const usuarioGit = () => {
    const inputValue = input.value;

    const url = `https://api.github.com/users/${inputValue}`

    fetch(url)
        .then (response => {
            if (!response.ok) {

                throw new Error(`O status do erro foi ${response.status} que quer dizer ${response.statusText}`)
    
             } else {
    
                response.json().then(object => {
                   // console.log(object);
                   user.innerHTML = `<img src="${object.avatar_url}">`
                })
             }
          })
          .catch(error => {
             user.innerHTML = `<h1>${error}</h1>`
          })
    
          nameInput.value = '';
}

// // USANDO XMLHttpRequest

// const input = document.getElementById("nameInput")
// const user = document.getElementById("user")
// const submit = document.getElementById("submit")

// submit.addEventListener ('click', cancelEvent => {
//     cancelEvent.preventDefault()
//     const inputValue = input.value;
//     const request = new XMLHttpRequest()
//     const metodo = "GET"
//     const url = `https://api.github.com/users/${inputValue}`
    
//     request.open(metodo, url, true);
    
//     request.addEventListener("readystatechange", function (){
//         if (request.readyState == 4 && request.status == 200){
//             const data = JSON.parse(request.response)
//             fotoGit(data)
//         } else{
//             user.innerHTML = `<h1>O erro foi do tipo ${request.status}, usuário não encontrado</h1>`
//             user.style.color = "red"
           
//         }
//     })
//     request.send();
//     input.value = "";
// })

// function fotoGit (objeto){
//     user.innerHTML = `<img src="${objeto.avatar_url}">`
// }
