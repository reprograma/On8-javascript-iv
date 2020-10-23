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

 // // MUDAR PARA FETCH //

// //  ---> QUESTÃO 2 <--- //

 fetch(input2) 
  .then(response => response.json()) 
     .then(function(response) {
      return response.json()
      }) 
    .then(input2 => {
  
        })
    
 
 