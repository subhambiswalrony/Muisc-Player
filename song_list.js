//song list
let All_song = [
   {
     name: "Jodi Boli",
     path: "music/1.mp3",
     img: "images/1.jpg",
     singer: "Bengali Music"
   },
   {
     name: "Chaleya",
     path: "music/2.mp3",
     img: "images/2.jpg",
     singer: "Jawan"
   },
   {
     name: "Dandelions",
     path: "music/3.mp3",
     img: "images/3.jpg",
     singer: "English Song"
   },
   {
     name: "Harleys in Hawai",
     path: "music/4.mp3",
     img: "images/4.jpg",
     singer: "Katy Perry"
   },
   {
     name: "Hunger",
     path: "music/5.mp3",
     img: "images/5.jpg",
     singer: "English Song"
   },
   {
    name: "Wanna Be Yours",
    path: "music/6.mp3",
    img: "images/6.jpg",
    singer: "Just wanna be yours"
   },
   {
    name: "Infinity",
    path: "music/7.mp3",
    img: "images/7.jpg",
    singer: "For Infinity"
   },
   {
    name: "Until I found you",
    path: "music/8.mp3",
    img: "images/8.jpg",
    singer: "Stephen Sanchez"
   },
   {
    name: "O Maahi",
    path: "music/9.mp3",
    img: "images/9.jpg",
    singer: "Dunki"
   },
   {
    name: "O Sajni",
    path: "music/10.mp3",
    img: "images/10.jpg",
    singer: "Rescue Girls"
   },
   {
    name: "Perfect",
    path: "music/11.mp3",
    img: "images/11.jpg",
    singer: "Ed Sheeran"
   },
   {
    name: "Assa Kooda",
    path: "music/12.mp3",
    img: "images/12.jpg",
    singer: "Sai Abhyankkar"
   }
];
/*you can add more song & images from you computer*/


/*tracks*/
let tracks = document.querySelector('.tracks');

//creating a list or generating Html
for (let i = 0; i < All_song.length; i++) {

  let Html = ` <div class="song">
      <div class="img">
      <img src="${All_song[i].img}"/>
      </div>
      <div class="more">
      <audio src="${All_song[i].path}" id="music"></audio>
      <div class="song_info">
         <p id="title">${All_song[i].name}</p>
         <p>${All_song[i].singer}</p>
      </div>
      <button id="play_btn"><i class="fa fa-angle-right" aria-hidden="true"></i></button>
      </div>
    </div>`;

  tracks.insertAdjacentHTML("beforeend", Html);
};


/*please follow all the rules so that you do not face any problem*/