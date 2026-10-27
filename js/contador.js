// ============================================
// Ejercicio 2: contador de caracteres en vivo
// ============================================

const comentario = document.querySelector('#comentario');
const contador   = document.querySelector('#contador');

comentario.addEventListener('input', (event) => {
  // event.target = el <textarea>
  const largo = event.target.value.length;

  contador.textContent = largo;

  // Cambia de color al acercarse al límite
  contador.style.color = largo > 120 ? 'orangered' : 'inherit';
  contador.style.fontWeight = largo > 120 ? '700' : '400';
});