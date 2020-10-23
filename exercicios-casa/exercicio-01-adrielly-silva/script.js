const inputName = document.getElementById('nameInput');
const button = document.getElementById('button')
let divUser = document.getElementById('user');

//USANDO FETCH

button.addEventListener('click', function(event)  {
    event.preventDefault();
  
    const username = inputName.value;
    const url = `https://api.github.com/users/${username}`
    fetch(url)
        .then(response => response.json())
        .then(github => {
            const avatarGithub = github.avatar_url;
            
            divUser.innerHTML = `<img src="${avatarGithub}"/>`;
        })
        .catch(function(erro) { 
          divUser.innerHTML = `<p> Não encontramos o user :( </p>`
        });

        divUser.value = "";
        inputName.value = "";




}) 

// USANDO XMLHTTPREQUEST

button.addEventListener('click', function(e){


  e.preventDefault();


  const inputValue = inputName.value;
  const request = new XMLHttpRequest()
  const metodo = "GET"
  const url = `https://api.github.com/users/${inputValue}`


  request.open(metodo, url, true);

  request.addEventListener("readystatechange", () => {

     if (request.readyState == 4 && request.status == 200) {
        const avatar = JSON.parse(request.response);
        divUser.innerHTML = `<img src="${avatar.avatar_url}">`
     } else {
        divUser.innerHTML = `<p> Não encontramos o user :( </p>`
        
     }
  })

  inputName.value = "";
  request.send();

})

  
