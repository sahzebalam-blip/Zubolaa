// Zubolaa - small helpers: active nav link + current year
(function () {
  const canvas=document.createElement("canvas");
document.body.appendChild(canvas);

const ctx=canvas.getContext("2d");

canvas.width=window.innerWidth;
canvas.height=window.innerHeight;

let particles=[];

for(let i=0;i<40;i++){
particles.push({
x:Math.random()*canvas.width,
y:Math.random()*canvas.height,
r:Math.random()*2
});
}

function draw(){
ctx.clearRect(0,0,canvas.width,canvas.height);

particles.forEach(p=>{
ctx.beginPath();
ctx.arc(p.x,p.y,p.r,0,Math.PI*2);
ctx.fillStyle="rgba(255,200,100,0.6)";
ctx.fill();
});
requestAnimationFrame(draw);
}

draw();const path = (location.pathname.split("/").pop() || "index.html").toLowerCase();

  document.querySelectorAll(".links a").forEach(a => {
    const href = (a.getAttribute("href") || "").toLowerCase();
    if (href === path) a.classList.add("active");
  });

  const y = document.getElementById("year");
  if (y) y.textContent = String(new Date().getFullYear());
})();

