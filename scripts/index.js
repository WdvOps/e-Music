// Variáveis Globais
let audioPlayer = document.getElementById('audioPlayer');
let cards = document.querySelectorAll('.main-col');
let loaded = false;



// Botões

let playButton = document.getElementById('playerBtn');
let pauseButton = document.getElementById('pauseBtn');


//PLAY
const playSong = (file) => {
    if (loaded == false) {
        audioPlayer.innerHTML = `<source src="${file}" type="audio/mp3"/>`;
        loaded = true;
    };

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
function screenPlayer() {
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


            playSong(file)
        })
    })
}

// Remove seleção dos cards
function removeClass() {
    let cards = document.querySelectorAll('.main-col');

    cards.forEach(card => {
        if (card.classList.contains('selected'))
            card.classList.remove('selected')
    })
}

// Adiciona seleção dos cards
function selected(element) {
    screenPlayer()
    removeClass();
    element.classList.add('selected')
}

let template = document.querySelector('.template')


lista = [
    {
        Imagem: "assets/images/thumbs/gorillaz.jpg",
        Artista: "Gorillaz",
        Song: "Clint Eastwood",
        Album: "Clint Eastwood",
        Ranking: "Top hit 02",
        File: "assets/audio/Gorillaz - Clint Eastwood (Official Video)"
    },
    {
        Imagem: "assets/images/thumbs/pink_floyd.jpg",
        Artista: "Pink Floyd",
        Song: "Lost For Words",
        Album: "The Division Bell",
        Ranking: "Top 03",
        File: "assets/audio/Lost For Words.mp3"
    }
];

_topSongs.innerHTML = '';


lista.forEach(item => {
    let clone = template.cloneNode(true);
    clone.style.diplay = "flex"
    clone.setAttribute('data-image', item.Imagem);
    clone.setAttribute('data-artist', item.Artista);
    clone.setAttribute('data-song', item.Song);
    clone.setAttribute('data-album', item.Album);
    clone.setAttribute('data-ranking', item.Ranking);
    clone.setAttribute('data-file', item.File);

    let [image, artist, album] = clone.children;
    image.setAttribute('src', item.Imagem);
    artist.innerText = item.Artista;
    album.innerText = item.Album;

    _topSongs.append(clone)
})

