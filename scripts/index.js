// Variáveis Globais
let audioPlayer = document.getElementById('audioPlayer');
let cards = document.querySelectorAll('.main-col');
let loaded = false;

let backPlayer = document.querySelector('.back-player-poupup');
let playerPok = document.getElementById('player_poupup');



// Botões

let playButton = document.getElementById('playerBtn');
let pauseButton = document.getElementById('pauseBtn');
let stopButton = document.getElementById('stopBtn');


//PLAY
const playSong = (file) => {
    if (loaded == false) {
        audioPlayer.innerHTML = `<source src="${file}" type="audio/mp3"/>`;
        loaded = true;
    };
    showPlayer()
    audioPlayer.play();
    console.log('Play')
    playButton.style.display = "none"
    pauseButton.style.display = "inline"
}

//PAUSE
pauseButton.addEventListener('click', (e) => {
    e.preventDefault();
    audioPlayer.pause();
    playButton.style.display = "inline"
    pauseButton.style.display = "none"

    console.log('pausado')
    return false;
})

//Play
playButton.addEventListener('click', (e) => {
    e.preventDefault();
    playButton.style.display = "none"
    pauseButton.style.display = "inline"
    audioPlayer.play();

    console.log('Tocando')
    return false;
})

//Stop
stopButton.addEventListener('click', (e) => {
    e.preventDefault();
    playButton.style.display = "inline"
    pauseButton.style.display = "bone"
    audioPlayer.pause();
    closePlayer()
    console.log('parou')
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
            let playerArtistComponentInPlayer = document.getElementsByClassName('img-area');

            playerArtistComponentInPlayer[0].innerHTML = `
            <img src="${image}" />`

            playerArtistComponent[0].innerHTML = `
            <img src="${image}" />
            <h3>${artist} <br/><span> ${album} </span> </h3>
            <h3> ${song} <span> ${ranking}</span></h3>`


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

const showPlayer = () => {
    backPlayer.style.visibility = "visible"
    playerPok.style.display = "block"
}

const closePlayer = () => {
    backPlayer.style.visibility = "hidden"
    playerPok.style.display = "none"
}


lista = [
    {
        Imagem: "assets/images/thumbs/gorillaz.jpg",
        Artista: "Gorillaz",
        Song: "Clint Eastwood",
        Album: "Clint Eastwood",
        Ranking: "Top hit 04",
        File: "assets/audio/Gorillaz - Clint Eastwood (Official Video).mp3"
    },
    {
        Imagem: "assets/images/thumbs/pink_floyd.jpg",
        Artista: "Pink Floyd",
        Song: "Lost For Words",
        Album: "The Division Bell",
        Ranking: "Top 02",
        File: "assets/audio/Lost For Words.mp3"
    },
    {
        Imagem: "assets/images/thumbs/gunsNroses.jpg",
        Artista: "Guns N' Roses",
        Song: "Sweet Child O' Mine",
        Album: "Appetite For Destruction",
        Ranking: "Top 03",
        File: "assets/audio/Guns N Roses - Sweet Child O Mine.mp3"
    },
    {
        Imagem: "assets/images/thumbs/the-black-album.jpg",
        Artista: "Metallica",
        Song: "Nothing else matters",
        Album: "The Black Albumpetite For Destruction",
        Ranking: "Top 01",
        File: "assets/audio/Metallica - Nothing Else Matters 2007 Live Video Full HD.mp3"
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

