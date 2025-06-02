// Récupère la modale et son contenu
const modal = document.getElementById('anime-modal');
const modalContent = document.querySelector('.modal__content');


// Pour chaque carte d'anime
document.querySelectorAll('.list__card').forEach(card => {
    const button = card.querySelector('.list__image');
    button.addEventListener('click', (e) => {
      e.preventDefault();
      // Récupère le titre de l'anime
      const title = card.querySelector('.list__name').innerText;
      
      // Résumés fictifs d'animes
      const fakeSummaries = {
        "Dragon Ball": "Goku, un jeune garçon doté d'une force surhumaine, part à l'aventure.",
        "One Piece": "Luffy rêve de devenir le Roi des Pirates et cherche le trésor One Piece.",
        "The Unaware": "Un thriller psychologique dans un monde dystopique.",
        "Fire Force": "Des pompiers aux pouvoirs spéciaux luttent contre des combustions humaines.",
        "The Apothecary Diaries": "Une servante rusée utilise son talent d'herboriste pour résoudre des mystères."
      };
  
      // Notes fictives
      const fakeRatings = {
        "Dragon Ball": "⭐ 8.4/10",
        "One Piece": "⭐ 9.1/10",
        "The Unaware": "⭐ 7.6/10",
        "Fire Force": "⭐ 8.0/10",
        "The Apothecary Diaries": "⭐ 8.9/10"
      };
  
      // Injecte les infos dans la modale
      document.getElementById('modal-title').innerText = title;
      document.getElementById('modal-summary').innerText = fakeSummaries[title] || "Résumé indisponible.";
      document.getElementById('modal-rating').innerText = fakeRatings[title] || "";
  
      // Affiche la modale
      document.getElementById('anime-modal').style.display = 'block';
    });
  });
  
  // Fermer en cliquant sur le bouton ✖
  document.querySelector('.modal__close').addEventListener('click', () => {
    modal.style.display = 'none';
  });
  
  // Fermer en cliquant en dehors du contenu
  window.addEventListener('click', (e) => {
    if (e.target === modal) {
      modal.style.display = 'none';
    }
  });
  