// 01. Fazer a chamada usando fetch para pegar a imagem.
// 02. Colocar a imagem na tag img no body.

// const imagem = document.getElementById('rainbow');

// // USANDO ARROW FUNCTION -----------------------

// const clicar = () => {
//     fetch('rainbow.jpg')
//         .then(response => response.blob()) //convertendo a resposta usando o blob() porque é um aqruivo de imagem
//         .then(blob => {
//             console.log(blob) //objeto retornado
//             const url = URL.createObjectURL(blob) //criando uma url para inserir no src da imagem
//             imagem.src = url
//         })
//         .catch(erro => console.log(erro)) //quando não dá certo nossa requisição
// }

// // Erro 404 não é um erro de rede, e sim, erro do cliente. Dessa forma, por isso que ele não entrou nesse cath.(erro) acima


// // O DOM NÃO FAZ REQUISIÇÕES!!!! Mas os eventos podem ser criados com ele, ex:

// const btn = document.getElementById('buscar_btn')

// btn.addEventListener("click",function(){
//     alert('teste')
// })


// USANDO FUNÇÃO NORMAL --------------------------

// 03. Lidar com situções de erro.

const imagem = document.getElementById('rainbow');

function clicar() {
    fetch('rainbow.jpg')
        .then(function (response) {
            // console.log(response)
            // console.log(response.ok)
            // console.log(response.status)
            if (response.ok) { // esse "ok" pode ser visto no console.log do parametro "response", onde ele é um boleano "true"
                response.blob().then(function (blob) { // sendo "ok" ele insere a imagem. Não separe o then
                    imagem.src = URL.createObjectURL(blob)
                })
            } else {
                alert("Não consegui achar a imagem solicitada") //erro do usuário
            }\
        })
        .catch(function (error) {
            console.log(error); //esse não vai aparecer pois seria necessário um erro de rede
        }) 
}