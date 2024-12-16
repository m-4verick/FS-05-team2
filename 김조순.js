const main = document.querySelector(".mainBox");
const myName = document.getElementById("myName");
const scroller = document.getElementById("scroller");

const colors = ["red", "coral", "yellow", "green", "blue", "navy", "purple"];

let i = 0;
let a = 6;

myName.addEventListener("click", (e) => {
  const initColor = "blanchedalmond";
  if (i < 7) {
    main.style.backgroundColor = colors[i];
    main.style.color = colors[a];
    i++;
    a--;
  } else {
    i = 0;
    a = 6;
    main.style.backgroundColor = initColor;
    main.style.color = "black";
  }
});

window.addEventListener("scroll", (e) => {
  if (window.scrollY > 100) {
    scroller.style.position = "sticky";
    scroller.style.bottom = 0;
  } else {
    scroller.style.position = "";
    scroller.style.bottom = 0;
  }
  console.log(window.scrollY);
});

scroller.addEventListener("click", (e) => {
  window.scrollTo({ top: 0, behavior: "smooth" });
});
