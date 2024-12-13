
// 요소 선택
const dayButton = document.getElementById("daybutton");
const nightButton = document.getElementById("nightbutton");
const body = document.body;
const headerH1 = document.querySelector(".header h1")

// 낮 모드 함수
function setDayMode() {
  body.style.backgroundColor = "#FFFFFF"; 
  body.style.color = "#000000";
  headerH1.style.color = "#505050";
}

// 밤 모드 함수
function setNightMode() {
  body.style.backgroundColor = "#2c3e50";
  body.style.color = "#ecf0f1";
  headerH1.style.color = "#FFFFFF"; 
}

dayButton.addEventListener("click", setDayMode);
nightButton.addEventListener("click", setNightMode);