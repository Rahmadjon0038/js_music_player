import artist from './popular_artist.js'

const walker = [
    {
        id: 1,
        name: "Faded",
        answer: "Alan walker",
        music: "./music/walker/Alan Walker - Faded.mp3",
        banner: "https://wallpapers.com/images/high/faded-xust67aurskyl7zn.webp"
    },
    {
        id: 2,
        name: "The Drum",
        answer: "Alan walker",
        music: "./music/walker/Alan Walker - The Drum (Remix) New Music 2023.mp3",
        banner: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTY-CPih_f7bfe_jqoyx0K7uBJSVqudwSws0A&s"
    },
    {
        id: 3,
        name: "The Spectre",
        answer: "salomat",
        music: "./music/walker/Alan Walker - The Spectre.mp3",
        banner: "https://is1-ssl.mzstatic.com/image/thumb/Video124/v4/6a/fe/14/6afe1450-b75b-135a-6697-eb6259bc725a/8864467390210101.jpg/1200x600bf.jpg"
    },
    {
        id: 4,
        name: "Dash_berlin_Vikkstar",
        answer: "Alan walker",
        music: "./music/walker/Alan_Walker,_Dash_Berlin_Vikkstar_Better_Off_Alone,_Pt_III.mp3",
        banner: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTlA7oTW2_QoIWSqMl0YIEX22Kx-2d_rDOjeg&s"
    },
    {
        id: 5,
        name: "Sorana_Mind",
        answer: "Alan walker",
        "music": "./music/walker/Alan_Walker,_Sorana_Mind_of_a_Warrior_Official_Music_Video.mp3",
        banner: "https://i.ytimg.com/vi/8djGMWRgwEE/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLCj2KGFL9ej-PkGakDtgzxL06UnuQ"
    },
    {
        id: 6,
        name: "Headlights",
        answer: "Alan walker",
        music: './music/walker/Alok_Alan_Walker_Headlights_feat_KIDDO_Official_Lyric_Vi.mp3',
        banner: "https://i.ytimg.com/vi/kyLuzKbgXAs/maxresdefault.jpg"
    },
    {
        id: 7,
        name: "WOZSI2",
        answer: "Alan walker",
        music: "./music/walker/WOZSI2_m-3o.mp3",
        banner: "https://i.scdn.co/image/ab67616d0000b273a152de6438e748b4c0cddff7"
    },


]


const music_list = document.getElementById('music_list');
const bottomMusic = document.getElementById('bottomMusic')
const title = document.getElementById('title')
const BotomAnswer = document.getElementById('answer')
const botom_music_img = document.getElementById('botom_music_img')
const loadingWave = document.querySelectorAll('.loading-bar')
const playBnt = document.getElementById('playBnt')

let defaultMusic = 0
function defaultMusicFunktion(defaultvalue) {
    title.textContent = walker[defaultvalue]?.name
    BotomAnswer.textContent = walker[defaultvalue]?.answer
    botom_music_img.src = walker[defaultvalue]?.banner
    bottomMusic.setAttribute('src', walker[defaultvalue]?.music)
    defaultMusic = defaultvalue

}
defaultMusicFunktion(defaultMusic)

walker.forEach((item, indexvalue) => {
    const musicname = document.createElement('div');
    musicname.classList.add('musicbox')

    const leftBox = document.createElement('div');
    leftBox.classList.add('leftBox')

    const rigthBox = document.createElement('div');
    rigthBox.classList.add('rigthBox')
    rigthBox.innerHTML = `<ion-icon class='playbtn' id="playbtn" name="play-outline"></ion-icon>`

    const index = document.createElement('p')
    index.classList.add('index')
    index.textContent = `0${item.id}`
    leftBox.append(index)
    const banner = document.createElement('img')
    banner.classList.add('banner')
    banner.setAttribute('src', item.banner)
    leftBox.append(banner)

    const titleAndAnswer = document.createElement('div')
    titleAndAnswer.classList.add('titleAndAnswer')

    const musicTitle = document.createElement('b')
    const answer = document.createElement('p')
    musicTitle.textContent = item.name
    answer.textContent = item.answer

    titleAndAnswer.append(musicTitle)
    titleAndAnswer.append(answer)
    leftBox.append(titleAndAnswer)
    musicname.append(leftBox)
    musicname.append(rigthBox)
    music_list.append(musicname)

    rigthBox.onclick = () => {
        defaultMusicFunktion(indexvalue)
        document.querySelectorAll('.musicbox').forEach(box => {
            box.classList.remove('activeMusic');
        });
        musicname.classList.add('activeMusic');
        title.textContent = item.name;
        BotomAnswer.textContent = item.answer;
        botom_music_img.src = item.banner;
        bottomMusic.setAttribute('src', item.music);
        playBnt.innerHTML = '<ion-icon id="pauseMusic" name="pause-outline"></ion-icon>'
        bottomMusic.play();
        loadingWave.forEach((item, index) => {
            item.style.animation = 'loading-wave-animation 1s ease-in-out infinite';
            item.style.animationDelay = `${index * 0.1}s`;
        });
    };
})

let toogle = false
playBnt.onclick = () => {
    toogle = !toogle
    playBnt.innerHTML = toogle ? '<ion-icon id="pauseMusic" name="pause-outline"></ion-icon>' : '<ion-icon name="play-outline"></ion-icon>'
    if (toogle) {
        bottomMusic.play()
        loadingWave.forEach((item, index) => {
            item.style.animation = 'loading-wave-animation 1s ease-in-out infinite';
            item.style.animationDelay = `${index * 0.1}s`;
        });
    }
    if (!toogle) {
        bottomMusic.pause()
        loadingWave.forEach((item, index) => {
            item.style.animation = '';
            item.style.animationDelay = ``;
        });
    }
}
const oldmusic = document.getElementById('oldmusic');
const nextmusic = document.getElementById('nextmusic');

nextmusic.onclick = () => {
    if (defaultMusic >= walker.length - 1) {
        defaultMusic = walker.length - 1
    }
    else {
        console.log('next')
        defaultMusic++
        defaultMusicFunktion(defaultMusic)
        bottomMusic.play()
        loadingWave.forEach((item, index) => {
            item.style.animation = 'loading-wave-animation 1s ease-in-out infinite';
            item.style.animationDelay = `${index * 0.1}s`;
        });
        document.querySelectorAll('.musicbox').forEach(el => {
            el.classList.remove('activeMusic');
        });
        const allBoxes = document.querySelectorAll('.musicbox');
        if (allBoxes[defaultMusic]) {
            allBoxes[defaultMusic].classList.add('activeMusic');
        }
    }
}
oldmusic.onclick = () => {
    console.log('old')
    if (defaultMusic === 0) {
        defaultMusic = 0
    }
    else {
        defaultMusic--
        defaultMusicFunktion(defaultMusic)
        bottomMusic.play()
        loadingWave.forEach((item, index) => {
            item.style.animation = 'loading-wave-animation 1s ease-in-out infinite';
            item.style.animationDelay = `${index * 0.1}s`;
        });
        document.querySelectorAll('.musicbox').forEach(el => {
            el.classList.remove('activeMusic');
        });
        const allBoxes = document.querySelectorAll('.musicbox');
        if (allBoxes[defaultMusic]) {
            allBoxes[defaultMusic].classList.add('activeMusic');
        }
    }

}

const durationel = document.getElementById('duration')
const progressBar = document.getElementById('progressBar')
const currentTimeEl = document.getElementById('currentTime')

bottomMusic.addEventListener('loadedmetadata', () => {
    progressBar.max = Math.floor(bottomMusic.duration)
    currentTimeEl.textContent = formatTime(bottomMusic.duration);
})

bottomMusic.addEventListener('timeupdate', () => {
    progressBar.value = Math.floor(bottomMusic.currentTime)
    durationel.textContent = formatTime(bottomMusic.currentTime);
})

progressBar.addEventListener('input', () => {
    bottomMusic.currentTime = progressBar.value;
});

bottomMusic.addEventListener('ended', () => {
    defaultMusic++;
    if (defaultMusic >= walker.length) {
        defaultMusic = 0;
    }
    defaultMusicFunktion(defaultMusic);
    bottomMusic.play();
    loadingWave.forEach((item, index) => {
        item.style.animation = 'loading-wave-animation 1s ease-in-out infinite';
        item.style.animationDelay = `${index * 0.1}s`;
    });
    document.querySelectorAll('.musicbox').forEach(el => el.classList.remove('activeMusic'));
    document.querySelectorAll('.musicbox')[defaultMusic]?.classList.add('activeMusic');
});

function formatTime(time) {
    const minutes = Math.floor(time / 60);
    const seconds = Math.floor(time % 60).toString().padStart(2, '0');
    return `${minutes}:${seconds}`;
}

const voiceRange = document.getElementById('voiceRange');
const voiceRangeValue = document.getElementById('voiceRangeValue')
voiceRange.oninput = () => {
    bottomMusic.volume = voiceRange.value
    if (voiceRange.value == 0) {
        volumeIcon.innerHTML = '<ion-icon name="volume-mute-outline"></ion-icon>';
    } else if (voiceRange.value < 0.5) {
        volumeIcon.innerHTML = '<ion-icon name="volume-low-outline"></ion-icon>';
    } else {
        volumeIcon.innerHTML = '<ion-icon name="volume-high-outline"></ion-icon>';
    }
}

// ========================================= Main ==============================================
const popularOld = document.getElementById('popularOld')
const popularNext = document.getElementById('popularNext')
const popular = document.getElementById('popular')

let scrolAmout = 200
popularNext.onclick = () => {
    popular.scrollBy({
        left: scrolAmout,
        behavior: "smooth"
    })
    updateScrollButtons()
}
popularOld.onclick = () => {
    popular.scrollBy({
        left: -scrolAmout,
        behavior: "smooth"
    })
    updateScrollButtons()
}

function updateScrollButtons() {
    const scrollLeft = popular.scrollLeft; 
    const scrollWidth = popular.scrollWidth; 
    const clientWidth = popular.clientWidth;
    if (scrollLeft <= 0) {
        popularOld.disabled = true
    }
    else if (scrollLeft > 0) {
        popularOld.disabled = false
    }

    if (scrollLeft + clientWidth >= scrollWidth - 1) {
        popularNext.disabled = true;
    } else {
        popularNext.disabled = false;
    }
}
popular.addEventListener('scroll', updateScrollButtons);
updateScrollButtons();


let isDragging = false;
let startX;
let scrollLeft;

popular.addEventListener('mousedown', (e) => {
    isDragging = true;
    popular.classList.add('dragging');
    startX = e.pageX - popular.offsetLeft;
    scrollLeft = popular.scrollLeft;
});

popular.addEventListener('mouseleave', () => {
    isDragging = false;
    popular.classList.remove('dragging');
});

popular.addEventListener('mouseup', () => {
    isDragging = false;
    popular.classList.remove('dragging');
});

popular.addEventListener('mousemove', (e) => {
    if (!isDragging) return;
    e.preventDefault();
    const x = e.pageX - popular.offsetLeft;
    const walk = (x - startX) * 1;
    popular.scrollLeft = scrollLeft - walk;
});

walker.forEach((item) => {
    const popular_card = document.createElement('div');
    const popuTitle = document.createElement('b')
    popuTitle.textContent = item.name
    const popuAnswer = document.createElement('p')
    const popuAnswerBox = document.createElement('div')
    popuAnswer.textContent = item.answer

    popular_card.classList.add('card')
    popuAnswerBox.classList.add('popuAnswerBox')


    popular_card.style.backgroundImage = `url(${item.banner})`
    popuAnswerBox.append(popuTitle)
    popuAnswerBox.append(popuAnswer)
    popular.append(popular_card)
    popular_card.append(popuAnswerBox)

    popular_card.innerHTML += `<ion-icon class='playbtn' id="playbtn" name="play-outline"></ion-icon>`

    popular_card.onclick = () => {
        playBnt.innerHTML = '<ion-icon id="pauseMusic" name="pause-outline"></ion-icon>'
        title.textContent = item.name;
        BotomAnswer.textContent = ' item.answer';
        botom_music_img.src = item.banner;
        bottomMusic.setAttribute('src', item.music);
        bottomMusic.play();
        loadingWave.forEach((item, index) => {
            item.style.animation = 'loading-wave-animation 1s ease-in-out infinite';
            item.style.animationDelay = `${index * 0.1}s`;
        });
    }
})

// ----------------------- popular artist -----------------------------
const popular_artistOld = document.getElementById('popular_artistOld');
const popular_artisNext = document.getElementById('popular_artisNext');
const popular_artist = document.querySelector('.popular_artist');




artist.forEach(item => {
    const artistBox = document.createElement('div')
    artistBox.classList.add('artist')
    const artist_img = document.createElement('img');
    artist_img.setAttribute('src', item.image)
    artistBox.append(artist_img)

    
    popular_artist.append(artistBox)
})


const artistAmout = 200; 

popular_artisNext.onclick = () => {
    popular_artist.scrollBy({
        left: artistAmout,
        behavior: "smooth"
    });
};

popular_artistOld.onclick = () => {
    popular_artist.scrollBy({
        left: -artistAmout,
        behavior: "smooth"
    });
};

function disabledFunktion() {
    const scrollLeft = popular_artist.scrollLeft;
    const scrollWidth = popular_artist.scrollWidth;
    const clientWidth = popular_artist.clientWidth;

    popular_artistOld.disabled = scrollLeft <= 0;
    popular_artisNext.disabled = scrollLeft + clientWidth >= scrollWidth - 1;
}

popular_artist.addEventListener('scroll', disabledFunktion);
disabledFunktion();

let isDown = false;
let startXA;
let scrollLeftStart;

popular_artist.addEventListener('mousedown', (e) => {
    isDown = true;
    startXA = e.pageX - popular_artist.offsetLeft;
    scrollLeftStart = popular_artist.scrollLeft;
    popular_artist.classList.add('dragging');
});

popular_artist.addEventListener('mouseleave', () => {
    isDown = false;
    popular_artist.classList.remove('dragging');
});

popular_artist.addEventListener('mouseup', () => {
    isDown = false;
    popular_artist.classList.remove('dragging');
});

popular_artist.addEventListener('mousemove', (e) => {
    if (!isDown) return;
    e.preventDefault();
    const x = e.pageX - popular_artist.offsetLeft;
    const walk = (x - startXA) * 2; 
    popular_artist.scrollLeft = scrollLeftStart - walk;
});


