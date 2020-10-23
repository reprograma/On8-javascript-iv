// // USANDO FETCH E TRATANDO ERROS ---------------------------------------

const pokemonInput = document.getElementById('pokemonInput');
const submit = document.getElementById('submit');
const pokemon = document.getElementById('pokemon');

submit.addEventListener('click', cancelEvent => {
    cancelEvent.preventDefault();
    searchPokemon()
})

const searchPokemon = () => {


    fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonInput.value}`)

        .then(response => {

            if (!response.ok) {
                throw new Error(`O status do erro foi ${response.status} que significa ${response.statusText}`)

            } else {
                response.json().then(object => {

                    pokemon.innerHTML = `<h1 id="text-pokemon">O nome do pokemon é: ${object.name}</h1><img id="img-pokemon" src="${object.sprites.other["official-artwork"].front_default}">`
                })
            }
        })
        .catch(error => {
            pokemon.innerHTML = `<h1>${error}</h1>`
        })

    pokemonInput.value = '';
}