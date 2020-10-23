/*
//---------------------------Usando o fetch---------------------------------

const nomeInput=document.getElementById('nameInput');
const btnInput=document.getElementById('submit');
const foto=document.getElementById('user');

btnInput.addEventListener('click', function(event){
    event.preventDefault();

    const nomeUsuario=nomeInput.value

    fetch(`https://api.github.com/users/${nomeUsuario}`)
    .then(function(response){
       return response.json()
    })
    .then(function(json){
        
        const imgPerfil=json.avatar_url;
        foto.innerHTML=` <img src='${imgPerfil}'>`
        
    })
    .catch(function(){
        
        foto.innerHTML=`Ops! Algo está errado, digite novamente!`
    })
      document.getElementById('nameInput').value=''    
})
*/


//-------------------- Fazendo chamada pelo XMLHttpRequest---------------------------------
/*

const nomeInput=document.getElementById('nameInput');
const btnInput=document.getElementById('submit');
const foto=document.getElementById('user');

btnInput.addEventListener('click', function(event){
    event.preventDefault();
    const nomeUsuario=nomeInput.value
    const request= new XMLHttpRequest();
    const metodo='GET';
    const url=`https://api.github.com/users/${nomeUsuario}`
    
    request.open(metodo,url,true);
   

    request.addEventListener('readystatechange', function(){
     
      if(request.readyState == 4 && request.status == 200){
          const imagem=JSON.parse(request.response)
          foto.innerHTML=`<img src='${imagem.avatar_url}'>`;
      }

      if(request.readyState !== 4 && request.status !== 200){

        foto.innerHTML=`Ops! Algo está errado, digite novamente!`;
    }

    })
    document.getElementById('nameInput').value=''
    request.send();
    
})
*/