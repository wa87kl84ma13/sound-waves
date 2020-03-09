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
        release: 2000
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
        release: 1999
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
                            </div>
                        </div>`;
});

const stars = document.querySelectorAll('.stars');

function starsClick() {
    stars.forEach(function(star) {
        star.style.color = '#51CF9B';
    });
}

starsClick();
//stars.forEach(star => star.addEventListener('click', starsClick));