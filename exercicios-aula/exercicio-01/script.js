 /* const image = document.getElementById('rainbow')

// JS moderno
const clicar = () => {
    fetch('rainbow.jpg')
    .then(response => response.blob()) // convertendo respostas usando o blob() pq é um arquivo de imagens
    .then(blob => {
        console.log(blob) // Objeto retornado
        const createUrl = URL.createObjectURL(objeto) //criando a url para inserir no src da imagem
        image.src = createUrl // inseri a imagaem chamando a variável de criação da url
    })
    .catch(erro => console.log(erro)) // Quando não dá certo no ssa riquisição
}

// Criando com o function padrão part 2

/*function clicar() {

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
}*/


// Criando com o function padrão
// const img = document.getElementById('rainbow')

// function clicar(){
//     fetch('rainbow.jpg')
//     .then(function(response){
//       return  response.blob() // response.jason() caso fosse um jason

//     })
//     .then(function(blob){
//       img.src = URL.createObjectURL(blob)

//     })
// }

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



function clicar(){
    fetch('rainbow.jpg')
    .then(function(response){
        if(response.ok){
            response.blob().then(function(objeto){
                img.src = URL.createObjectURL(objeto)
            } //vai inserir a imagem
            )}else{
           //  //vai fazer um alert'Imagem não encontrada'
        }
    })
    .catch(function(error){
        
    })
}


// 03. Lidar com situções de erro.
function clicar() {
    fetch("rainbows.jpg")
        .then(function(response) {
            console.log(response)
            // console.log(response.ok)
            // console.log(response.status)
            if(response.ok){
                response.blob().then(function(objeto){
                    console.log(objeto)
                    img.src = URL.createObjectURL(objeto)
                })
            } else {
                alert("Olha, eu não achei essa img!")
            }
        })
        .catch(function(error) {
            console.log(error)
        })
}

