// Ao clicar no botão "Chamar pokemon" vamos:
// Executar uma consulta com usando o objeto XMLHttpRequest na "pokeapi"
// GET na URL https://pokeapi.co/api/v2/pokemon/pikachu/ (mas poderia ser outro pokemon)
// Incluir no HTML a mensagem `Oi eu sou o ${nome-do-pokemon}!`, usando o retorno dessa consulta;

const chamarButton = document.getElementById('chamar');

chamarButton.addEventListener('click', () => {
    const request = new XMLHttpRequest();

    request.open("GET", "https://pokeapi.co/api/v2/pokemon/pikachu/", true);

    request.addEventListener("readystatechange", () => {
        if (request.readyState == 4 && request.status == 200) {
            const data = JSON.parse(request.response);
            document.getElementById("nome-pokemon").innerHTML =
                `Oi eu sou o ${data.name}!`;
        }
    })

    request.send();
});
