
const inputPokemon = document.getElementById('pokemonInput');
const button = document.getElementById('button');
const divPokemon = document.getElementById('pokemon');

//USANDO FETCH

button.addEventListener('click', function(event)  {
    event.preventDefault();
  
    const nome_do_pokemon = inputPokemon.value;
    const url = `https://pokeapi.co/api/v2/pokemon/${nome_do_pokemon}/`;

    fetch(url)
    .then(response => response.json())
    .then(pokemon => {
        const id_do_pokemon = pokemon.id;
        const urlPokemon = `https://pokeres.bastionbot.org/images/pokemon/${id_do_pokemon}.png`;
        const namePokemon = pokemon.name;
        divPokemon.innerHTML=`<p>${namePokemon}</p>
                                <img src="${urlPokemon}"/>`
    })
    .catch(function(erro) { 

        divPokemon.innerHTML = `<p>o pokemon não encontrado :( </p>`; 
    });

    inputPokemon.value = "";



}) 



// USANDO XMLHTTPREQUEST


button.addEventListener("click", function (event) {
    event.preventDefault()
    const request = new XMLHttpRequest()
    const metodo = "GET"
    const inputValue = inputPokemon.value;
    const url = `https://pokeapi.co/api/v2/pokemon/${inputValue}/`

    request.open(metodo, url, true);

    request.addEventListener("readystatechange", function () {
        console.log(request)
        if (request.readyState == 4 && request.status == 200) {
            const avatar = JSON.parse(request.response)
            divPokemon.innerHTML = `<p>${avatar.name}</p>
    <img src="https://pokeres.bastionbot.org/images/pokemon/${avatar.id}.png">`
           
        }else{
            divPokemon.innerHTML = `<h1>Não encontramos o pokemon :( </h1>`
        }
    })
    divPokemon.innerHTML = "";

    request.send()
})


