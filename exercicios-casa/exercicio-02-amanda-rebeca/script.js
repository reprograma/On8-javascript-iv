const pokemonForm = document.getElementById('pokemonForm')
const pokemonPlaceholder = document.getElementById('pokemon')
const pokemonInput = document.getElementById('pokemonInput')

const basePokemonUrl = 'https://pokeapi.co/api/v2/pokemon/'

pokemonForm.addEventListener('submit', e => {
    e.preventDefault()
    fetchPokemon(pokemonInput.value)
    //getPokemon(pokemonInput.value)
})

function fetchPokemon (pokemon) {
    const url = basePokemonUrl + pokemon

    fetch(url)
        .then(response => {
            if (!response.ok) {
                throw new Error(`Error ${response.status}`)
            }
            return response.json()
        })
        .then(pokemon => {
            const pokemonImg = `https://pokeres.bastionbot.org/images/pokemon/${pokemon.id}.png`;
            const pokemonName = pokemon.name;
            pokemonPlaceholder.innerHTML = `<h2>${pokemonName}</h2><img src="${pokemonImg}">`
        })
        .catch(error => {
            console.error(error)
            pokemonPlaceholder.innerHTML = `<h2>${error}</h2>`
        })
    
    pokemonInput.value = ""
}

function getPokemon (pokemon) {
    const request = new XMLHttpRequest()
    const metodo = "GET"
    const url = basePokemonUrl + pokemon
  
  
    request.open(metodo, url, true);
  
    request.addEventListener("readystatechange", () => {
        if (request.readyState == 4 && request.status === 200) {
            const pokemon = JSON.parse(request.response);
            const pokemonImg = `https://pokeres.bastionbot.org/images/pokemon/${pokemon.id}.png`;
            const pokemonName = pokemon.name;
            pokemonPlaceholder.innerHTML = `<h2>${pokemonName}</h2><img src="${pokemonImg}">`
        } else if (request.status !== 200) {
            const error = `Error ${request.status} - ${request.response}`;
            pokemonPlaceholder.innerHTML = `<h2>${error}</h2>`
        }
    })

    request.send();
  
    pokemonInput.value = "";
}