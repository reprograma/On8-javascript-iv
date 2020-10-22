// Ao clicar no botão "Chamar pokemon" vamos:
// Executar uma consulta com usando o objeto XMLHttpRequest na "pokeapi"
// GET na URL https://pokeapi.co/api/v2/pokemon/pikachu/ (mas poderia ser outro pokemon)
// Incluir no HTML a mensagem `Oi eu sou o ${nome-do-pokemon}!`, usando o retorno dessa consulta;
// Porém se caso eu escolher um pokemon que não existe na "pokeapi" eu preciso exibir a msg "Não foi possivel chamar o pokemon, pois ele não foi encontrado!"

const chamarButton = document.getElementById('chamar');
const nomePokemon = document.getElementById("nome-pokemon")

chamarButton.addEventListener('click', () => {
    const request = new XMLHttpRequest();

    request.open("GET", "https://pokeapi.co/api/v2/pokemon/pikahu/", true);

    request.addEventListener("readystatechange", () => {
        if (request.readyState == 4 && request.status == 200) {
            const data = JSON.parse(request.response);
            nomePokemon.innerHTML = 
            `Oi eu sou o ${data.name}!`;
        }
        console.log(request.status)

        if(request.readyState == 4 && request.status != 200) {
            nomePokemon.innerHTML = 
            "Não foi possivel chamar o pokemon, pois ele não foi encontrado!";
        }

    })

    request.send();
});