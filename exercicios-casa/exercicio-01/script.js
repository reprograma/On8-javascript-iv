// 01. Fazer chamada primeiro XMLHttpRequest
const nameInput = document.getElementById("name")

nameInput.addEventListener("blur", function(event){
    event.preventDefault();
    console.log(nameInput.value);
    const request = new XMLHttpRequest();
    const url = `https://api.github.com/users/reprograma/${name}/json/`;

    request.open(url, true);

    request.addEventListener("readystatechange", function(){
        console.log(request.readyState)
        nameError.innerHtml = "";
    })

    function preencherInput(nomes){
        console.log(nomes)
        nameInput.value = nomes.name;
    }
})

// 02. Mudar para fetch
nameInput.addEventListener("blur", function(event){
    event.preventDefault();

    fetch(`https://api.github.com/users/reprograma/${nameInput}/json/`)
    .then(function(response){
        return response.json()
    })
    .then(function(objeto){
        preencherInput(objeto)
    })
} )

// 03. Lidar com os erros(retorno inválido da API)

const nameError = document.getElementById()