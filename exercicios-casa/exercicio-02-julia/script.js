const inputPok = document.getElementById('pokemonInput');
const button = document.getElementById('button');
const div = document.getElementById('pokemon');

//USANDO FETCH

button.addEventListener('click', function(event)  {
    event.preventDefault();

    const nome_do_pokemon = inputPok.value;
    const url = `https://pokeapi.co/api/v2/pokemon/${nome_do_pokemon}/`;

    fetch(url)
    .then(response => response.json())
    .then(pokemon => {
        const id_do_pokemon = pokemon.id;
        const urlPokemon = `https://pokeres.bastionbot.org/images/pokemon/${id_do_pokemon}.png`;
        const namePokemon = pokemon.name;
        div.innerHTML=`<p>${namePokemon}</p>
                                <img src="${urlPokemon}"/>`
    })
    .catch(function(erro) { 

        div.innerHTML = `<p>O Pokemon Não Foi Localizado </p>`; 
    });

    inputPok.value = "";



}) 


