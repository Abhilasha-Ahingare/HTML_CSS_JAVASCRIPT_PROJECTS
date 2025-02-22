// Get the input elements
const qustionEl = document.getElementById("qus");
const answerEl = document.getElementById("ans");

// Get the card elements
const addEl = document.querySelector(".add-card");

const deleteEl = document.querySelector(".remove-card");

const saveEl = document.querySelector(".save");

const closeEl = document.querySelector(".close");

const cardEL = document.querySelector(".card");

const cardAdd = document.querySelector(".card-create");

saveEl.addEventListener("click", () => {
  if (qustionEl.value.trim() && answerEl.value.trim()) {
    const createEl = document.createElement("div");
    createEl.classList.add("result");

    createEl.innerHTML = `<h2>${qustionEl.value}</h2>
    <p>${answerEl.value}</p>    
    `;
    cardAdd.appendChild(createEl);
  } else {
    alert("plase enter your qustion and answer");
  }
  qustionEl.value = "";
  answerEl.value = "";
});

// Add event listener to the add card button
addEl.addEventListener("click", () => {
  cardEL.style.display = "block";
});

deleteEl.addEventListener("click", () => {
  cardAdd.style.display = "none";
});

closeEl.addEventListener("click", () => {
  cardEL.style.display = "none";
});
