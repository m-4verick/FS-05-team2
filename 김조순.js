const main = document.querySelector(".mainBox");

const colors = ["red", "coral", "yellow", "green", "blue", "navy", "purple"];

let i = 0;
let a = 6;
main.addEventListener("click", (e) => {
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
// const btn = document.createElement("button");

// window.addEventListener("scroll", (e) => {
//   console.log(window.scrollY);
//   if (window.scrollY !== 0) {
//     // console.log(1);
//     main.append(btn, "top");
//   } else {
//     // console.log(2);
//   }
// });
