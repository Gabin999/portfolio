document.addEventListener('DOMContentLoaded', function() {
  // Animation au chargement
  const sections = document.querySelectorAll('section');
  sections.forEach(section => {
    section.style.opacity = '0';
  });

  setTimeout(() => {
    sections.forEach(section => {
      section.style.transition = 'opacity 0.5s ease-out';
      section.style.opacity = '1';
    });
  }, 300);

  // Animation de défilement pour les sections
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.style.transform = 'translateY(0)';
        entry.target.style.opacity = '1';
      } else {
        entry.target.style.transform = 'translateY(20px)';
        entry.target.style.opacity = '0';
      }
    });
  }, { threshold: 0.1 });

  sections.forEach(section => {
    section.style.transition = 'transform 0.5s ease-out, opacity 0.5s ease-out';
    section.style.transform = 'translateY(20px)';
    section.style.opacity = '0';
    observer.observe(section);
  });

  // Effet de survol sur les projets
  const projectCards = document.querySelectorAll('.project-card');
  projectCards.forEach(card => {
    card.addEventListener('mouseenter', () => {
      card.style.transform = 'scale(1.02)';
      card.style.boxShadow = '0 10px 20px rgba(0, 0, 0, 0.2)';
    });

    card.addEventListener('mouseleave', () => {
      card.style.transform = 'scale(1)';
      card.style.boxShadow = 'none';
    });
  });

  // Gestion du formulaire de contact
  const contactForm = document.getElementById('contact-form');
  if (contactForm) {
    contactForm.addEventListener('submit', function(e) {
      e.preventDefault();

      // Récupération des valeurs
      const name = document.getElementById('name').value;
      const email = document.getElementById('email').value;
      const subject = document.getElementById('subject').value;
      const message = document.getElementById('message').value;

      // Validation simple
      if (!name || !email || !subject || !message) {
        alert('Veuillez remplir tous les champs.');
        return;
      }

      // Simulation d'envoi de formulaire
      console.log('Formulaire soumis:', { name, email, subject, message });

      // Feedback visuel
      const submitBtn = contactForm.querySelector('.submit-btn');
      submitBtn.innerHTML = '<i class="fas fa-check"></i> Envoyé';
      submitBtn.style.backgroundColor = 'var(--success)';

      // Réinitialisation après 3 secondes
      setTimeout(() => {
        contactForm.reset();
        submitBtn.innerHTML = '<i class="fas fa-paper-plane"></i> Envoyer';
        submitBtn.style.backgroundColor = 'var(--primary)';
      }, 3000);
    });
  }

  // Smooth scroll pour les ancres
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
      e.preventDefault();

      const targetId = this.getAttribute('href');
      const targetElement = document.querySelector(targetId);

      if (targetElement) {
        window.scrollTo({
          top: targetElement.offsetTop - 80,
          behavior: 'smooth'
        });
      }
    });
  });
});
