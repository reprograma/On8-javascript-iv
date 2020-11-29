// // USANDO FETCH E TRATANDO ERROS ---------------------------------------

// const nameInput = document.getElementById('nameInput');
// const submit = document.getElementById('submit');
// const user = document.getElementById('user');

// submit.addEventListener('click', cancelEvent => {
//    cancelEvent.preventDefault();
//    searchGitUser()
// })

// const searchGitUser = () => {
//    const inputValue = nameInput.value;

//    const url = `https://api.github.com/users/${inputValue}`

//    fetch(url)
//       .then(response => {

//          if (!response.ok) {

//             throw new Error(`O status do erro foi ${response.status} que quer dizer ${response.statusText}`)

//          } else {

//             response.json().then(object => {
//                // console.log(object);
//                user.innerHTML = `<img src="${object.avatar_url}">`
//             })
//          }
//       })
//      
// }

// USANDO XMLHTTPSREQUEST E TRATANDO ERROS --------------------------------

const nameInput = document.getElementById('nameInput');
const submit = document.getElementById('submit');
const user = document.getElementById('user');

submit.addEventListener('click', cancelEvent => {
   cancelEvent.preventDefault();


   const inputValue = nameInput.value;
   const request = new XMLHttpRequest()
   const method = "GET"
   const url = `https://api.github.com/users/${inputValue}`

   console.log(url);

   request.open(method, url, true);

   request.addEventListener("readystatechange", () => {

      if (request.readyState == 4 && request.status == 200) {
         const data = JSON.parse(request.response);
         getAvatar(data)
      } else {
         user.innerHTML = `<h1> O erro do tipo ${request.status}</h1>`
         user.style.color = "red"
      }
   })
   
   request.send();
   nameInput.value = '';

})

// Agora que o JSON é um objeto, podemos acessar suas chaves 

function getAvatar(object) {
   user.innerHTML = `<img src="${object.avatar_url}">`
}