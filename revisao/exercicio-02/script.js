// Use o fecth() na rota search capturando informação do input
// Documentação da api: https://developers.giphy.com/dashboard/
// trazer 10 imagens
// apresentar as imagens na div #root

const gifInput = document.querySelector('#gifInput')
const gifButton = document.getElementById('gifButton')
const divRoot = document.getElementById('root')

// console.log(gifInput)
// console.log(gifButton)
// console.log(divRoot)
gifButton.addEventListener('click', evento => {
    evento.preventDefault()
    adicionarGifts()
})

const adicionarGifts = () => {

    // console.log(gifInput.value) 
    const search = gifInput.value
    const mykey = 'NivTgSRfrnAme0OQ2UnpHf510FLCHT9H' //Preencher com a sua api_key

    const url = `https://api.giphy.com/v1/gifs/search?api_key=${mykey}&q=${search}&limit=10&offset=0&rating=g&lang=en`

    divRoot.innerHTML = ""
    
    fetch(url)
        .then(response => response.json())
        .then(objeto => {
            // console.log(objeto)
            // console.log(objeto.data)
            const gifts = objeto.data
            // console.log(gifts) // lista 
            for(let i = 0; i < gifts.length; i++) {
                // console.log(gifts[i])
                const gif = gifts[i]
                // console.log(gif.images)
                // console.log(gif.images.original)
                // console.log(gif.images.original.url)
                divRoot.innerHTML += `<img src="${gif.images.original.url}" >`
            }
        })
}
