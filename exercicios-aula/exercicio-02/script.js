// Fazer uma chamada na api do viacep passando o valor de um cep (viacep.com.br/ws/${cep}/json/),
// pegar seu retorno e preencher os outros campos com a resposta da requisição.
// 01. Fazer chamada primeiro XMLHttpRequest
const form = document.getElementsByTagName("form")
const cepInput = document.getElementById("cep")

form.addEventListener("blur", function(event){
    event.preventDefault();
    console.log(cepInput.value)
})

console.log(cepInput.value)


// 02. Lidar com os erros
// 03. Mudar para fetch
// 04. Mudar chamada para async await