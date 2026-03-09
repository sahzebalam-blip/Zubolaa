*{
  margin:0;
  padding:0;
  box-sizing:border-box;
}

:root{
  --bg:#0a0710;
  --bg-soft:#130d1d;
  --gold-1:#f4e1a1;
  --gold-2:#d4af37;
  --gold-3:#a67c14;
  --purple-1:#5a287d;
  --purple-2:#7c3aa3;
  --white:#ffffff;
  --muted:rgba(255,255,255,0.84);
  --muted-2:rgba(255,255,255,0.68);
  --glass:rgba(255,255,255,0.08);
  --line:rgba(255,255,255,0.14);
  --shadow:0 24px 60px rgba(0,0,0,0.42);
  --card-shadow:0 22px 55px rgba(0,0,0,0.36);
  --transition:0.45s cubic-bezier(.2,.8,.2,1);
}

html,
body{
  width:100%;
  height:100%;
  overflow:hidden;
}

body{
  font-family:Arial, Helvetica, sans-serif;
  background:var(--bg);
  color:var(--white);
}

/* HERO */

.hero{
  position:relative;
  width:100%;
  height:100vh;
  overflow:hidden;
  background:
    linear-gradient(180deg, rgba(0,0,0,0.48), rgba(0,0,0,0.76)),
    url("zubolaa-bg.jpg.png") center/cover no-repeat;
}

.hero-overlay{
  position:absolute;
  inset:0;
  background:
    radial-gradient(circle at 20% 20%, rgba(124,58,163,0.18), transparent 18%),
    radial-gradient(circle at 82% 76%, rgba(212,175,55,0.16), transparent 22%),
    linear-gradient(180deg, rgba(255,255,255,0.02), rgba(0,0,0,0.04));
  pointer-events:none;
}

.hero-ambient{
  position:absolute;
  border-radius:50%;
  filter:blur(70px);
  pointer-events:none;
  opacity:0.42;
  mix-blend-mode:screen;
}

.hero-ambient-one{
  width:300px;
  height:300px;
  left:8%;
  top:12%;
  background:radial-gradient(circle, rgba(124,58,163,0.50), transparent 62%);
  animation:ambientFloat 12s ease-in-out infinite;
}

.hero-ambient-two{
  width:360px;
  height:360px;
  right:6%;
  bottom:10%;
  background:radial-gradient(circle, rgba(212,175,55,0.42), transparent 62%);
  animation:ambientFloat 15s ease-in-out infinite reverse;
}

.hero-ambient-three{
  width:220px;
  height:220px;
  left:46%;
  top:20%;
  background:radial-gradient(circle, rgba(255,255,255,0.10), transparent 62%);
  animation:ambientFloat 10s ease-in-out infinite;
}

.stars{
  position:absolute;
  inset:0;
  pointer-events:none;
}

.stars span{
  position:absolute;
  width:2px;
  height:2px;
  border-radius:50%;
  background:#ffffff;
  box-shadow:0 0 8px rgba(255,255,255,0.6);
  animation:twinkle 4.5s ease-in-out infinite;
  opacity:0.8;
}

.stars span:nth-child(1){left:6%; top:16%}
.stars span:nth-child(2){left:12%; top:28%}
.stars span:nth-child(3){left:18%; top:12%}
.stars span:nth-child(4){left:27%; top:22%}
.stars span:nth-child(5){left:35%; top:10%}
.stars span:nth-child(6){left:44%; top:24%}
.stars span:nth-child(7){left:54%; top:14%}
.stars span:nth-child(8){left:63%; top:25%}
.stars span:nth-child(9){left:72%; top:11%}
.stars span:nth-child(10){left:80%; top:20%}
.stars span:nth-child(11){left:89%; top:13%}
.stars span:nth-child(12){left:94%; top:26%}
.stars span:nth-child(13){left:10%; top:72%}
.stars span:nth-child(14){left:22%; top:82%}
.stars span:nth-child(15){left:41%; top:76%}
.stars span:nth-child(16){left:61%; top:80%}
.stars span:nth-child(17){left:78%; top:74%}
.stars span:nth-child(18){left:91%; top:68%}

.hero-content{
  position:absolute;
  inset:0;
  display:flex;
  flex-direction:column;
  align-items:center;
  justify-content:center;
  text-align:center;
  width:min(980px, calc(100% - 36px));
  margin:auto;
  z-index:2;
  animation:fadeUp 1.2s ease;
}

.hero-logo{
  width:min(220px, 45vw);
  height:auto;
  object-fit:contain;
  margin-bottom:18px;
  filter:drop-shadow(0 0 18px rgba(212,175,55,0.18));
}

.hero-kicker{
  display:inline-flex;
  align-items:center;
  justify-content:center;
  padding:10px 16px;
  border-radius:999px;
  border:1px solid var(--line);
  background:var(--glass);
  backdrop-filter:blur(12px);
  color:var(--gold-1);
  letter-spacing:2px;
  text-transform:uppercase;
  font-size:12px;
  margin-bottom:20px;
  box-shadow:var(--shadow);
}

.hero-content h1{
  font-size:clamp(40px, 7vw, 92px);
  line-height:1.02;
  letter-spacing:3px;
  text-transform:uppercase;
  margin-bottom:18px;
  color:var(--gold-2);
  text-shadow:
    0 0 14px rgba(212,175,55,0.42),
    0 0 32px rgba(166,124,20,0.24),
    0 16px 42px rgba(0,0,0,0.38);
}

.hero-tagline{
  font-size:clamp(18px, 2.1vw, 30px);
  line-height:1.6;
  color:var(--muted);
  margin-bottom:10px;
  max-width:880px;
}

.hero-subtext{
  font-size:clamp(15px, 1.35vw, 20px);
  line-height:1.85;
  color:var(--muted-2);
  max-width:860px;
}

/* BOT */

.bot{
  position:fixed;
  right:22px;
  bottom:22px;
  width:88px;
  height:88px;
  border:none;
  border-radius:50%;
  background:transparent;
  cursor:pointer;
  z-index:30;
  animation:botFloat 3.2s ease-in-out infinite;
}

.bot-core{
  position:absolute;
  inset:14px;
  border-radius:50%;
  background:
    radial-gradient(circle at 30% 30%, #fff4c8, var(--gold-1) 36%, var(--gold-2) 68%, var(--gold-3) 100%);
  box-shadow:
    0 0 18px rgba(212,175,55,0.34),
    0 0 34px rgba(212,175,55,0.18),
    inset 0 -10px 18px rgba(0,0,0,0.18);
}

.bot-ring{
  position:absolute;
  border-radius:50%;
  border:1px solid rgba(212,175,55,0.35);
}

.bot-ring-one{
  inset:6px;
  animation:spinSlow 9s linear infinite;
}

.bot-ring-two{
  inset:-2px;
  border-color:rgba(255,255,255,0.12);
  animation:spinSlowReverse 12s linear infinite;
}

.bot-face{
  position:absolute;
  inset:0;
}

.bot-eye{
  position:absolute;
  top:33px;
  width:8px;
  height:8px;
  border-radius:50%;
  background:#fff;
  box-shadow:0 0 8px rgba(255,255,255,0.6);
}

.bot-eye-left{ left:30px; }
.bot-eye-right{ right:30px; }

.bot-mouth{
  position:absolute;
  left:50%;
  top:51px;
  transform:translateX(-50%);
  width:20px;
  height:8px;
  border-bottom:3px solid #fff;
  border-radius:0 0 14px 14px;
}

.bot-hint{
  position:fixed;
  right:118px;
  bottom:48px;
  padding:10px 14px;
  border-radius:14px;
  background:rgba(12,12,18,0.92);
  border:1px solid rgba(255,255,255,0.10);
  color:var(--gold-1);
  font-size:13px;
  letter-spacing:.4px;
  box-shadow:var(--shadow);
  z-index:29;
}

/* CARD STAGE */

.card-stage{
  position:absolute;
  inset:0;
  z-index:20;
  pointer-events:none;
}

.nav-card{
  position:absolute;
  left:50%;
  top:58%;
  width:min(280px, 54vw);
  height:86px;
  border:none;
  border-radius:22px;
  background:
    linear-gradient(180deg, rgba(255,255,255,0.10), rgba(255,255,255,0.04));
  backdrop-filter:blur(14px);
  border:1px solid rgba(255,255,255,0.14);
  color:#fff;
  cursor:pointer;
  box-shadow:var(--card-shadow);
  transform:
    translate(-50%, -50%)
    translate3d(0,0,0)
    scale(0.78)
    rotateX(14deg);
  opacity:0;
  pointer-events:none;
  transition:
    transform var(--transition),
    opacity var(--transition),
    box-shadow 0.3s ease,
    border-color 0.3s ease;
  text-align:center;
}

.nav-card span{
  display:block;
  width:100%;
  padding:0 18px;
  font-size:18px;
  font-weight:700;
  letter-spacing:1px;
  color:var(--gold-1);
  text-transform:uppercase;
  text-shadow:0 0 10px rgba(212,175,55,0.18);
}

.nav-card::before{
  content:"";
  position:absolute;
  inset:0;
  border-radius:22px;
  background:
    linear-gradient(135deg, rgba(124,58,163,0.10), rgba(212,175,55,0.10));
  opacity:1;
}

.nav-card::after{
  content:"";
  position:absolute;
  left:16px;
  right:16px;
  top:14px;
  height:1px;
  background:linear-gradient(90deg, transparent, rgba(255,255,255,0.26), transparent);
}

.card-stage.active{
  pointer-events:auto;
}

.card-stage.active .nav-card{
  opacity:1;
  pointer-events:auto;
}

.card-stage.active .card-about{
  transform:
    translate(-50%, -50%)
    translate3d(-320px, -120px, 0)
    scale(1)
    rotateX(0deg);
  animation:floatCard 6s ease-in-out infinite;
}

.card-stage.active .card-academy{
  transform:
    translate(-50%, -50%)
    translate3d(-160px, 58px, 0)
    scale(1)
    rotateX(0deg);
  animation:floatCard 7s ease-in-out infinite;
}

.card-stage.active .card-token{
  transform:
    translate(-50%, -50%)
    translate3d(0px, -170px, 0)
    scale(1)
    rotateX(0deg);
  animation:floatCard 6.5s ease-in-out infinite;
}

.card-stage.active .card-digihub{
  transform:
    translate(-50%, -50%)
    translate3d(170px, 42px, 0)
    scale(1)
    rotateX(0deg);
  animation:floatCard 7.2s ease-in-out infinite;
}

.card-stage.active .card-contact{
  transform:
    translate(-50%, -50%)
    translate3d(330px, -112px, 0)
    scale(1)
    rotateX(0deg);
  animation:floatCard 6.8s ease-in-out infinite;
}

.nav-card:hover{
  box-shadow:
    0 0 22px rgba(212,175,55,0.22),
    0 22px 55px rgba(0,0,0,0.38);
  border-color:rgba(212,175,55,0.32);
  transform-origin:center;
}

.card-stage.active .card-about:hover{
  transform:
    translate(-50%, -50%)
    translate3d(-320px, -128px, 0)
    scale(1.03);
}

.card-stage.active .card-academy:hover{
  transform:
    translate(-50%, -50%)
    translate3d(-160px, 50px, 0)
    scale(1.03);
}

.card-stage.active .card-token:hover{
  transform:
    translate(-50%, -50%)
    translate3d(0px, -178px, 0)
    scale(1.03);
}

.card-stage.active .card-digihub:hover{
  transform:
    translate(-50%, -50%)
    translate3d(170px, 34px, 0)
    scale(1.03);
}

.card-stage.active .card-contact:hover{
  transform:
    translate(-50%, -50%)
    translate3d(330px, -120px, 0)
    scale(1.03);
}

/* LOADING */

.loading-screen{
  position:fixed;
  inset:0;
  display:flex;
  align-items:center;
  justify-content:center;
  flex-direction:column;
  gap:18px;
  background:rgba(0,0,0,0.90);
  backdrop-filter:blur(10px);
  z-index:60;
  opacity:0;
  pointer-events:none;
  transition:0.3s ease;
}

.loading-screen.show{
  opacity:1;
  pointer-events:auto;
}

.loading-orb{
  position:relative;
  width:96px;
  height:96px;
}

.loading-ring{
  position:absolute;
  inset:0;
  border-radius:50%;
  border:4px solid rgba(255,255,255,0.10);
  border-top-color:var(--gold-2);
  animation:spin 1s linear infinite;
}

.loading-core{
  position:absolute;
  inset:24px;
  border-radius:50%;
  background:
    radial-gradient(circle at 30% 30%, #fff4c8, var(--gold-1) 36%, var(--gold-2) 68%, var(--gold-3) 100%);
  box-shadow:0 0 16px rgba(212,175,55,0.22);
}

.loading-screen p{
  color:var(--gold-1);
  font-size:20px;
  letter-spacing:1px;
}

/* ANIMATIONS */

@keyframes fadeUp{
  from{
    opacity:0;
    transform:translateY(28px);
  }
  to{
    opacity:1;
    transform:translateY(0);
  }
}

@keyframes twinkle{
  0%,100%{
    opacity:.35;
    transform:scale(1);
  }
  50%{
    opacity:1;
    transform:scale(1.5);
  }
}

@keyframes ambientFloat{
  0%,100%{
    transform:translateY(0) scale(1);
  }
  50%{
    transform:translateY(-10px) scale(1.04);
  }
}

@keyframes botFloat{
  0%,100%{
    transform:translateY(0);
  }
  50%{
    transform:translateY(-8px);
  }
}

@keyframes spin{
  to{ transform:rotate(360deg); }
}

@keyframes spinSlow{
  to{ transform:rotate(360deg); }
}

@keyframes spinSlowReverse{
  to{ transform:rotate(-360deg); }
}

@keyframes floatCard{
  0%,100%{
    margin-top:0;
  }
  50%{
    margin-top:-6px;
  }
}

/* RESPONSIVE */

@media (max-width: 1100px){
  .card-stage.active .card-about{
    transform:translate(-50%, -50%) translate3d(-230px, -120px, 0) scale(1);
  }

  .card-stage.active .card-academy{
    transform:translate(-50%, -50%) translate3d(-115px, 48px, 0) scale(1);
  }

  .card-stage.active .card-token{
    transform:translate(-50%, -50%) translate3d(0px, -170px, 0) scale(1);
  }

  .card-stage.active .card-digihub{
    transform:translate(-50%, -50%) translate3d(125px, 38px, 0) scale(1);
  }

  .card-stage.active .card-contact{
    transform:translate(-50%, -50%) translate3d(240px, -110px, 0) scale(1);
  }
}

@media (max-width: 768px){
  .hero-logo{
    width:min(180px, 46vw);
  }

  .hero-kicker{
    font-size:10px;
    letter-spacing:1.3px;
    padding:9px 14px;
  }

  .hero-content h1{
    letter-spacing:1.6px;
  }

  .bot{
    width:76px;
    height:76px;
    right:16px;
    bottom:16px;
  }

  .bot-eye{
    top:29px;
  }

  .bot-eye-left{ left:26px; }
  .bot-eye-right{ right:26px; }

  .bot-mouth{
    top:47px;
  }

  .bot-hint{
    right:96px;
    bottom:38px;
    font-size:12px;
  }

  .nav-card{
    width:min(220px, 62vw);
    height:76px;
  }

  .nav-card span{
    font-size:15px;
  }

  .card-stage.active .card-about{
    transform:translate(-50%, -50%) translate3d(-110px, -126px, 0) scale(1);
  }

  .card-stage.active .card-academy{
    transform:translate(-50%, -50%) translate3d(-78px, 10px, 0) scale(1);
  }

  .card-stage.active .card-token{
    transform:translate(-50%, -50%) translate3d(0px, -210px, 0) scale(1);
  }

  .card-stage.active .card-digihub{
    transform:translate(-50%, -50%) translate3d(82px, 10px, 0) scale(1);
  }

  .card-stage.active .card-contact{
    transform:translate(-50%, -50%) translate3d(112px, -126px, 0) scale(1);
  }
}
