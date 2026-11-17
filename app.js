// Mis Postulaciones — demo app hecha por Muse
// Guarda las postulaciones en el navegador (localStorage)
const form = document.getElementById('form');
const lista = document.getElementById('lista');

let postulaciones = JSON.parse(localStorage.getItem('postulaciones') || '[]');

// Ejemplos reales de Luis (Nov 2026)
if (postulaciones.length === 0) {
  postulaciones = [
    { empresa: 'ACI / Tampico', puesto: 'Desarrollador de Software Jr', estado: 'Enviada' },
    { empresa: 'Neumo', puesto: 'Jr. Software Engineer', estado: 'Enviada' },
    { empresa: 'NativApps', puesto: 'Full Stack Developer (JS / Laravel)', estado: 'Enviada' },
  ];
  guardar();
}

function guardar() {
  localStorage.setItem('postulaciones', JSON.stringify(postulaciones));
  render();
}

function render() {
  lista.innerHTML = postulaciones
    .map((p, i) => `<li><span><strong>${p.empresa}</strong> — ${p.puesto}</span><span>${p.estado}</span></li>`)
    .join('');
}

form.addEventListener('submit', (e) => {
  e.preventDefault();
  postulaciones.push({
    empresa: document.getElementById('empresa').value,
    puesto: document.getElementById('puesto').value,
    estado: document.getElementById('estado').value,
  });
  form.reset();
  guardar();
});

render();
