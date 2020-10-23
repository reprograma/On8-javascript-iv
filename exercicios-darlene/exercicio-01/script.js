/* const nameInput = document.getElementById('nameInput')
const submit = document.getElementById('submit')
const divId = document.getElementById('user')


//JS Moderno
 
submit.addEventListener('click', e => {
   e.preventDefault()
   link() //estou chamando a função abaixo
   //console.log(inputNameUser.value)
})

const link = () => {
   const inputValue = nameInput.value
   const url = `https://api.github.com/users/${inputValue}`
   

   fetch(url)
      .then(response => {
         if (!response.ok) {

            throw new Error(`O Status do erro foi ${response.status} quer dizer ${response.statusText}`)

         } else {
            response.json().then(object => {
               //    console.log(object.avatar_url);
               divId.innerHTML = `<img src="${object.avatar_url}">`
            })
         }
      })

      .catch(error => {
         divId.innerHTML = `<h1>${error}</h1>`
      })

      nameInput.value ="";

}

*/


// Versão XMLHttpRequest-----------------------------

const nameInput = document.getElementById('nameInput')
const submit = document.getElementById('submit')
const divId = document.getElementById('user')




submit.addEventListener('click', e => {
   e.preventDefault()

   const inputValue = nameInput.value
   const request = new XMLHttpRequest()
   const method = "GET"
   const url = `https://api.github.com/users/${inputValue}`

   request.open(method, url, true);

   request.addEventListener("readystatechange",() => {
      if (request.readyState == 4 && request.status == 200) {
         const data = JSON.parse(request.response)
         urlAvatar(data)
       }else{
         divId.innerHTML= `O erro é do tipo ${request.status} `

         //estilizando a mensagem de erro

         divId.style.fontFamily = 'Helvetica'
         divId.style.fontSize = '2rem'
         divId.style.color = '#FF0000'

       }
       
   })
   request.send();
   nameInput.value ="";
})

//Agora que o JSON é o objeto, podemos passar suas chaves

function urlAvatar(object){
   divId.innerHTML = `<img src="${object.avatar_url}">`
   
}







