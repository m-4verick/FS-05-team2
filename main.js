const canvas = document.getElementById("bg");
const ctx = canvas.getContext("2d");
let particles = [];
let particleCount;
const colors = ["#f64f59", "#c471ed", "#12c2e9", "#fff", "#ffdd00"];

function resizeCanvas() {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
  particleCount = Math.floor((window.innerWidth * window.innerHeight) / 10000);
  initParticles();
}

window.addEventListener("resize", resizeCanvas);

function newParticle(
  x = Math.random() * canvas.width,
  y = Math.random() * canvas.height
) {
  return {
    x: x,
    y: y,
    vx: (Math.random() - 0.5) * 0.5,
    vy: (Math.random() - 0.5) * 0.5,
    size: Math.random() * 3 + 1,
    color: colors[Math.floor(Math.random() * colors.length)],
  };
}

function initParticles() {
  particles = [];
  for (let i = 0; i < particleCount; i++) {
    particles.push(newParticle());
  }
}

function drawParticles() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  particles.forEach((p) => {
    ctx.beginPath();
    ctx.fillStyle = p.color;
    ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
    ctx.fill();
  });
}

function updateParticles() {
  particles.forEach((p) => {
    p.x += p.vx;
    p.y += p.vy;
    // 화면을 벗어나면 다시 랜덤 위치로 재생성
    if (p.x < 0 || p.x > canvas.width || p.y < 0 || p.y > canvas.height) {
      p.x = Math.random() * canvas.width;
      p.y = Math.random() * canvas.height;
    }
  });
}

function animate() {
  requestAnimationFrame(animate);
  drawParticles();
  updateParticles();
}

function explode(x, y) {
  const explosionCount = 30;
  for (let i = 0; i < explosionCount; i++) {
    particles.push({
      x: x,
      y: y,
      vx: (Math.random() - 0.5) * 4,
      vy: (Math.random() - 0.5) * 4,
      size: Math.random() * 4 + 2,
      color: colors[Math.floor(Math.random() * colors.length)],
    });
  }
  setTimeout(() => {
    particles.splice(-explosionCount, explosionCount);
  }, 2000);
}

// 초기화
resizeCanvas();
animate();

document.querySelectorAll("button").forEach((btn) => {
  btn.addEventListener("click", (e) => {
    explode(e.clientX, e.clientY);
  });
});
