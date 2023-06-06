// data.js
const jsonData = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  "name": "Les jeux et moi",
  "description": "Découvrez mon parcours et ma passion pour les jeux vidéo, de ma première console à mes jeux préférés d'aujourd'hui.",
  "author": {
    "@type": "Person",
    "name": "Arnaud"
  }
};


function addJsonLdMetadata() {
  const script = document.createElement('script');
  script.type = 'application/ld+json';
  script.text = JSON.stringify(jsonData);
  document.head.appendChild(script);
}

// Ajoutez cette ligne pour exécuter la fonction lorsque la page est chargée
document.addEventListener('DOMContentLoaded', addJsonLdMetadata);
