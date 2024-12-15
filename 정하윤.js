

// 요소 선택
const dayButton = document.getElementById("daybutton");
const nightButton = document.getElementById("nightbutton");
const spaceButton = document.querySelector("#space")
const body = document.body;
const headerH1 = document.querySelector(".header h1")
const sections = document.getElementsByClassName("section")
const keys = document.querySelectorAll(".key")
const values = document.querySelectorAll(".value")

function setDayMode() {
  body.style.backgroundColor = "#FFFFF0"; 
  headerH1.style.color = "#505050";
  for (let i = 0; i < sections.length; i++) {
    sections[i].style.background = "linear-gradient(to left, #bdc3c7, #2c3e50)";
  }
  for (let i = 0; i < keys.length; i++) {
    keys[i].style.color = "rgba(255, 255, 255, 0.871)";
  }
  for (let i = 0; i < values.length; i++) {
    values[i].style.color = "rgba(0, 0, 0, 0.761)"; 
  }
}

function setNightMode() {
  body.style.backgroundColor = "#2c3e50";
  headerH1.style.color = "#FFFFFF";
  for (let i = 0; i < sections.length; i++) {
    sections[i].style.background = "linear-gradient(to right, #bdc3c7, #2c3e50)";
  }
  for (let i = 0; i < keys.length; i++) {
    keys[i].style.color = "rgba(0, 0, 0, 0.761)"; 
  }
  for (let i = 0; i < values.length; i++) {
    values[i].style.color = "rgba(255, 255, 255, 0.871)";
  }
}

function setSpaceMode() {
  alert("그런건 없어요")
}

dayButton.addEventListener("click", setDayMode);
nightButton.addEventListener("click", setNightMode);
spaceButton.addEventListener("click", setSpaceMode)

// event.preventDefault

// document.addEventListener('click', function(e) {
//   e.preventDefault();
//   alert('누르지 마세요');
// })

document.addEventListener('contextmenu', function(e) {
  e.preventDefault();
  alert('어허~ 누르지 마시요');
})

console.log(keys[0].style.color); // 첫 번째 .key 요소의 인라인 색상
console.log(values[0].style.color); // 첫 번째 .value 요소의 인라인 색상
