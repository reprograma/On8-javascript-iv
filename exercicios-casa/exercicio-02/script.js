const input = document.querySelector('#pokemonInput');
const search = document.querySelector('#btn');
const showPokemon = document.querySelector('#pokemon');

const pokemonAPI = () => {
    const nome_do_pokemon = input.value;
    const url = `https://pokeapi.co/api/v2/pokemon/${nome_do_pokemon}/`;
    
    fetch(url)
    .then(response => response.json())
    .then(pokemon => {
        const id_do_pokemon = pokemon.id;
        const imgUrl = `https://pokeres.bastionbot.org/images/pokemon/${id_do_pokemon}.png`;
        const pokemonName = pokemon.name;
        showPokemon.innerHTML=`<p>${pokemonName}</p>
                                <img width="300px" src="${imgUrl}"/>`
    })
    .catch(function(err) { 
        console.log(err)
        showPokemon.innerHTML = `<p>Pokemon não encontrado</p>`; 
    });

    input.value = "";
}

search.addEventListener('click', (e) => {
    e.preventDefault();
    pokemonAPI();
})