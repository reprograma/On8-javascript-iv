//---------------Usando fetch---------------
/*
const nomeInput=document.getElementById('pokemonInput');
const btnInput=document.getElementById('submit');
const localImg=document.getElementById('pokemon');

btnInput.addEventListener('click', function(event){
    event.preventDefault();
    
    const pokeNome=nomeInput.value.toLowerCase();
    const url=`https://pokeapi.co/api/v2/pokemon/${pokeNome}`

    fetch(url)
        .then(function(response){
            return response.json()
        })
        .then(function(objeto){         
            const urlId=objeto.url
            localImg.innerHTML=`<img src=' https://pokeres.bastionbot.org/images/pokemon/${objeto.id}.png'>`
        })
        .catch(function(){
            localImg.innerHTML=`<strtong>Ops! Error!</strong>`
        })
        document.getElementById('pokemonInput').value=''
})
*/
/*
//--------------------Usando XMLHTTPREQUEST------------------

const nomeInput=document.getElementById('pokemonInput');
const btnInput=document.getElementById('submit');
const localImg=document.getElementById('pokemon');

btnInput.addEventListener('click', function(event){
    event.preventDefault();

    const pokeNome=nomeInput.value.toLowerCase();
    const request=new XMLHttpRequest();
    const url=`https://pokeapi.co/api/v2/pokemon/${pokeNome}`
    
    request.open('GET',url, true);

    request.addEventListener('readystatechange',function(){
        if(request.readyState == 4 && request.status == 200){
            const resposta=JSON.parse(request.response);
            
            localImg.innerHTML=`<img src='https://pokeres.bastionbot.org/images/pokemon/${resposta.id}.png'>`
        }
        if(request.readyState !== 4 && request.status !== 200){
            localImg.innerHTML=`Ops! Algo está errado, digite novamente!`
        }
    })
    request.send();
    document.getElementById('pokemonInput').value=''
})
*/