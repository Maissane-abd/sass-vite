// Récupère toutes les questions de la FAQ
const questions = document.querySelectorAll('.faq__question');

questions.forEach((btn) => {
    btn.addEventListener('click', () => {
      const answer = btn.nextElementSibling;         // Réponse associée
      const icon = btn.querySelector('.faq__icon');  // Icône dans la question
  
      // Ferme toutes les autres réponses actives
      document.querySelectorAll('.faq__answer').forEach((el) => {
        if (el !== answer) el.classList.remove('active');
      });
  
      // Désactive toutes les autres icônes actives
      document.querySelectorAll('.faq__icon').forEach((i) => {
        if (i !== icon) i.classList.remove('active-icon');
      });
  
      // Active/désactive la réponse et l'icône de la question cliquée
      answer.classList.toggle('active');
      icon.classList.toggle('active-icon');
    });
  });