const glow = document.getElementById('cursor-glow');
  const dot = document.getElementById('cursor-dot');
  const burst = document.getElementById('click-burst');

  let mouseX = 0, mouseY = 0;
  let glowX = 0, glowY = 0;

  // Animate trailing glow
  function animate() {
    glowX += (mouseX - glowX) * 0.3;
    glowY += (mouseY - glowY) * 0.3;

    glow.style.left = glowX + 'px';
    glow.style.top = glowY + 'px';

    requestAnimationFrame(animate);
  }
  animate();

  // Track mouse
  window.addEventListener('mousemove', e => {
    mouseX = e.clientX;
    mouseY = e.clientY;
  });

  // Hover effects
  document.querySelectorAll('.hover-target').forEach(el => {
    el.addEventListener('mouseenter', () => {
      glow.style.transform = 'translate(-50%, -50%) scale(1.8)';
      glow.style.boxShadow = '0 0 25px #0ff';
    });
    el.addEventListener('mouseleave', () => {
      glow.style.transform = 'translate(-50%, -50%) scale(1)';
      glow.style.boxShadow = '0 0 10px #0ff';
    });
  });

  // Click burst effect
  window.addEventListener('mousedown', () => {
    burst.style.left = mouseX + 'px';
    burst.style.top = mouseY + 'px';
    burst.style.animation = 'none';
    burst.offsetHeight; // force reflow
    burst.style.animation = 'burst 0.4s ease-out';
  });