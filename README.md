<!doctype html>
<html lang="en">
 <head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Zubolaa - Web3 Education &amp; Crypto Platform</title>
  <script src="https://cdn.tailwindcss.com/3.4.17"></script>
  <script src="/_sdk/element_sdk.js"></script>
  <style>
    * {
      margin: 0;
      padding: 0;
      box-sizing: border-box;
    }

    html, body {
      height: 100%;
      width: 100%;
    }

    body {
      font-family: 'Sora', 'Segoe UI', sans-serif;
      background: linear-gradient(135deg, #0a0e27 0%, #1a1540 50%, #0f0824 100%);
      color: #e0e7ff;
      overflow-x: hidden;
    }

    /* Gradient Text */
    .gradient-text {
      background: linear-gradient(135deg, #a78bfa 0%, #06b6d4 100%);
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
      background-clip: text;
    }

    /* Neon Glow Effects */
    .neon-glow-purple {
      box-shadow: 0 0 20px rgba(167, 139, 250, 0.6), 0 0 40px rgba(167, 139, 250, 0.3);
    }

    .neon-glow-cyan {
      box-shadow: 0 0 20px rgba(6, 182, 212, 0.6), 0 0 40px rgba(6, 182, 212, 0.3);
    }

    .glow-text-purple {
      text-shadow: 0 0 10px rgba(167, 139, 250, 0.8), 0 0 20px rgba(167, 139, 250, 0.4);
    }

    .glow-text-cyan {
      text-shadow: 0 0 10px rgba(6, 182, 212, 0.8), 0 0 20px rgba(6, 182, 212, 0.4);
    }

    /* Animated Gradient Background */
    @keyframes gradientShift {
      0% {
        background-position: 0% 50%;
      }
      50% {
        background-position: 100% 50%;
      }
      100% {
        background-position: 0% 50%;
      }
    }

    .animated-gradient {
      background: linear-gradient(-45deg, #a78bfa, #06b6d4, #1e293b, #a78bfa);
      background-size: 300% 300%;
      animation: gradientShift 15s ease infinite;
    }

    /* Floating Animation */
    @keyframes float {
      0%, 100% {
        transform: translateY(0px);
      }
      50% {
        transform: translateY(-20px);
      }
    }

    .float {
      animation: float 3s ease-in-out infinite;
    }

    /* Shine Animation */
    @keyframes shine {
      0% { background-position: 0% }
      100% { background-position: 200% }
    }

    .animate-shine {
      background-size: 200% auto;
      animation: shine 4s linear infinite;
    }

    /* Slow Spin Animation */
    @keyframes spinSlow {
      from { transform: rotate(0deg); }
      to { transform: rotate(360deg); }
    }

    .animate-spin-slow {
      animation: spinSlow 20s linear infinite;
    }

    /* Sparkle Effect */
    @keyframes sparkle {
      0%, 100% { opacity: 0; transform: scale(0); }
      50% { opacity: 1; transform: scale(1); }
    }

    .sparkle {
      animation: sparkle 2s ease-in-out infinite;
    }

    /* Glowing Planet Background */
    @keyframes orbitSlow {
      0% { transform: translate(0, 0); }
      25% { transform: translate(100px, -50px); }
      50% { transform: translate(50px, 100px); }
      75% { transform: translate(-80px, 60px); }
      100% { transform: translate(0, 0); }
    }

    .orbit-slow {
      animation: orbitSlow 15s ease-in-out infinite;
    }

    /* Hover Effects */
    .btn-primary {
      background: linear-gradient(135deg, #a78bfa, #06b6d4);
      transition: all 0.3s ease;
      border: 2px solid transparent;
    }

    .btn-primary:hover {
      box-shadow: 0 0 30px rgba(167, 139, 250, 0.8), 0 0 60px rgba(6, 182, 212, 0.5);
      transform: translateY(-2px);
    }

    .btn-secondary {
      border: 2px solid #a78bfa;
      background: transparent;
      color: #a78bfa;
      transition: all 0.3s ease;
    }

    .btn-secondary:hover {
      background: rgba(167, 139, 250, 0.1);
      box-shadow: 0 0 20px rgba(167, 139, 250, 0.5);
    }

    /* Card Styles */
    .card {
      background: rgba(30, 41, 59, 0.5);
      border: 1px solid rgba(167, 139, 250, 0.2);
      backdrop-filter: blur(10px);
      transition: all 0.3s ease;
    }

    .card:hover {
      border-color: rgba(167, 139, 250, 0.6);
      background: rgba(30, 41, 59, 0.8);
      transform: translateY(-5px);
    }

    /* Smooth Scrolling */
    html {
      scroll-behavior: smooth;
    }

    /* Section Spacing */
    section {
      padding: 80px 20px;
    }

    @media (max-width: 768px) {
      section {
        padding: 50px 16px;
      }
    }
  </style>
  <style>body { box-sizing: border-box; }</style>
  <script src="/_sdk/data_sdk.js" type="text/javascript"></script>
 </head>
 <body class="w-full h-full overflow-auto">
  <div class="w-full h-full">
   <!-- Navigation -->
   <nav class="fixed top-0 w-full z-50 backdrop-blur-md bg-black/20 border-b border-purple-500/20">
    <div class="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
     <div class="text-2xl font-bold gradient-text glow-text-purple">
      Zubolaa
     </div>
     <div class="hidden md:flex space-x-8">
      <a href="#about" class="hover:text-cyan-400 transition">About</a> <a href="#token" class="hover:text-cyan-400 transition">Token</a> <a href="#academy" class="hover:text-cyan-400 transition">Academy</a> <a href="#roadmap" class="hover:text-cyan-400 transition">Roadmap</a>
     </div>
    </div>
   </nav><!-- Hero Section -->
   <section class="pt-32 pb-20 relative overflow-hidden">
    <div class="absolute inset-0 opacity-30"><!-- Animated Planets/Orbs -->
     <div class="absolute top-10 right-10 w-40 h-40 bg-gradient-to-br from-purple-500 to-pink-600 rounded-full blur-2xl animate-spin-slow"></div>
     <div class="absolute top-20 right-20 w-96 h-96 bg-purple-600 rounded-full blur-3xl orbit-slow"></div>
     <div class="absolute bottom-20 left-20 w-96 h-96 bg-cyan-600 rounded-full blur-3xl"></div><!-- Sparkle Stars -->
     <div class="absolute top-1/4 right-1/3 w-2 h-2 bg-yellow-300 rounded-full sparkle"></div>
     <div class="absolute top-1/3 left-1/4 w-2 h-2 bg-cyan-300 rounded-full sparkle" style="animation-delay: 0.5s;"></div>
     <div class="absolute bottom-1/4 right-1/4 w-2 h-2 bg-pink-300 rounded-full sparkle" style="animation-delay: 1s;"></div>
     <div class="absolute top-2/3 left-1/3 w-2 h-2 bg-purple-300 rounded-full sparkle" style="animation-delay: 1.5s;"></div>
    </div>
    <div class="max-w-6xl mx-auto relative z-10">
     <div class="text-center space-y-8">
      <h1 class="text-5xl md:text-7xl font-black leading-tight"><span class="gradient-text glow-text-purple">The Future of</span><br><span class="gradient-text glow-text-cyan">Web3 Learning</span></h1>
      <p class="text-lg md:text-xl text-indigo-200 max-w-2xl mx-auto leading-relaxed">Master cryptocurrency, blockchain, and digital assets through our cutting-edge Academy. Trade, earn, and grow with Zubolaa's innovative ecosystem.</p>
      <div class="flex flex-col sm:flex-row gap-4 justify-center pt-6">
       <button class="btn-primary text-white font-bold py-3 px-8 rounded-lg text-lg"> Start Learning Now </button> <button class="btn-secondary font-bold py-3 px-8 rounded-lg text-lg"> Explore Token </button>
      </div>
     </div>
     <div class="mt-20 grid grid-cols-1 md:grid-cols-3 gap-6">
      <div class="card p-6 rounded-lg neon-glow-purple">
       <div class="text-3xl font-bold gradient-text mb-2">
        50K+
       </div>
       <p class="text-sm text-indigo-300">Active Learners</p>
      </div>
      <div class="card p-6 rounded-lg neon-glow-cyan">
       <div class="text-3xl font-bold text-cyan-400 mb-2">
        500+
       </div>
       <p class="text-sm text-indigo-300">Courses Available</p>
      </div>
      <div class="card p-6 rounded-lg neon-glow-purple">
       <div class="text-3xl font-bold gradient-text mb-2">
        $100M+
       </div>
       <p class="text-sm text-indigo-300">Total Value Locked</p>
      </div>
     </div>
    </div>
   </section><!-- Achievements/Milestones Section -->
   <section class="relative">
    <div class="max-w-6xl mx-auto">
     <h2 class="text-4xl md:text-5xl font-black mb-12 gradient-text">Achievement Milestones</h2>
     <p class="text-lg text-indigo-300 mb-12 max-w-2xl">Level up your Web3 journey! Earn ZBL rewards as you complete milestones and unlock exclusive benefits.</p>
     <div class="grid md:grid-cols-4 gap-6"><!-- Milestone 1 -->
      <div class="card p-8 rounded-lg text-center hover:scale-105 transform transition">
       <div class="relative inline-block mb-6">
        <div class="w-24 h-24 bg-gradient-to-br from-green-400 to-emerald-600 rounded-full flex items-center justify-center animate-shine">
         <div class="text-4xl">
          🌱
         </div>
        </div>
        <div class="absolute -top-2 -right-2 w-8 h-8 bg-green-500 rounded-full flex items-center justify-center text-white text-lg font-bold">
         ✓
        </div>
       </div>
       <h3 class="text-xl font-bold text-green-400 mb-2">Blockchain Basics</h3>
       <p class="text-sm text-indigo-300 mb-4">Complete your first course module</p>
       <div class="bg-green-900/20 border border-green-500/30 p-3 rounded-lg">
        <p class="text-xs text-green-300 font-semibold">+250 ZBL • +100 XP</p>
       </div>
      </div><!-- Milestone 2 -->
      <div class="card p-8 rounded-lg text-center hover:scale-105 transform transition">
       <div class="relative inline-block mb-6">
        <div class="w-24 h-24 bg-gradient-to-br from-blue-400 to-blue-600 rounded-full flex items-center justify-center animate-shine" style="animation-delay: 1s;">
         <div class="text-4xl">
          🚀
         </div>
        </div>
        <div class="absolute -top-2 -right-2 w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center text-white text-lg font-bold">
         ✓
        </div>
       </div>
       <h3 class="text-xl font-bold text-blue-400 mb-2">DeFi Explorer</h3>
       <p class="text-sm text-indigo-300 mb-4">Complete DeFi Fundamentals course</p>
       <div class="bg-blue-900/20 border border-blue-500/30 p-3 rounded-lg">
        <p class="text-xs text-blue-300 font-semibold">+500 ZBL • +250 XP</p>
       </div>
      </div><!-- Milestone 3 -->
      <div class="card p-8 rounded-lg text-center hover:scale-105 transform transition">
       <div class="relative inline-block mb-6">
        <div class="w-24 h-24 bg-gradient-to-br from-purple-400 to-purple-600 rounded-full flex items-center justify-center animate-shine" style="animation-delay: 2s;">
         <div class="text-4xl">
          💎
         </div>
        </div>
        <div class="absolute -top-2 -right-2 w-8 h-8 bg-purple-500 rounded-full flex items-center justify-center text-white text-lg font-bold">
         ✓
        </div>
       </div>
       <h3 class="text-xl font-bold text-purple-400 mb-2">Trading Master</h3>
       <p class="text-sm text-indigo-300 mb-4">Complete Advanced Trading course</p>
       <div class="bg-purple-900/20 border border-purple-500/30 p-3 rounded-lg">
        <p class="text-xs text-purple-300 font-semibold">+1000 ZBL • +500 XP</p>
       </div>
      </div><!-- Milestone 4 -->
      <div class="card p-8 rounded-lg text-center hover:scale-105 transform transition">
       <div class="relative inline-block mb-6">
        <div class="w-24 h-24 bg-gradient-to-br from-yellow-400 to-orange-600 rounded-full flex items-center justify-center animate-shine" style="animation-delay: 3s;">
         <div class="text-4xl">
          👑
         </div>
        </div>
        <div class="absolute -top-2 -right-2 w-8 h-8 bg-yellow-500 rounded-full flex items-center justify-center text-white text-lg font-bold">
         ✓
        </div>
       </div>
       <h3 class="text-xl font-bold text-yellow-400 mb-2">Web3 Legend</h3>
       <p class="text-sm text-indigo-300 mb-4">Master all courses &amp; certifications</p>
       <div class="bg-yellow-900/20 border border-yellow-500/30 p-3 rounded-lg">
        <p class="text-xs text-yellow-300 font-semibold">+5000 ZBL • +2000 XP</p>
       </div>
      </div>
     </div><!-- Progress Bar -->
     <div class="mt-16 card p-8 rounded-lg">
      <div class="flex justify-between items-center mb-4">
       <h3 class="text-xl font-bold text-cyan-400">Your Progress</h3><span class="text-2xl font-bold gradient-text">3/4 Milestones Unlocked</span>
      </div>
      <div class="w-full bg-indigo-900/30 rounded-full h-4 overflow-hidden border border-cyan-500/30">
       <div class="bg-gradient-to-r from-green-400 via-cyan-400 to-purple-400 h-full w-3/4 animate-shine"></div>
      </div>
      <p class="text-sm text-indigo-300 mt-4">You've earned <span class="font-bold text-cyan-400">1,750 ZBL</span> and <span class="font-bold text-purple-400">850 XP</span> so far. Keep going! 🚀</p>
     </div>
    </div>
    <section id="about" class="relative">
     <div class="max-w-6xl mx-auto">
      <h2 class="text-4xl md:text-5xl font-black mb-12 gradient-text">About Zubolaa</h2>
      <div class="grid md:grid-cols-2 gap-12 items-center">
       <div class="space-y-6">
        <p class="text-lg text-indigo-200 leading-relaxed">Zubolaa is a revolutionary Web3 platform combining world-class education with a powerful cryptocurrency ecosystem. We believe in democratizing access to blockchain knowledge and financial opportunities.</p>
        <p class="text-lg text-indigo-200 leading-relaxed">Our platform empowers millions to understand, adopt, and benefit from cryptocurrency and decentralized finance. We're building the infrastructure for the next generation of digital natives.</p>
        <div class="space-y-3 pt-4">
         <div class="flex items-center space-x-3">
          <div class="w-2 h-2 bg-purple-400 rounded-full"></div><span class="text-indigo-100">Expert-led courses from industry leaders</span>
         </div>
         <div class="flex items-center space-x-3">
          <div class="w-2 h-2 bg-cyan-400 rounded-full"></div><span class="text-indigo-100">Earn while you learn with ZUB rewards</span>
         </div>
         <div class="flex items-center space-x-3">
          <div class="w-2 h-2 bg-purple-400 rounded-full"></div><span class="text-indigo-100">Community-driven governance</span>
         </div>
        </div>
       </div>
       <div class="card p-8 rounded-lg neon-glow-cyan float">
        <div class="bg-gradient-to-br from-purple-600 to-cyan-600 h-64 rounded-lg flex items-center justify-center">
         <div class="text-center">
          <div class="text-6xl font-black text-white opacity-50">
           Z
          </div>
          <p class="text-white mt-2">Zubolaa Ecosystem</p>
         </div>
        </div>
       </div>
      </div>
     </div>
    </section><!-- Token Section -->
    <section id="token" class="relative">
     <div class="max-w-6xl mx-auto">
      <h2 class="text-4xl md:text-5xl font-black mb-12 gradient-text">Zubolaa Token (ZBL)</h2>
      <div class="grid md:grid-cols-2 gap-12 items-center">
       <div class="card p-8 rounded-lg neon-glow-purple float">
        <div class="bg-gradient-to-br from-cyan-600 to-purple-600 h-64 rounded-lg flex items-center justify-center">
         <div class="text-center">
          <div class="text-6xl font-black text-white opacity-50 animate-spin-slow">
           ZBL
          </div>
          <p class="text-white mt-2">Native Token</p>
         </div>
        </div>
       </div>
       <div class="space-y-8">
        <div class="space-y-3">
         <h3 class="text-2xl font-bold text-cyan-400">Token Utilities</h3>
         <div class="space-y-4">
          <div class="flex items-start space-x-4">
           <div class="text-purple-400 text-2xl font-bold">
            →
           </div>
           <div>
            <p class="font-semibold text-white">Governance Rights</p>
            <p class="text-sm text-indigo-300">Vote on platform decisions and upgrades</p>
           </div>
          </div>
          <div class="flex items-start space-x-4">
           <div class="text-cyan-400 text-2xl font-bold">
            →
           </div>
           <div>
            <p class="font-semibold text-white">Staking Rewards</p>
            <p class="text-sm text-indigo-300">Earn passive income by staking ZBL</p>
           </div>
          </div>
          <div class="flex items-start space-x-4">
           <div class="text-purple-400 text-2xl font-bold">
            →
           </div>
           <div>
            <p class="font-semibold text-white">Course Access</p>
            <p class="text-sm text-indigo-300">Unlock premium educational content</p>
           </div>
          </div>
          <div class="flex items-start space-x-4">
           <div class="text-cyan-400 text-2xl font-bold">
            →
           </div>
           <div>
            <p class="font-semibold text-white">Trading Discounts</p>
            <p class="text-sm text-indigo-300">Reduced fees on all platform transactions</p>
           </div>
          </div>
         </div>
        </div>
        <div class="bg-gradient-to-r from-purple-900/30 to-cyan-900/30 border border-purple-500/30 p-6 rounded-lg">
         <p class="text-sm text-indigo-200 mb-4">Token Stats</p>
         <div class="grid grid-cols-2 gap-4">
          <div>
           <p class="text-xs text-indigo-400">Total Supply</p>
           <p class="text-lg font-bold text-purple-400">1 Billion</p>
          </div>
          <div>
           <p class="text-xs text-indigo-400">Market Cap</p>
           <p class="text-lg font-bold text-cyan-400">$250M</p>
          </div>
         </div>
        </div>
       </div>
      </div>
     </div>
    </section><!-- Academy Section -->
    <section id="academy" class="relative">
     <div class="max-w-6xl mx-auto">
      <h2 class="text-4xl md:text-5xl font-black mb-4 gradient-text">Zubolaa Academy</h2>
      <p class="text-lg text-indigo-300 mb-12 max-w-2xl">Learn from the best in the industry. Our structured curriculum takes you from blockchain basics to advanced trading strategies.</p>
      <div class="grid md:grid-cols-3 gap-6">
       <div class="card p-6 rounded-lg hover:scale-105">
        <div class="bg-gradient-to-br from-purple-600 to-purple-800 h-40 rounded-lg mb-4 flex items-center justify-center">
         <div class="text-4xl">
          🚀
         </div>
        </div>
        <h3 class="text-xl font-bold text-purple-400 mb-2">Blockchain 101</h3>
        <p class="text-sm text-indigo-300 mb-4">Master the fundamentals of blockchain technology and cryptocurrency.</p>
        <p class="text-xs text-cyan-400 font-semibold">8 Courses • Beginner</p>
       </div>
       <div class="card p-6 rounded-lg hover:scale-105">
        <div class="bg-gradient-to-br from-cyan-600 to-cyan-800 h-40 rounded-lg mb-4 flex items-center justify-center">
         <div class="text-4xl">
          💎
         </div>
        </div>
        <h3 class="text-xl font-bold text-cyan-400 mb-2">DeFi Mastery</h3>
        <p class="text-sm text-indigo-300 mb-4">Explore decentralized finance, liquidity pools, and yield farming.</p>
        <p class="text-xs text-purple-400 font-semibold">12 Courses • Intermediate</p>
       </div>
       <div class="card p-6 rounded-lg hover:scale-105">
        <div class="bg-gradient-to-br from-indigo-600 to-purple-800 h-40 rounded-lg mb-4 flex items-center justify-center">
         <div class="text-4xl">
          🎯
         </div>
        </div>
        <h3 class="text-xl font-bold text-indigo-400 mb-2">Trading Pro</h3>
        <p class="text-sm text-indigo-300 mb-4">Advanced trading strategies, technical analysis, and risk management.</p>
        <p class="text-xs text-cyan-400 font-semibold">15 Courses • Advanced</p>
       </div>
      </div>
     </div>
    </section><!-- Roadmap Section -->
    <section id="roadmap" class="relative">
     <div class="max-w-6xl mx-auto">
      <h2 class="text-4xl md:text-5xl font-black mb-12 gradient-text">Our Roadmap</h2>
      <div class="space-y-6">
       <div class="card p-6 rounded-lg border-l-4 border-purple-500">
        <div class="flex justify-between items-start">
         <div>
          <h3 class="text-2xl font-bold text-purple-400 mb-2">Q1 2024 - Foundation</h3>
          <p class="text-indigo-300">Launch Academy beta with 100+ courses, ZUB token deployment, community building</p>
         </div>
         <div class="bg-purple-600/20 px-4 py-2 rounded-lg text-xs text-purple-300 font-semibold">
          Completed
         </div>
        </div>
       </div>
       <div class="card p-6 rounded-lg border-l-4 border-cyan-500">
        <div class="flex justify-between items-start">
         <div>
          <h3 class="text-2xl font-bold text-cyan-400 mb-2">Q2 2024 - Expansion</h3>
          <p class="text-indigo-300">Staking platform launch, partnerships with major exchanges, governance voting</p>
         </div>
         <div class="bg-cyan-600/20 px-4 py-2 rounded-lg text-xs text-cyan-300 font-semibold">
          In Progress
         </div>
        </div>
       </div>
       <div class="card p-6 rounded-lg border-l-4 border-purple-500">
        <div class="flex justify-between items-start">
         <div>
          <h3 class="text-2xl font-bold text-purple-400 mb-2">Q3 2024 - Evolution</h3>
          <p class="text-indigo-300">Trading platform beta, mobile app release, advanced certification programs</p>
         </div>
         <div class="bg-purple-600/20 px-4 py-2 rounded-lg text-xs text-purple-300 font-semibold">
          Upcoming
         </div>
        </div>
       </div>
       <div class="card p-6 rounded-lg border-l-4 border-cyan-500">
        <div class="flex justify-between items-start">
         <div>
          <h3 class="text-2xl font-bold text-cyan-400 mb-2">Q4 2024 - Innovation</h3>
          <p class="text-indigo-300">Full trading platform launch, DAO formation, global expansion</p>
         </div>
         <div class="bg-cyan-600/20 px-4 py-2 rounded-lg text-xs text-cyan-300 font-semibold">
          Planned
         </div>
        </div>
       </div>
      </div>
     </div>
    </section><!-- Why Choose Us Section -->
    <section class="relative">
     <div class="max-w-6xl mx-auto">
      <h2 class="text-4xl md:text-5xl font-black mb-12 gradient-text">Why Choose Zubolaa?</h2>
      <div class="grid md:grid-cols-2 gap-8">
       <div class="card p-8 rounded-lg space-y-4">
        <div class="flex items-start space-x-4">
         <div class="text-2xl text-purple-400">
          ✓
         </div>
         <div>
          <h3 class="text-lg font-bold text-white mb-1">Industry Experts</h3>
          <p class="text-sm text-indigo-300">Learn from blockchain pioneers with 50+ years combined experience</p>
         </div>
        </div>
       </div>
       <div class="card p-8 rounded-lg space-y-4">
        <div class="flex items-start space-x-4">
         <div class="text-2xl text-cyan-400">
          ✓
         </div>
         <div>
          <h3 class="text-lg font-bold text-white mb-1">Hands-On Learning</h3>
          <p class="text-sm text-indigo-300">Interactive labs and real-world projects to build your portfolio</p>
         </div>
        </div>
       </div>
       <div class="card p-8 rounded-lg space-y-4">
        <div class="flex items-start space-x-4">
         <div class="text-2xl text-purple-400">
          ✓
         </div>
         <div>
          <h3 class="text-lg font-bold text-white mb-1">Earn While Learning</h3>
          <p class="text-sm text-indigo-300">Get rewarded with ZUB tokens for completing courses and milestones</p>
         </div>
        </div>
       </div>
       <div class="card p-8 rounded-lg space-y-4">
        <div class="flex items-start space-x-4">
         <div class="text-2xl text-cyan-400">
          ✓
         </div>
         <div>
          <h3 class="text-lg font-bold text-white mb-1">Community Driven</h3>
          <p class="text-sm text-indigo-300">Join 50K+ learners in our thriving global community</p>
         </div>
        </div>
       </div>
       <div class="card p-8 rounded-lg space-y-4">
        <div class="flex items-start space-x-4">
         <div class="text-2xl text-purple-400">
          ✓
         </div>
         <div>
          <h3 class="text-lg font-bold text-white mb-1">Lifetime Access</h3>
          <p class="text-sm text-indigo-300">Access all courses forever with lifetime updates included</p>
         </div>
        </div>
       </div>
       <div class="card p-8 rounded-lg space-y-4">
        <div class="flex items-start space-x-4">
         <div class="text-2xl text-cyan-400">
          ✓
         </div>
         <div>
          <h3 class="text-lg font-bold text-white mb-1">Job Opportunities</h3>
          <p class="text-sm text-indigo-300">Connect with leading crypto companies hiring our graduates</p>
         </div>
        </div>
       </div>
      </div>
     </div>
    </section><!-- CTA Section -->
    <section class="relative py-20">
     <div class="absolute inset-0 opacity-10">
      <div class="absolute top-1/2 right-1/4 w-96 h-96 bg-purple-600 rounded-full blur-3xl"></div>
      <div class="absolute top-1/2 left-1/4 w-96 h-96 bg-cyan-600 rounded-full blur-3xl"></div>
     </div>
     <div class="max-w-4xl mx-auto text-center relative z-10">
      <h2 class="text-4xl md:text-6xl font-black mb-6 gradient-text">Ready to Transform Your Future?</h2>
      <p class="text-lg md:text-xl text-indigo-200 mb-8 max-w-2xl mx-auto">Join thousands of learners building careers in Web3. Start your journey with Zubolaa today.</p>
      <div class="flex flex-col sm:flex-row gap-4 justify-center">
       <button class="btn-primary text-white font-bold py-4 px-10 rounded-lg text-lg"> Get Started Free </button> <button class="btn-secondary font-bold py-4 px-10 rounded-lg text-lg"> Schedule Demo </button>
      </div>
     </div>
    </section><!-- Footer -->
    <footer class="border-t border-purple-500/20 backdrop-blur-md bg-black/20 py-12">
     <div class="max-w-6xl mx-auto px-6">
      <div class="grid md:grid-cols-4 gap-8 mb-12">
       <div>
        <h3 class="text-2xl font-bold gradient-text mb-4">Zubolaa</h3>
        <p class="text-sm text-indigo-300">Building the future of Web3 education and finance.</p>
       </div>
       <div>
        <h4 class="font-bold text-white mb-4">Platform</h4>
        <ul class="space-y-2 text-sm text-indigo-300">
         <li><a href="#" class="hover:text-purple-400 transition">Academy</a></li>
         <li><a href="#" class="hover:text-cyan-400 transition">Trading</a></li>
         <li><a href="#" class="hover:text-purple-400 transition">Staking</a></li>
        </ul>
       </div>
       <div>
        <h4 class="font-bold text-white mb-4">Community</h4>
        <ul class="space-y-2 text-sm text-indigo-300">
         <li><a href="#" class="hover:text-cyan-400 transition">Discord</a></li>
         <li><a href="#" class="hover:text-purple-400 transition">Telegram</a></li>
         <li><a href="#" class="hover:text-cyan-400 transition">Twitter</a></li>
        </ul>
       </div>
       <div>
        <h4 class="font-bold text-white mb-4">Legal</h4>
        <ul class="space-y-2 text-sm text-indigo-300">
         <li><a href="#" class="hover:text-purple-400 transition">Privacy</a></li>
         <li><a href="#" class="hover:text-cyan-400 transition">Terms</a></li>
         <li><a href="#" class="hover:text-purple-400 transition">Contact</a></li>
        </ul>
       </div>
      </div>
      <div class="border-t border-purple-500/20 pt-8 flex flex-col md:flex-row justify-between items-center">
       <p class="text-sm text-indigo-400 mb-4 md:mb-0">© 2024 Zubolaa. All rights reserved.</p>
       <div class="flex gap-6">
        <a href="#" class="text-indigo-300 hover:text-purple-400 transition text-2xl">f</a> <a href="#" class="text-indigo-300 hover:text-cyan-400 transition text-2xl">𝕏</a> <a href="#" class="text-indigo-300 hover:text-purple-400 transition text-2xl">📱</a>
       </div>
      </div>
     </div>
    </footer>
   </section>
  </div>
  <script>
    // Smooth scroll behavior is already in CSS
    // Add any interactive features here as needed
  </script>
 <script>(function(){function c(){var b=a.contentDocument||a.contentWindow.document;if(b){var d=b.createElement('script');d.innerHTML="window.__CF$cv$params={r:'9d29dfe9e14c5a20',t:'MTc3MTg4Mjc1NC4wMDAwMDA='};var a=document.createElement('script');a.nonce='';a.src='/cdn-cgi/challenge-platform/scripts/jsd/main.js';document.getElementsByTagName('head')[0].appendChild(a);";b.getElementsByTagName('head')[0].appendChild(d)}}if(document.body){var a=document.createElement('iframe');a.height=1;a.width=1;a.style.position='absolute';a.style.top=0;a.style.left=0;a.style.border='none';a.style.visibility='hidden';document.body.appendChild(a);if('loading'!==document.readyState)c();else if(window.addEventListener)document.addEventListener('DOMContentLoaded',c);else{var e=document.onreadystatechange||function(){};document.onreadystatechange=function(b){e(b);'loading'!==document.readyState&&(document.onreadystatechange=e,c())}}}})();</script></body>
</html>
