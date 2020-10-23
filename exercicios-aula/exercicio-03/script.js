// Fazer uma chamada na api do viacep passando o valor de um cep (viacep.com.br/ws/${cep}/json/), pegar seu retorno e preencher os outros campos com a resposta da requisição.

// Trazendo os elementos HTMLs para o nosso arquivo javaScript
const cepInput = document.getElementById("cep")
const logradouroInput = document.getElementById("logradouro")
const complementoInput = document.getElementById("complemento")
const bairroInput = document.getElementById("bairro")
const localidadeInput = document.getElementById("localidade")
const ufInput = document.getElementById("uf")

// 01. Fazer chamada primeiro XMLHttpRequest
cepInput.addEventListener("blur", function (event) {// Evento de "blur" olha para foco, qdo o input é selecionado
    event.preventDefault()
    const request = new XMLHttpRequest()
    const metodo = "GET"
    const url = `https://viacep.com.br/ws/${cepInput.value}/json/`

    request.open(metodo, url, true);

    // O evento readystatechange é ativado quando o atributo readyState é alterado.
    request.addEventListener("readystatechange", function () {
        console.log(request)
        if (request.readyState == 4 && request.status == 200) {
            const dados = JSON.parse(request.response)
            preencherCampos(dados)
        }
    })

    request.send()
})

function preencherCampos(dadosCep) {
    console.log(dadosCep)
    logradouroInput.value = dadosCep.logradouro;
    complementoInput.value = dadosCep.complemento;
    bairroInput.value = dadosCep.bairro;
    localidadeInput.value = dadosCep.localidade;
    ufInput.value = dadosCep.uf;
}

// 02. Mudar para fetch
// cepInput.addEventListener("blur", function (event) {
//     event.preventDefault();

//     fetch(`https://viacep.com.br/ws/${cepInput.value}/json/`) // busca cep
//         .then(function (response) {
//             return response.json() // converte para um objeto javaScript
//         })
//         .then(function (objeto) {
//             preencherCampos(objeto) // chama a função que preence os inputs
//         })
// })

// 03. Lidar com os erros
const cepError = document.getElementById("cep-error")

cepInput.addEventListener("blur", function (event) {
    event.preventDefault();

    fetch(`https://viacep.com.br/ws/${cepInput.value}/json/`)
        .then(function (response) {
            return response.json()
        })
        .then(function (objeto) {
            // console.log(objeto)
            preencherCampos(objeto)
        })
        .catch(function (erro) {
            console.log(erro)
            cepError.innerHTML = "Cep não foi encontrado"
        })
    
    reset()
})

function reset() {
    cepError.innerHTML = ""
    logradouroInput.value = "";
    complementoInput.value = "";
    bairroInput.value = "";
    localidadeInput.value = "";
    ufInput.value = "";
}







