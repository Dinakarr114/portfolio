// Animate header letters fade-in cascade
  const headerText = "Education";
  const header = document.getElementById("animated-header");
  header.innerHTML = "";
  [...headerText].forEach((char, i) => {
    const span = document.createElement("span");
    span.textContent = char;
    span.style.animationDelay = `${i * 0.07}s`;
    header.appendChild(span);
  });

  // Scroll animation for timeline items with rotation and parallax
  const items = document.querySelectorAll('.timeline-item');
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('show');
      }
    });
  }, { threshold: 0.2 });

  items.forEach(item => {
    observer.observe(item);
  });

  // Parallax effect on scroll for timeline items
  window.addEventListener('scroll', () => {
    items.forEach(item => {
      const rect = item.getBoundingClientRect();
      const windowHeight = window.innerHeight;
      const scrollPercent = (windowHeight - rect.top) / windowHeight;
      if(scrollPercent > 0 && scrollPercent < 1) {
        // Slight horizontal movement and rotation
        const direction = item.classList.contains('left') ? 1 : -1;
        const moveX = direction * scrollPercent * 20; // px
        const rotateZ = direction * scrollPercent * 3; // degrees
        item.style.transform = `translateX(${moveX}px) translateY(0) rotate(${rotateZ}deg) scale(1)`;
      }
    });
  });

  // Particle background animation (canvas)
  const canvas = document.getElementById('particles');
  const ctx = canvas.getContext('2d');
  let width, height;
  let particlesArray = [];

  function initCanvas() {
    width = window.innerWidth;
    height = window.innerHeight;
    canvas.width = width;
    canvas.height = height;
  }

  class Particle {
    constructor() {
      this.x = Math.random() * width;
      this.y = Math.random() * height;
      this.radius = Math.random() * 2 + 1;
      this.speedX = (Math.random() - 0.5) * 0.2;
      this.speedY = (Math.random() - 0.5) * 0.2;
      this.color = `rgba(118, 75, 162, ${Math.random() * 0.5 + 0.2})`;
    }
    update() {
      this.x += this.speedX;
      this.y += this.speedY;
      if(this.x < 0 || this.x > width) this.speedX *= -1;
      if(this.y < 0 || this.y > height) this.speedY *= -1;
    }
    draw() {
      ctx.beginPath();
      ctx.fillStyle = this.color;
      ctx.shadowColor = this.color;
      ctx.shadowBlur = 6;
      ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
      ctx.fill();
    }
  }

  function createParticles(num) {
    particlesArray = [];
    for(let i = 0; i < num; i++) {
      particlesArray.push(new Particle());
    }
  }

  function animateParticles() {
    ctx.clearRect(0, 0, width, height);
    particlesArray.forEach(p => {
      p.update();
      p.draw();
    });
    requestAnimationFrame(animateParticles);
  }

  function onResize() {
    initCanvas();
    createParticles(Math.floor(width / 15));
  }

  window.addEventListener('resize', onResize);
  onResize();
  animateParticles();

  // Page fade out on blur (tab inactive)
  window.addEventListener('blur', () => {
    document.body.style.transition = 'opacity 0.5s ease';
    document.body.style.opacity = '0.5';
  });
  window.addEventListener('focus', () => {
    document.body.style.transition = 'opacity 0.5s ease';
    document.body.style.opacity = '1';
  });
