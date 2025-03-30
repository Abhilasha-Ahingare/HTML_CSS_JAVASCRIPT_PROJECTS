const liOne = document.getElementById("step-1");

const liTwo = document.getElementById("step-2");

const liThrid = document.getElementById("step-3");

const textOne = document.querySelector(".text-1");

const textTwo = document.querySelector(".text-2");

const textThrid = document.querySelector(".text-3");

const imageBox = document.querySelector(".image-box");

const steps = {
  "step-1": {
    text: textOne,
    image: "images/Inspiring quotes.jpg",
  },
  "step-2": {
    text: textTwo,
    image: "images/download (10).jpg",
  },
  "step-3": {
    text: textThrid,
    image: "images/download (8).jpg",
  },
};
liTwo.addEventListener("click", () => {
  textTwo.style.display = "block";
  textOne.style.display = "none";
  textThrid.style.display = "none";
  imageBox.innerHTML = "";
  const img = document.createElement("img");
  img.src = steps["step-2"].image;
  imageBox.appendChild(img);
});

liThrid.addEventListener("click", () => {
  textTwo.style.display = "none";
  textOne.style.display = "none";
  textThrid.style.display = "block";
  imageBox.innerHTML = "";
  const img = document.createElement("img");
  img.src = steps["step-3"].image;
  imageBox.appendChild(img);
});

liOne.addEventListener("click", () => {
  textTwo.style.display = "none";
  textOne.style.display = "block";
  textThrid.style.display = "none";
  imageBox.innerHTML = "";
  const img = document.createElement("img");
  img.src = steps["step-1"].image;
  imageBox.appendChild(img);
});
