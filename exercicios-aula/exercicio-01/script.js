//01. Fazer a chamada usando fetch para pegar a imagem.
//02. Colocar a imagem na tag img no body.
const img = document.getElementById("rainbow")

function clicar() {
    fetch("rainbow.jpg") // Busca imagem
        .then(function(response) { // então espera o retorno da promisse
            return response.blob() // retorna o objeto blob(), fornece um objeto do tipo arquivo
        })
        .then(function(blob) {
            const url = URL.createObjectURL(blob) // criamos uma URL de objeto blob
            img.src =  url // inserimos a url criada na tag img
        })
}

// 03. Lidar com situções de erro.
