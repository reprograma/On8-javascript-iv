const nameInput = document.getElementById('nameInput');
const submit = document.getElementById('submit');
const user = document.getElementById('user');

submit.addEventListener('click', cancelEvent => {
    cancelEvent.preventDefault();
    searchGitUser()
})

const showGitUser = () => {
   const inputValue = nameInput.value;
   const url = `https://api.github.com/users/${inputValue}`

   fetch(url)
   .then(response => response.json())
   console.log(response.json());



}