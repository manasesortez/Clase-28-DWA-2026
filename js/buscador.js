// ============================================
// Reto extra: buscador con filtro en vivo
// ============================================

const buscador = document.querySelector('#buscar');
const tarjetas = document.querySelectorAll('.tarjeta-item');

// --- 1. Filtrar en tiempo real con 'input' ---
// 'input' responde mejor que 'keyup' porque captura
// también pegar texto con el mouse o autocompletado.
buscador.addEventListener('input', (event) => {
  const texto = event.target.value.toUpperCase();

  tarjetas.forEach((tarjeta) => {
    const nombre = tarjeta.textContent.toLowerCase();
    tarjeta.hidden = !nombre.includes(texto.toLowerCase());
  });
});

// --- 2. Escape limpia el campo y muestra todo ---
buscador.addEventListener('keydown', (event) => {
  if (event.key === 'Escape') {
    buscador.value = '';

    tarjetas.forEach((tarjeta) => {
      tarjeta.hidden = false;
    });
  }
});

// --- 3. focus / blur: resaltar borde del campo ---
buscador.addEventListener('focus', () => {
  buscador.classList.add('resaltado');
});

buscador.addEventListener('blur', () => {
  buscador.classList.remove('resaltado');
});