// const mostrar = document.getElementById("mostrar")
//mostrar.addEventListener("click",)
const imagem = document.getElementById("rainbow")


const clicar = () => {
     fetch("rainbow.jpg")
     .then(Response => Response.blob()) //convertendo resposta usando o blob() pq é um arquivode imagem
     .then(blob => {
        const url = URL.createObjectURL(blob)
        imagem.src = url

    })
     .catch(erro => console.log(erro)) //quando n dá certo no ssa requisição
 }