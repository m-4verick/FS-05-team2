const canvasContainer = document.getElementById("canvas-container");
const canvas = document.createElement("canvas");
const ctx = canvas.getContext("2d");
canvasContainer.appendChild(canvas);

let width = window.innerWidth;
let height = window.innerHeight;
canvas.width = width;
canvas.height = height;

window.addEventListener("resize", () => {
  width = window.innerWidth;
  height = window.innerHeight;
  canvas.width = width;
  canvas.height = height;
  initParticles();
});

let particles = [];
const particleCount = 100;
const colors = ["#ff00c8", "#00fff9", "#ffffff"];

function initParticles() {
  particles = [];
  for (let i = 0; i < particleCount; i++) {
    particles.push({
      x: Math.random() * width,
      y: Math.random() * height,
      vx: (Math.random() - 0.5) * 2,
      vy: (Math.random() - 0.5) * 2,
      radius: Math.random() * 3 + 1,
      color: colors[Math.floor(Math.random() * colors.length)],
    });
  }
}

function drawParticles() {
  ctx.clearRect(0, 0, width, height);
  for (let p of particles) {
    ctx.beginPath();
    ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
    ctx.fillStyle = p.color;
    ctx.fill();
  }
}

function updateParticles() {
  for (let p of particles) {
    p.x += p.vx;
    p.y += p.vy;

    if (p.x < 0 || p.x > width) p.vx *= -1;
    if (p.y < 0 || p.y > height) p.vy *= -1;
  }
}

function animate() {
  drawParticles();
  updateParticles();
  requestAnimationFrame(animate);
}

initParticles();
animate();

// 마우스 위치에 따라 파티클 가속
window.addEventListener("mousemove", (e) => {
  const mouseX = e.clientX;
  const mouseY = e.clientY;

  for (let p of particles) {
    const dx = p.x - mouseX;
    const dy = p.y - mouseY;
    const dist = Math.sqrt(dx * dx + dy * dy);
    const force = Math.max(0, 100 - dist) / 100; // 거리에 비례한 반응
    p.vx += (dx / dist) * force * 0.1;
    p.vy += (dy / dist) * force * 0.1;
  }
});

const shortDescription = `
안녕하세요, 강태진입니다.<br>
나는요<br>
알리오 올리오, 평양 냉면 좋아하고여<br>
돌려 돌려 돌림판 다시는 안 합니다.<br>
그리고요<br>
혼술 좋아하고여<br>
그리고요<br>
뭐<br>
뭐뭐뭐뭐<br>
뭐뭐뭐뭐
`;

const longDescription = `
안녕하세요, Tony입니다.<br>
날 더 자세히 알고 싶나? 응큼해<br><br>
<strong>나이:</strong> 21세<br>
<strong>취미:</strong> 혼술, 알리오 올리오 탐방, 평양냉면집 순례<br>
<strong>지역:</strong> 대한민국 서울 강남 삼성동<br>
<strong>레벨:</strong> 백엔드 좋아함ㅋ 토니 퍼거슨 좋아함 ㅋ 어탐 좋아함ㅋ<br>
<strong>특징:</strong> 돌림판은 절대 다시 안 돌림<br><br>
싸우고 싶다면 언제든 연락 주세요 ㅋ <br>
`;

const descriptionEl = document.getElementById("description-text");
const toggleBtn = document.getElementById("toggle-btn");

let isShort = true;

// 전환 이벤트 완료 시 실행되는 함수
descriptionEl.addEventListener(
  "transitionend",
  () => {
    if (!isShort) descriptionEl.innerHTML = longDescription;
    else descriptionEl.innerHTML = shortDescription;

    requestAnimationFrame(() => {
      descriptionEl.style.opacity = "1";
    });
  },
  { once: false }
);

toggleBtn.addEventListener("click", () => {
  descriptionEl.style.opacity = "0";
  isShort = !isShort;
  if (isShort) {
    toggleBtn.textContent = "자세히 알기";
  } else {
    toggleBtn.textContent = "간략히 알기";
  }
});
