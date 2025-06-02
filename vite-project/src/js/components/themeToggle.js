// Récupère le bouton de bascule du mode clair/sombre
const toggle = document.getElementById("darkToggle");

const icon = document.getElementById("theme-icon");
const root = document.documentElement;

const sunSVG = `
<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
  <path d="M12 18a6 6 0 100-12 6 6 0 000 12z"/>
  <path d="M12 2v2m0 16v2m10-10h-2M4 12H2m16.95 5.05l-1.414-1.414M6.464 6.464L5.05 5.05m0 13.9l1.414-1.414M17.536 6.464l1.414-1.414"/>
</svg>
`;

const moonSVG = `
<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
  <path d="M21 12.79A9 9 0 1111.21 3 7 7 0 0021 12.79z"/>
</svg>
`;

// Initialiser le bon thème au chargement
const savedTheme = localStorage.getItem("theme");
if (savedTheme === "dark") {
  root.classList.remove("light");
  icon.outerHTML = moonSVG;
} else {
  root.classList.add("light");
  icon.outerHTML = sunSVG;
}

// Re-cible l’élément (car outerHTML le remplace)
let currentIcon = document.querySelector("#darkToggle svg");

// Événement au clic sur le bouton de thème (mode clair/sombre)
toggle.addEventListener("click", () => {
  const isLight = root.classList.toggle("light");
  const newTheme = isLight ? "light" : "dark";
  localStorage.setItem("theme", newTheme);

  // Met à jour le SVG
  toggle.innerHTML = isLight ? sunSVG : moonSVG;
});






