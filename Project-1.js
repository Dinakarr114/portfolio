
  const glow = document.getElementById('cursor-glow');
  const dot = document.getElementById('cursor-dot');
  const burst = document.getElementById('click-burst');

  let mouseX = window.innerWidth / 2;
  let mouseY = window.innerHeight / 2;
  let glowX = mouseX;
  let glowY = mouseY;

  // Smooth trailing for glow circle
  function animate() {
    glowX += (mouseX - glowX) * 0.15; // easing factor
    glowY += (mouseY - glowY) * 0.15;

    glow.style.left = glowX + 'px';
    glow.style.top = glowY + 'px';

    dot.style.left = mouseX + 'px';
    dot.style.top = mouseY + 'px';

    requestAnimationFrame(animate);
  }
  animate();

  // Track mouse movement
  window.addEventListener('mousemove', e => {
    mouseX = e.clientX;
    mouseY = e.clientY;
  });

  // Click burst animation
  window.addEventListener('mousedown', () => {
    burst.style.left = mouseX + 'px';
    burst.style.top = mouseY + 'px';
    burst.style.animation = 'none'; // reset
    burst.offsetHeight; // force reflow
    burst.style.animation = 'burst 0.5s ease-out forwards';
  });

  // Hover scaling handled by CSS using sibling selectors (see above)

