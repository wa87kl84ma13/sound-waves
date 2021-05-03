const albums = [
    {
        title: 'The Chronic',
        artist: 'Dr Dre',
        img: 'img/albums/the-chronic.jpg',
        release: 1992
    },
    {
        title: 'The Marshall Mathers LP',
        artist: 'Eminem',
        img: 'img/albums/mmlp.png',
        release: 2000,
        genre: 'Hip Hop/Rap',
        label: 'Aftermath Entertainment/Interscope Records',
        tracklist: [
            "<li>Public Service Announcement 2000</li>",
            "<li>Kill You</li>",
            "<li>Stan (feat. Dido)</li>",
            "<li>Paul (skit)</li>",
            "<li>Who Knew</li>",
            "<li>Steve Berman (skit)</li>",
            "<li>The Way I Am</li>",
            "<li>The Real Slim Shady</li>",
            "<li>Remember Me? (feat. RBX and Sticky Fingaz)</li>",
            "<li>I'm Back</li>",
            "<li>Marshall Mathers</li>",
            "<li>Ken Kaniff</li>",
            "<li>Drug Ballad</li>",
            "<li>Amityville</li>",
            "<li>Bitch Please II (feat. Dr. Dre, Snoop Dogg, Xzibit and Nate Dogg)</li>",
            "<li>Kim</li>",
            "<li>Under the Influence (feat. D12)</li>",
            "<li>Criminal</li>"
        ].join('')
        
    },
    {
        title: 'To Pimp a Butterfly',
        artist: 'Kendrick Lamar',
        img: 'img/albums/kendrick.jpg',
        release: 2015
    },
    {
        title: 'The Slim Shady LP',
        artist: 'Eminem',
        img: 'img/albums/sslp.jpg',
        release: 1999,
        genre: 'Hip Hop/Rap',
        label: 'Aftermath Entertainment/Interscope Records',
        tracklist: [
            "<li>Public Service Announcement</li>",
            "<li>My Name Is</li>",
            "<li>Guilty Conscience (feat. Dr Dre)</li>",
            "<li>Brain Damage</li>",
            "<li>Paul (skit)</li>",
            "<li>If I Had</li>",
            "<li>97 Bonnie & Clyde</li>",
            "<li>Bitch (skit)</li>",
            "<li>Role Model</li>",
            "<li>Lounge (skit)</li>",
            "<li>My Fault</li>",
            "<li>Ken Kaniff (skit)</li>",
            "<li>Cum on Everybody</li>",
            "<li>Rock Bottom</li>",
            "<li>Just Don't Give a Fuck</li>",
            "<li>Soap (skit)</li>",
            "<li>As the World Turns</li>",
            "<li>I'm Shady</li>",
            "<li>Bad Meets Evil</li>",
            "<li>Still Don't Give A Fuck</li>"
        ].join('')
    },
    {
        title: 'Greatest Hits',
        artist: 'Queen',
        img: 'img/albums/queen.jpg',
        release: 1981
    },
    {
        title: '2001',
        artist: 'Dr Dre',
        img: 'img/albums/2001.jpg',
        release: 1999
    },
    {
        title: 'The Blueprint',
        artist: 'Jay Z',
        img: 'img/albums/blueprint.jpg',
        release: 2001
    }
];

const music = document.querySelector('.albums-wrap');

albums.forEach(function(album) {
    music.innerHTML += `<div class="album-block">
                            <div class="album-content">
                                <img src="${album.img}" alt="${album.title}">
                                <h4>${album.title}</h4>
                                <span class="artist">${album.artist}</span>
                                <div class="reviews">
                                    <i class="fas fa-star stars"></i>
                                    <i class="fas fa-star stars"></i>
                                    <i class="fas fa-star stars"></i>
                                    <i class="fas fa-star stars"></i>
                                    <i class="fas fa-star stars"></i>
                                </div>
                                <div class="tracklist">
                                    <div class="tracklist-wrap">
                                        <div class="tracklist-image">
                                            <img src="${album.img}" alt="${album.title}">
                                        </div>
                                        <div class="tracklist-info">
                                            <h2 class="album-artist">${album.artist}</h2>
                                            <h3 class="album-title">${album.title}</h3>
                                            <div class="genre-release-container">
                                                <span class="genre">${album.genre} -</span>
                                                <span class="release-year">${album.release}</span>
                                            </div>
                                            <p class="record-label">${album.label}</p>
                                        </div>
                                    </div>
                                    <ol>
                                        ${album.tracklist}
                                    </ol>
                                </div>
                            </div>
                        </div>`;
});

// Show tracklist on click
const albumBlocks = document.querySelectorAll('.album-content');
const trackModal = document.getElementById('track-modal');

albumBlocks.forEach(function(block) {
    block.addEventListener('click', function() {
        this.getElementsByClassName('tracklist')[0].classList.add('show-tracklist');
        this.getElementsByClassName('tracklist')[0].classList.add('track-content');
        trackModal.style.display = 'block';
    });
});

// Close tracklist
const closeTracklist = document.getElementById('close-tracks');
const tracks = document.querySelectorAll('.tracklist');

closeTracklist.addEventListener('click', function() {
    tracks.forEach(function(track) {
        track.classList.remove('show-tracklist');
    });
    trackModal.style.display = 'none';
});

const stars = document.querySelectorAll('.stars');

function starsClick() {
    stars.forEach(function(star) {
        star.style.color = '#51CF9B';
    });
}

starsClick();
//stars.forEach(star => star.addEventListener('click', starsClick));

// Filter album - search bar
const filterAlbum = document.getElementById('search-album');

filterAlbum.addEventListener('keyup', filterAlbums);

function filterAlbums(e) {
    const filterText = e.target.value.toLowerCase();
    const albumList = music.querySelectorAll('.album-block');
    Array.from(albumList).forEach(function(album) {
        const albumName = album.textContent;
        if(albumName.toLowerCase().indexOf(filterText) != -1) {
            album.style.display = 'block';
            console.log(albumName)
        } else {
            album.style.display = 'none';
        }
    });
}
