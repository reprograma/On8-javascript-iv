
        .then(json => {
            const id = json.id
            const imagem = `https://pokeres.bastionbot.org/images/pokemon/${id}.png`
            const nome = json.name
            div.innerHTML = `<p>${nome}</p> <img src=${imagem}>`
        })
        .catch(function (erro) {
            console.log(erro)
            div.innerHTML = `<p>O Pokemon escapou</p>`
        })
    nameInput.value = ''