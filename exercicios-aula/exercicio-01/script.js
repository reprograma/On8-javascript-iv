/*function clicar (){
    alert('testando!');
}
*/

//const mostrar = document.getElementById('mostrar')

//mostrar.addEventListener('click',)


 const clicar = () => {
    fetch ('./img/rainbow.jpg')
    .then(response => response.blob())// convertendo a resposta usando o bloc() pq é um arquivo de imagem
    .then(blob => console.log(blob))//objeto retornado
    .catch(erro => console.log(erro))// qdo não dá certo no ssa requisição
 }
