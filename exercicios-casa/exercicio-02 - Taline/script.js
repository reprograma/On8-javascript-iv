const input = document.getElementById("pokemonInput")
const button = document.getElementById("button")
const div = document.getElementById("pokemon")

button.addEventListener('click', event => {
    event.preventDefault();
    searchPokemon()
})

const searchPokemon = () => {
    const nome_do_pokemon = input.value;
    const url = `https://pokeapi.co/api/v2/pokemon/${nome_do_pokemon}/`

    fetch(url)
        .then (response => {
            if (!response.ok) {
                
                throw new Error(`O Pokemon não foi encontrado`)
                
            } else {
                
                response.json().then(object => {
                    const idPokemon = object.id
                    const imgPokemon = `https://pokeres.bastionbot.org/images/pokemon/${idPokemon}.png`
                    const pokemonName = object.name
                   div.innerHTML = `<p style="
                   font-size: 2rem;
                   color: brown;
               ">${pokemonName} </p>
                   <img style="width: 50%;" src="${imgPokemon}">`
                })
             }
          })
          .catch(error => {
             div.innerHTML = `<h1>${error}</h1>`
          })
    
          input.value = '';
}