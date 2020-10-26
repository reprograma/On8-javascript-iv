const nome = document.getElementById('nameInput');
const button = document.getElementById('button')
let usuario = document.getElementById('user');

//Utilizando o FETCH

button.addEventListener('click', function(event)  {
    event.preventDefault();

    const username = nome.value;
    const url = `https://api.github.com/users/${username}`
    fetch(url)
        .then(response => response.json())
        .then(github => {
            const avatarGit = github.avatar_url;

            usuario.innerHTML = `<img src="${avatarGit}"/>`;
        })
        .catch(function(erro) { 
          usuario.innerHTML = `<p> Infelizmente o usuario não foi encontrado </p>`
        });

        usuario.value = "";
        nome.value = "";

}) 

// Utilizando o XMLHTTPREQUEST

button.addEventListener('click', function(e){
  e.preventDefault();
  const inputValue = nome.value;
  const request = new XMLHttpRequest()
  const metodo = "GET"
  const url = `https://api.github.com/users/${inputValue}`

  request.open(metodo, url, true);
  request.addEventListener("readystatechange", () => {

     if (request.readyState == 4 && request.status == 200) {
        const avatar = JSON.parse(request.response);
        usuario.innerHTML = `<img src="${avatar.avatar_url}">`
     } else {
        usuario.innerHTML = `<p> Infelizmente o usuario não foi encontrado </p>`

     }
  })

 nome.value = "";
  request.send();

})