// Fazer uma chamada na api do viacep passando o valor de um cep (viacep.com.br/ws/${cep}/json/), pegar seu retorno e preencher os outros campos com a resposta da requisição.
// 01. Fazer chamada primeiro XMLHttpRequest
// const form = document.getElementsByTagName("form")
const cepInput = document.getElementById("cep")
const logradouroInput = document.getElementById("logradouro")
const complementoInput = document.getElementById("complemento")
const bairroInput = document.getElementById("bairro")
const localidadeInput = document.getElementById("localidade")
const ufInput = document.getElementById("uf")
const cepError = document.getElementById("cep-error")

cepInput.addEventListener("blur", function(event) {
    event.preventDefault();
    console.log(cepInput.value);
    const request = new XMLHttpRequest();
    const metodo = "GET";
    const url = `https://viacep.com.br/ws/${cepInput.value}/json/`;

    request.open(metodo, url, true);

    request.addEventListener("readystatechange", function(){
        console.log(request)
        cepError.innerHTML = "";
        logradouroInput.value = "";
        complementoInput.value = "";
        bairroInput.value = "";
        localidadeInput.value = "";
        ufInput.value = "";
        // console.log(request.readyState)
        // console.log(request.status)

        if(request.readyState == 4 && request.status == 200) {
            const dados = JSON.parse(request.response)
            // console.log(dados)
            preencherCampos(dados)

        } 
        if(request.readyState == 4 && request.status == 0)  {
            cepError.innerHTML = "Cep não encontrado"
        }
    })
    request.send();
})





function preencherCampos(dadosCep){
    console.log(dadosCep)
    logradouroInput.value = dadosCep.logradouro;
    complementoInput.value = dadosCep.complemento;
    bairroInput.value = dadosCep.bairro;
    localidadeInput.value = dadosCep.localidade;
    ufInput.value = dadosCep.uf;
}
