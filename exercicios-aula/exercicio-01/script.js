// function clicar(){
//     alert("Testando!!")
// }
const imagem = document.getElementById("rainbow")

const clicar = () => {
    fetch("rainbow.jpg")
        .then(response => response.blob()) // convertendo resposta usando o blob() pq é um arquivo de imagem
        .then(blob =>  {
            console.log(blob)
            const url = URL.createObjectURL(blob) //criando a url para inserir no src da imagem
            console.log(url)
            imagem.src = url
        }) //Objeto retornado
        .catch(erro => console.log(erro)) // Qdo não dá certo nossa requisicao
}

const img = document.getElementById("rainbow")

function clicar() {
    fetch("rainbow.jpg")
        .then(function(response) {
            console.log(response)
            if(response.ok){
                response.blob().then(function(blob) {
                    img.src = URL.createObjectURL(blob)
                })
            } else {
                alert("Deu ruim")
            }
        })
}