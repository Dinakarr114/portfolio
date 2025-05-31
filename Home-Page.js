window.addEventListener('DOMContentLoaded', () => {
  const textLines = [
    { id: "Name-P1", text: "Hello It's Me" },
    { id: "Name-P2", text: "Dinakar Buchinelly" },
    { id: "Bio-P3", text: "Java Full-Stack Developer | CSE Graduate |" },
    { id: "Bio-P4", text: "I'm a Software Engineer with experience in Java Full Stack development." },
    { id: "Bio-P5", text: "I enjoy creating user-friendly web applications by combining frontend and backend skills." },
    { id: "Bio-P6", text: "I focus on writing clean, efficient code and turning ideas into practical, real-world solutions" },
    { id: "Bio-P7", text: "that provide value and enhance user experiences." }
  ];

  const buttons = ["LinkedIn", "Git-Hub", "Gmail"];
  const speed = 10;
  const pause = 200;

  let currentLine = 0;

  function typeNextLine() {
    if (currentLine >= textLines.length) {
      setTimeout(() => showButtons(), pause);
      return;
    }

    const line = textLines[currentLine];
    const el = document.getElementById(line.id);
    let charIndex = 0;

    function typeChar() {
      if (charIndex < line.text.length) {
        el.textContent += line.text.charAt(charIndex);
        charIndex++;
        setTimeout(typeChar, speed);
      } else {
        currentLine++;
        setTimeout(typeNextLine, pause);
      }
    }

    typeChar();
  }

  function showButtons(index = 0) {
    if (index >= buttons.length) {
      setTimeout(() => {
        document.getElementById("Download").style.display = "inline-block";
        setTimeout(showFooter, pause);
      }, pause);
      return;
    }

    const btn = document.getElementById(buttons[index]);
    btn.style.display = "inline-block";
    setTimeout(() => showButtons(index + 1), pause);
  }

  function showFooter() {
    const footer = document.getElementById("Footer");
    footer.style.display = "block";
    footer.style.opacity = 0;
    footer.style.transition = "opacity 1s ease-in-out";
    setTimeout(() => {
      footer.style.opacity = 1;
    }, 50);
  }

  typeNextLine();
});


const LinkedIn = document.getElementById("LinkedIn");
LinkedIn.addEventListener("click",()=>
{
  window.open("https://www.linkedin.com/in/b-dinakar", "_blank");

})

 document.getElementById("Gmail").addEventListener("click", function() {
    window.location.href = "mailto:buchinellydinakar040@gmail.com";
  });

   document.getElementById("Git-Hub").addEventListener("click", function() {
    window.open("https://github.com/Dinakarr114", "_blank");
  });
