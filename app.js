'use strict';

// Configuración de rutas para local y producción 🚀
const PROJECT_CONFIG = {
  isLocal: location.hostname === 'localhost' || location.hostname === '127.0.0.1',
  projects: {
    roma: {
      selector: '.project-roma',
      local: 'http://localhost:8080/',
      prod: 'https://roma2-two.vercel.app/' // 👈 Cambia esto por tu URL de Vercel
    },
    mexico: {
      selector: '.project-mexico',
      local: 'http://localhost:8082/',
      prod: 'https://restaurante-mexicano-two.vercel.app/' // 👈 Cambia esto por tu URL de Vercel
    }
  }
};

// Actualizar enlaces según el entorno 🌍
function updateProjectLinks() {
  if (!PROJECT_CONFIG.isLocal) {
    Object.values(PROJECT_CONFIG.projects).forEach(project => {
      const el = document.querySelector(project.selector);
      if (el) {
        el.href = project.prod;
        const info = el.querySelector('.repo-name');
        if (info) info.textContent = 'Proyecto en producción · Cloud';
      }
    });
  }
}

const cards = [...document.querySelectorAll('.project-card')];

cards.forEach((card) => {
  card.addEventListener('pointermove', (event) => {
    const rect = card.getBoundingClientRect();
    const x = ((event.clientX - rect.left) / rect.width - 0.5) * 8;
    const y = ((event.clientY - rect.top) / rect.height - 0.5) * -8;
    card.style.transform = `perspective(900px) rotateX(${y}deg) rotateY(${x}deg) translateY(-4px)`;
  });

  card.addEventListener('pointerleave', () => {
    card.style.transform = '';
  });
});

// Inicialización
updateProjectLinks();

if ('serviceWorker' in navigator) {
  window.addEventListener('load', () => {
    navigator.serviceWorker.register('./sw.js').catch(() => { });
  });
}
