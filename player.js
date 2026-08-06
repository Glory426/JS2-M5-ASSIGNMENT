class Jukebox {
    constructor() {
        this.albums = [];
    }

    addAlbum(album) {
        this.albums.push(album);
    }

    favoriteAlbum() {
        let max = -1;
        let fav;

        for (let i = 0; i < this.albums.length; i++) {
            if (this.albums[i].played > max) {
                max = this.albums[i].played;
                fav = this.albums[i];
            }
        }

        return fav.display();
    }
}

class Album {
    constructor(artist, title) {
        this.artist = artist;
        this.title = title;
        this.played = 0;
    }

    play() {
        this.played++;
    }

    display() {
        return `${this.artist} : ${this.title}. The album has been played ${this.played} times.`;
    }
}

// Array of album data
const albums = [
    {
        artist: "Operation Ivy",
        title: "Energy"
    },
    {
        artist: "Blink 182",
        title: "Dude Ranch"
    },
    {
        artist: "New Found Glory",
        title: "Sticks and Stones"
    },
    {
        artist: "Green Day",
        title: "Dookie"
    },
    {
        artist: "Sum 41",
        title: "All Killer No Filler"
    }
];

const jbox = new Jukebox();

const albumList = document.getElementById("albumList");
const favoriteAlbum = document.getElementById("favoriteAlbum");

// Create Album objects and add them to the jukebox
albums.forEach(function (item) {

    let album = new Album(item.artist, item.title);

    jbox.addAlbum(album);

    let option = document.createElement("option");
    option.value = jbox.albums.length - 1;
    option.textContent = item.artist + " - " + item.title;

    albumList.appendChild(option);

});

// Play button
document.getElementById("play").addEventListener("click", function () {

    let index = albumList.value;

    jbox.albums[index].play();

    favoriteAlbum.textContent = jbox.albums[index].display();

});

// Favorite Album button
document.getElementById("showFavorite").addEventListener("click", function () {

    favoriteAlbum.textContent =
        "Your favorite album is: " + jbox.favoriteAlbum();

});