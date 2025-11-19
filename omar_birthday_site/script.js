// Générer les cœurs flottants
function createHearts() {
  const heartsContainer = document.createElement('div');
  heartsContainer.className = 'hearts-container';
  document.body.appendChild(heartsContainer);

  const heartEmojis = ['💖', '❤️', '💗', '💓', '💞', '💕', '💘', '🌸', '✨'];
  
  for (let i = 0; i < 15; i++) {
    const heart = document.createElement('div');
    heart.className = 'heart';
    heart.innerHTML = heartEmojis[Math.floor(Math.random() * heartEmojis.length)];
    heart.style.left = Math.random() * 100 + '%';
    heart.style.animationDuration = (Math.random() * 10 + 5) + 's';
    heart.style.fontSize = (Math.random() * 20 + 15) + 'px';
    heart.style.color = getRandomColor();
    heartsContainer.appendChild(heart);
  }
}

// Couleurs aléatoires pour les cœurs
function getRandomColor() {
  const colors = [
    '#ff6b93', '#ff85a2', '#ff9bb3', '#ffb6c1', 
    '#e91e63', '#ff4081', '#f48fb1', '#f8bbd9'
  ];
  return colors[Math.floor(Math.random() * colors.length)];
}

// Afficher la vidéo surprise
function showVideo() {
  const videoContainer = document.getElementById('secret-video');
  const button = document.querySelector('.secret-btn');
  
  videoContainer.classList.add('show');
  button.style.display = 'none';
  
  // Lecture automatique de la vidéo
  const video = videoContainer.querySelector('video');
  video.play();
}

// Lightbox pour les photos
function openLightbox(img) {
  const lightbox = document.getElementById('lightbox');
  const lightboxImg = document.getElementById('lightbox-img');
  lightbox.style.display = 'block';
  lightboxImg.src = img.src;
}

function closeLightbox() {
  document.getElementById('lightbox').style.display = 'none';
}

// Fermer la lightbox avec la touche Échap
document.addEventListener('keydown', function(event) {
  if (event.key === 'Escape') {
    closeLightbox();
  }
});

// Animation au chargement
document.addEventListener('DOMContentLoaded', function() {
  createHearts(); // Créer les cœurs
  
  const cards = document.querySelectorAll('.card');
  
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.style.opacity = '1';
        entry.target.style.transform = 'translateY(0)';
      }
    });
  }, { threshold: 0.1 });
  
  cards.forEach(card => {
    card.style.opacity = '0';
    card.style.transform = 'translateY(20px)';
    card.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    observer.observe(card);
  });
});