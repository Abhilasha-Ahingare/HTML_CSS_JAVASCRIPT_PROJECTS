const span = document.querySelector("span");

function colors() {
  const redEl = document.getElementById("Red").value;
  const greenEl = document.getElementById("green").value;
  const blueEl = document.getElementById("blue").value;

  document.body.style.backgroundColor =
    "RGB(" + redEl + "," + greenEl + "," + blueEl + ")";
  span.innerHTML = "RGB(" + redEl + "," + greenEl + "," + blueEl + ")";

  //   let r = Math.floor(0 + Math.random() * 255);
  //   let g = Math.floor(0 + Math.random() * 255);
  //   let b = Math.floor(0 + Math.random() * 255);
  //   const reuslt=`${r} ,${g} ,${b}`;
  //   span.innerHTML=`RGb(${reuslt})`
}

document.getElementById("Red").addEventListener("input", colors);
document.getElementById("green").addEventListener("input", colors);
document.getElementById("blue").addEventListener("input", colors);
