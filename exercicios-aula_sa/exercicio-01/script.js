//01. Fazer a chamada usando fetch para pegar a imagem.
//02. Colocar a imagem na tag img no body.
const img = document.getElementById("rainbow")

// function clicar() {
//     fetch("rainbows.jpg") // Busca imagem
//         .then(function(response) { // então espera o retorno da promisse
//             return response.blob() // convertendo o objeto blob
//         })
//         .then(function(blob) {
//             const url = URL.createObjectURL(blob) // criamos uma URL de objeto blob
//             img.src =  url // inserimos a url criada na tag img
//         })
// }

// 03. Lidar com situções de erro.
function clicar() {
    fetch("rainbow.jpg")
        .then(function(response) {
            // console.log(response)
            // console.log(response.ok)
            // console.log(response.status)
            
            if(response.status == 200){
                response.blob().then(function(objeto){
                    // console.log(objeto)
                    img.src = URL.createObjectURL(objeto)
                    // console.log(img.src)
                    // img.src = response.url

                })
            } else if (response.status == 404) {
                alert("pois é")
            }
            else {
                alert("Olha, eu não achei essa img!")
            }
        })
        .catch(function(error) {
            console.log(error)
        })
}