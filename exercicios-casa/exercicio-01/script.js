const input = document.querySelector('#nameInput');
const btn = document.querySelector('#btn');
const showUser = document.querySelector('#user');

const githubAPI = () => {
    const user = input.value;
    const url = `https://api.github.com/users/${user}`
    fetch(url)
        .then(response => response.json())
        .then(search => {
            //console.log(search)
            const userImg = search.avatar_url;
            const userName= search.login;
            showUser.innerHTML = `<img src="${userImg}"/>`;
        })
        .catch(function(err) { 
            console.log(err)
            showUser.innerHTML = `<p>Usuário não encontrado</p>`; 
        });

        input.value = "";
}

btn.addEventListener('click', (e) => {
    e.preventDefault();
    githubAPI()
})

