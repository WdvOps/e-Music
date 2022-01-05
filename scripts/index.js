// Variáveis Globais
let audioPlayer = document.getElementById('audioPlayer');
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
    playButton.style.display = "inline"
    pauseButton.style.display = "none"
}

//PAUSE
pauseButton.addEventListener('click', (e) => {
    e.preventDefault();
    console.log('Pause')
    playButton.style.display = "inline"
    pauseButton.style.display = "none"

    return false;
})

// CARD PLAY

document.querySelectorAll('.main-col').forEach(item => {

    item.addEventListener('click', event => {
        let image = item.getAttribute('data-image');
        let artist = item.getAttribute('data-artist');
        let music = item.getAttribute('data-music');
        let album = item.getAttribute('data-album');
        let ranking = item.getAttribute('data-ranking')
        let file = item.getAttribute('data-file');

        let playerArtistComponent = document.getElementsByClassName('player-artist');

        playerArtistComponent[0].innerHTML = `
        <img src="${image}" />>
        <h3> ${artist} <br/><span> ${album} </span> </h3>
        <h3> ${music} <br/> <span>${ranking}</span></h3>
        `
    })
})
