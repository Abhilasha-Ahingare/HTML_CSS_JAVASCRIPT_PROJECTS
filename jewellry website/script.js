
window.addEventListener("scroll", () => {
  document.querySelectorAll("[data-animate]").forEach(el => {
    const rect = el.getBoundingClientRect();
    if (rect.top < window.innerHeight - 50) {
      el.classList.add("visible");
    }
  });
});


const container = document.querySelector(".container");
// home page video create

const homeAD = document.querySelector("#home");

const HomeVideo = [
  "adds/add1.mp4",
  " adds/add5.mp4",
  " adds/add2.mp4",
  "adds/add4.mp4",
];

// Create main container for video section
const createMain = document.createElement("main");
createMain.classList.add("video-section");

// Create video element
const videoCreate = document.createElement("video");
videoCreate.autoplay = true;
videoCreate.loop = true;
videoCreate.muted = true;
videoCreate.src = HomeVideo[0]; // Default video

// Append elements to the DOM
homeAD.appendChild(createMain);
document.querySelector(".video-section").appendChild(videoCreate);

let currentIndex = 0;

function updateVideo() {
  currentIndex = (currentIndex + 1) % HomeVideo.length;
  videoCreate.src = HomeVideo[currentIndex];
  videoCreate.play();
}

setInterval(updateVideo, 11000);

// nackles div create

const nackalesArr = [
  {
    nackImage: "images/nackles/n-1.webp",
    NackName: "abhilasha",
    NackPrice: "₹1,32,251",
  },
  {
    nackImage: "images/nackles/n-16.jpg",
    NackName: "abhilasha",
    NackPrice: "₹2,32,351",
  },
  {
    nackImage: "images/nackles/n-6.webp",
    NackName: "abhilasha",
    NackPrice: "₹3,32,000",
  },
  {
    nackImage: "images/nackles/n-3.webpp",
    NackName: "abhilasha",
    NackPrice: "₹1,32,251",
  },
  {
    nackImage: "images/nackles/n-11.webp",
    NackName: "abhilasha",
    NackPrice: "₹5,32,231",
  },
  {
    nackImage: "images/nackles/n-10.webp",
    NackName: "abhilasha",
    NackPrice: "₹2,32,251",
  },
  {
    nackImage: "images/nackles/n-7.webp",
    NackName: "abhilasha",
    NackPrice: "₹4,32,21",
  },
];

const nackalesArrBackground = [
  {
    nackImageBg: "images/nackles/n-4.jpg",
  },
  {
    nackImageBg: "images/nackles/n-2.webp",
  },
  {
    nackImageBg: "images/nackles/n-8.jpg",
  },
  {
    nackImageBg: "images/nackles/n-15.jpg",
  },
  {
    nackImageBg: "images/nackles/n-17.jpg",
  },
  {
    nackImageBg: "images/nackles/n-19.jpg",
  },
  {
    nackImageBg: "images/nackles/n-20.jpg",
  },
];

nackalesArr.forEach((item, index) => {
  const nackles = document.querySelector(".neck-pieces");
  let nackalescreate = document.createElement("main");
  nackalescreate.classList.add("box-1");
  nackalescreate.innerHTML = `
  <div class="img-part-1">
         <img src="${item.nackImage}"alt="">
         </div>
     <p>${item.NackName}</p>
     <span>${item.NackPrice}</span>
 `;
  const nackalesBg = nackalesArrBackground[index];
  nackalescreate.querySelector(".img-part-1").style.backgroundImage = `url(${nackalesBg.nackImageBg})`;
  if (nackles) {
    nackles.appendChild(nackalescreate);
  }
});
//earing part
const earingArray = [
  {
    EaringVideo: "images/earing/evideo-1.mp4",
    EaringName: "abhilasha",
    EaringPrice: "₹1,32,251",
  },
  {
    EaringVideo: "images/earing/evideo-2.mp4",
    EaringName: "abhilasha",
    EaringPrice: "₹1,32,251",
  },
  {
    EaringVideo: "images/earing/evideo-3.mp4",
    EaringName: "abhilasha",
    EaringPrice: "₹1,32,251",
  },
  {
    EaringVideo: "images/earing/evideo-4.mp4",
    EaringName: "abhilasha",
    EaringPrice: "₹1,32,251",
  },
];

earingArray.forEach((item) => {
  const earingVideo = document.querySelector(".earing-pieces");
  const Earingcreate = document.createElement("div");
  Earingcreate.classList.add("earing-card");
  Earingcreate.innerHTML = `
                        <video src=${item.EaringVideo} loop autoplay muted></video>
                         <div class="text-area">
                            <p>${item.EaringName}</p>
                             <span class="price">${item.EaringPrice}</span>
                             <button>buy now <i class="fa-solid fa-bag-shopping"></i></button>
                             <span class="like"><i class="fa-regular fa-heart"></i></span>`;
  if (earingVideo) {
    earingVideo.appendChild(Earingcreate);
  }
});

// ring part
const ringArray = [
  {
    Ringimg: "images/rings/r-1.jpg",
    ringPrice: "₹1,32,251",
  },
  {
    Ringimg: "images/rings/r-5.jpg",
    ringPrice: "₹1,32,000",
  },
  {
    Ringimg: "images/rings/r-6.jpg",
    ringPrice: "₹3,32,251",
  },
  {
    Ringimg: "images/rings/r-3.jpg",
    ringPrice: "₹2,32,251",
  },
  {
    Ringimg: "images/rings/r-7.jpg",
    ringPrice: "₹1,00,000",
  },
];

ringArray.forEach((item) => {
  const ringIMg = document.querySelector(".ring-pieces");
  const ringcreate = document.createElement("div");
  ringcreate.classList.add("ring-card");
  ringcreate.innerHTML = `
                          <div class="images-ring">
                            <img src=${item.Ringimg} alt="">
                        </div>
                        <span class="price">${item.ringPrice}</span>`;
  if (ringIMg) {
    ringIMg.appendChild(ringcreate);
  }
});

//ads

const AddsArray = [
  {
    Adds: "images/top-collection/top1.jpg",
    AddsName: "abhilasha",
    AddsPrice: "₹1,32,251",
  },
  {
    Adds: "images/top-collection/top3.jpg",
    AddsName: "abhilasha",
    AddsPrice: "₹1,32,251",
  },
  {
    Adds: "images/top-collection/top6.jpg",
    AddsName: "abhilasha",
    AddsPrice: "₹1,32,251",
  },
  {
    Adds: "images/top-collection/top2.jpg",
    AddsName: "abhilasha",
    AddsPrice: "₹1,32,251",
  },
  {
    Adds: "images/top-collection/top4.jpg",
    AddsName: "abhilasha",
    AddsPrice: "₹1,32,251",
  },
  {
    Adds: "images/top-collection/top5.jpg",
    AddsName: "abhilasha",
    AddsPrice: "₹1,32,251",
  },
  {
    Adds: "images/top-collection/top7.jpg",
    AddsName: "abhilasha",
    AddsPrice: "₹1,32,251",
  },
];
AddsArray.forEach((item) => {
  const addsContent = document.querySelector(".top-card-two");
  const Addscreate = document.createElement("div");
  Addscreate.classList.add("card-create");
  Addscreate.innerHTML = `
                          <div class="card">
                        <img src=${item.Adds} alt="">
                         </div>
                    <span>${item.AddsPrice}</span>
                    <p>${item.AddsName}</p>`;
  if (addsContent) {
    addsContent.appendChild(Addscreate);
  }
});

// button add event

const newColl1 = document.querySelector(".new-collection");
const newColl2 = document.querySelector(".new-collection-2");
const newColl3 = document.querySelector(".new-collection-3");

const button1 = document
  .querySelector(".btn1")
  .addEventListener("click", () => {
    newColl1.style.display = "flex";
    newColl2.style.display = "none";
    newColl3.style.display = "none";
    button1.style.backgroundColor = "#582f2f";
    button3.style.color = "#c7c3c3";
  });

const button2 = document
  .querySelector(".btn2")
  .addEventListener("click", () => {
    newColl1.style.display = "none";
    newColl2.style.display = "flex";
    newColl3.style.display = "none";
    button2.style.backgroundColor = "#582f2f";
    button2.style.color = "#c7c3c3";
  });

const button3 = document
  .querySelector(".btn3")
  .addEventListener("click", () => {
    newColl1.style.display = "none";
    newColl2.style.display = "none";
    newColl3.style.display = "flex";
    button3.style.backgroundColor = "#582f2f";
    button3.style.color = "#c7c3c3";
  });

//   random video come part

const random = [
  "images/nack-gif.mp4",
  "images/ring-gif.mp4",
  "images/gif-style.mp4",
];

const letest = document.querySelectorAll(".letest-card-1");

function setRandomvideo() {
  letest.forEach((element, index) => {
    element.innerHTML = ` <video src=${random[index]} loop autoplay muted></video> 
    `;
  });
}
setRandomvideo();

// random image letest

const randomModleImg = [
  "images/models/m1.jpg",
  " images/models/m-5.jpg",
  "images/models/m3.jpg",
  "images/models/m2.jpg",
  "images/models/m7.jpg",
  "images/models/m4.jpg",
  "images/models/m6.jpg",
];
const letestModleImg = document.querySelectorAll(".letest-card-4");
function setRandomImage() {
  letestModleImg.forEach((item) => {
    const randomIMG = Math.floor(Math.random() * randomModleImg.length);
    item.innerHTML = `<img src=${randomModleImg[randomIMG]} alt="">`;
  });
}
setRandomImage();
setInterval(setRandomImage, 5000);
