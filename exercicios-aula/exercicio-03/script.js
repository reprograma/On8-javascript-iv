// [] usar fetch() para buscar o arquivo aluna.json
// [] apresentar da seguinte forma:
/* 
<div id="root">
  <h3>Nome da Aluna</h3>
  <p>Turma 5</p>
  <a href="github.com/nome-da-aluna" target="_blank">Github</a>
</div>
*/
// const btn = document.getElementById("buscar_btn")

// btn.addEventListener("click", function(){
//   alert("teste")
// })

const root = document.getElementById("root")

function buscar() {
  fetch("aluna.json") // Buscando o arquivo .json
    .then(function (response) {
      console.log(response)
      return response.json() // convertendo em um objeto
    })
    .then(function (json) {
      console.log(json)
      criarAluna(json)
    })
}

function criarAluna(aluna) {
  console.log(aluna.nome)
  console.log(aluna.github)
  console.log(aluna.turma)
  console.log(root)
  root.innerHTML = `<h3>${aluna.nome}</h3>
  <p>Turma ${aluna.turma}</p>
  <a href="${aluna.github}" target="_blank">Github</a>`
}