const terminalPage = document.getElementById('terminal-page');
const portfolio = document.getElementById('portfolio');
const input = document.getElementById('terminal-input');
const son = document.getElementById('copyright');

// Lancer le son au chargement
son.play();

input.addEventListener('keydown', function(e) {
  if (e.key === 'Enter') {
    if (input.value.toLowerCase() === 'open') {
      // Arrêter le son avant de passer au cv sinon SA MARCHE PAS 
      son.pause();
      son.currentTime = 0;

      // Masquer le terminal SINON C4EST BLANC
      terminalPage.style.display = 'none';
      // Afficher le portfolio LE BEAU CV
      portfolio.style.display = 'block';
    } else {
      input.value = '';
      alert('Commande incorrecte. Tapez "open" pour continuer.');
    }
  }
});