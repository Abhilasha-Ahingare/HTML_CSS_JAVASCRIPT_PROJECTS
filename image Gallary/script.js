const incrementEl = document.querySelector(".increment");
const decrementEl = document.querySelector(".decrement");
const content = document.querySelector(".content");

content.addEventListener("wheel", (event) => {
  event.preventDefault();
  content.scrollTo({
    left: content.scrollLeft + event.deltaX,
  });
});

incrementEl.addEventListener("click", () => {
  content.scrollLeft += 900;
});
decrementEl.addEventListener("click", () => {
  content.scrollLeft -= 900;
});
