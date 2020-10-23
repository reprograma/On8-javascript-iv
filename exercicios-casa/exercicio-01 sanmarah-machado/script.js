const input = document.getElementById('nameInput');
const button = document.getElementById('input2');
const div = document.getElementById('user');

button.addEventListener("click", (e) => buscarInfo(e));

function buscarInfo (e) {
    e.preventDefault();
    let inputValue = input.value;
    
    let url = `https://api.github.com/users/${inputValue}`
    fetch(url).then(response => {
        return response.json()
    }).then(json => {
        let img = json.avatar_url
        div.innerHTML = `<img src=${img}>`
    })
}