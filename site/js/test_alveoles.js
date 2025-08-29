const grid = document.querySelector('.grid');
const cols = 12, rows = 8;
const size = 60, gap = 6;

// Générer la grille
for (let r = 0; r < rows; r++) {
  for (let c = 0; c < cols; c++) {
    const hex = document.createElement('div');
    hex.className = 'hex';
    // Décalage en quinconce (col impaires)
    if (c % 2) hex.style.marginTop = size / 2 + "px";
    grid.appendChild(hex);
  }
}

const hexes = [...document.querySelectorAll('.hex')];

// Réaction au mouvement de souris
document.addEventListener('mousemove', e => {
  const { clientX: mx, clientY: my } = e;

  hexes.forEach(hex => {
    const rect = hex.getBoundingClientRect();
    const cx = rect.left + rect.width / 2;
    const cy = rect.top + rect.height / 2;

    const dx = mx - cx;
    const dy = my - cy;
    const dist = Math.sqrt(dx*dx + dy*dy);

    // influence max à 200px, min à 1
    const influence = Math.max(0, 1 - dist / 200);
    const scale = 1 + influence * 0.3; // grossit jusqu’à 1.6x

    // au lieu d’agrandir la div elle-même (qui chevaucherait),
    // on la scale "en interne"
    hex.style.transform = `scale(${scale})`;
  });
});
