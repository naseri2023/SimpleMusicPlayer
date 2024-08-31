let musicElem = document.getElementById("audio")

let musicSrc = [
    "musics/1_8Pxrks6myY.mp3",
    "musics/1_LSRHUc0gYl.mp3",
    "musics/02_ubv3tr1uil.mp3"
]

let musicIndex = 0

function playMusic() {
    musicElem.play()
}

function pauseMusic() {
    musicElem.pause()
}

function previousMusic() {
    musicIndex--

    if(musicIndex < 0 ){
        musicIndex = musicSrc.length
    }

    musicElem.setAttribute("src",musicSrc[musicIndex])
    musicElem.play()
}

function nextMusic() {
    musicIndex++

    if (musicIndex > musicSrc.length - 1 ){
        musicIndex = 0
    }

    musicElem.setAttribute("src" , musicSrc[musicIndex])
    musicElem.play()
}

function increaseSpeed() {
    musicElem.playbackRate = 2
}

function decreaseSpeed() {
    musicElem.playbackRate = 1
}

function seekBackward() {
    musicElem.currentTime -= 5
}

function seekForward() {
    musicElem.currentTime += 5
}
