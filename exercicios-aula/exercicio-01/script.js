//function clicar(){
   // alert("testando")
//}

const clicar = () => {
    fetch("rainbow.jpg")
    .then(response => response.Blob())
    .then(arquivo => console.log(arquivo))
    .catch(error => console.log(erro))
}