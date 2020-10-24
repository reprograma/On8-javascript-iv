const input = document.getElementById('nameInput')
const botao = document.getElementById('input2')
const div = document.getElementById('user')

botao.addEventListener("click", (e) => fazerFetch(e));

async function fazerFetch(event) {
    event.preventDefault();
    const valorInput = input.value;
    console.log(valorInput);

    const url = `https://api.github.com/users/${valueInput}`
    await fetch(url)
        .then(response => {
            return response.json()
        })
        .then(json => {
            const srcImg = json.avatar_url;
            div.innerHTML = `<img src=${srcImg}/>`;
        })
        .catch(err => {
            return alert(err);
        })
}