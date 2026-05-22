// ============================
// Mobile Navbar
// ============================

const menuBtn = document.querySelector(".menu-btn");
const navLinks = document.querySelector(".nav-links");

menuBtn.addEventListener("click", () => {
  navLinks.classList.toggle("show");
});

// ============================
// Typing Animation
// ============================

const typing = document.querySelector(".typing");

if (typing) {

  setInterval(() => {

    typing.style.opacity =
      typing.style.opacity === "0.3"
      ? "1"
      : "0.3";

  }, 700);

}

// ============================
// Glow Hover Effect
// ============================

const cards = document.querySelectorAll(".glass-card");

cards.forEach(card => {

  card.addEventListener("mousemove", e => {

    const x = e.offsetX;
    const y = e.offsetY;

    card.style.background = `
      radial-gradient(circle at ${x}px ${y}px,
      rgba(127,90,240,0.3),
      rgba(255,255,255,0.05))
    `;

  });

  card.addEventListener("mouseleave", () => {

    card.style.background =
      "rgba(255,255,255,0.06)";

  });

});