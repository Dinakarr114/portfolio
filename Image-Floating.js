const images = document.querySelectorAll('.floating-image');

    images.forEach((img) => {
      // Random start position
      let x = Math.random() * window.innerWidth;
      let y = Math.random() * window.innerHeight;

      img.style.left = x + 'px';
      img.style.top = y + 'px';

      // Random movement vector
      let dx = (Math.random() - 0.5) * 2; // -1 to 1
      let dy = (Math.random() - 0.5) * 2;

      function move() {
        x += dx;
        y += dy;

        // Bounce off edges
        if (x < 0 || x > window.innerWidth - 80) dx *= -1;
        if (y < 0 || y > window.innerHeight - 80) dy *= -1;

        img.style.left = x + 'px';
        img.style.top = y + 'px';

        requestAnimationFrame(move);
      }

      move();
    });