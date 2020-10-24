const gitForm = document.getElementById('gitForm')
const userPlaceholder = document.getElementById('user')
const usernameInput = document.getElementById('nameInput')

const baseUserUrl = 'https://api.github.com/users/'

gitForm.addEventListener('submit', e => {
    e.preventDefault()
    //fetchUser(usernameInput.value)
    getUser(usernameInput.value)
})

function fetchUser (username) {
    const url = baseUserUrl + username

    fetch(url)
        .then(response => {
            if (!response.ok) {
                throw new Error(`Error ${response.status} - ${response.statusText}`)
            }
            return response.json()
        })
        .then(data => {
            userPlaceholder.innerHTML = `<img src="${data.avatar_url}">`
        })
        .catch(error => {
            console.error(error)
            userPlaceholder.innerHTML = `<h2>${error}</h2>`
        })
    
    usernameInput.value = ""
}

function getUser (username) {
    const request = new XMLHttpRequest()
    const metodo = "GET"
    const url = baseUserUrl + username
  
  
    request.open(metodo, url, true);
  
    request.addEventListener("readystatechange", () => {
        if (request.readyState == 4 && request.status === 200) {
            const data = JSON.parse(request.response);
            userPlaceholder.innerHTML = `<img src="${data.avatar_url}">`
        } else {
            const error = `Error ${request.status} - ${request.statusText}`;
            userPlaceholder.innerHTML = `<h2>${error}</h2>`
        }
    })

    request.send();
  
    usernameInput.value = "";
}