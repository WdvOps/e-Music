// Variáveis Globais
let audioPlayer = document.getElementById('audioPlayer');
let cards = document.querySelectorAll('.main-col');
let loaded = false;



// Botões

let playButton = document.getElementById('playerBtn');
let pauseButton = document.getElementById('pauseBtn');


//PLAY
const playMusic = (file) => {
    if (loaded == false) {
        audioPlayer.innerHTML = `<source src="${file}" type="audio/mp3 />`
        loaded = true
    }

    audioPlayer.play();
    console.log('Play')
    playButton.style.display = "none"
    pauseButton.style.display = "inline"
}

//PAUSE
pauseButton.addEventListener('click', (e) => {
    e.preventDefault();
    alert('Pausada')
    playButton.style.display = "inline"
    pauseButton.style.display = "none"

    return false;
})

//Play
playButton.addEventListener('click', (e) => {
    e.preventDefault();
    alert('Tocando')
    playButton.style.display = "none"
    pauseButton.style.display = "inline"

    return false;
})

//CARD PLAY
document.querySelectorAll('.main-col').forEach(item => {

    item.addEventListener('click', event => {
        let image = item.getAttribute('data-image');
        let artist = item.getAttribute('data-artist');
        let song = item.getAttribute('data-song');
        let album = item.getAttribute('data-album');
        let ranking = item.getAttribute('data-ranking');
        let file = item.getAttribute('data-file');


        let playerArtistComponent = document.getElementsByClassName('player-artist');

        playerArtistComponent[0].innerHTML = `
        <img src="${image}" />>
        <h3>${artist} <br/><span> ${album} </span> </h3>
        <h3> ${song} <span> ${ranking}</span></h3>
        `
    })
})

// Remove seleção dos cards
function removeClass() {
    let cards = document.querySelectorAll('.main-col');

    cards.foreach(card => {
        if (card.classList.contains('selected'))
            card.classList.remove('selected')
    })
}

// Adiciona seleção dos cards
function selected(element) {

    removeClass();
    element.classList.add('visited')
}