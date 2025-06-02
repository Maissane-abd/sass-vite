// Récupère le bouton de bascule du mode clair/sombre
const toggle = document.getElementById("darkToggle");

// Événement au clic sur le bouton de thème (mode clair/sombre)
toggle.addEventListener("click", () => {
    // Ajoute ou enlève la classe 'light' sur le document
    document.documentElement.classList.toggle("light");
    const isDark = document.documentElement.classList.contains("dark");
    localStorage.setItem("theme", isDark ? "dark" : "light");
  });