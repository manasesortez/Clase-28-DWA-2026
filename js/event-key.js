// ============================================
// Ejemplo base (pág. 7): event.key vs. event.code
// ============================================

const campoTeclas = document.querySelector('#campo-teclas');
const salidaKey   = document.querySelector('#salida-key');
const salidaCode  = document.querySelector('#salida-code');

campoTeclas.addEventListener('keydown', (event) => {
  // event.key  -> carácter producido según el layout
  //               (a, A, Enter, Escape, ArrowUp, ...)
  // event.code -> tecla física del teclado
  //               (KeyA, Enter, Space, ShiftLeft, ...)

  salidaKey.textContent  = event.key;
  salidaCode.textContent = event.code;

  // Caso de uso real: atajos de teclado
  if (event.key === 'Enter') {
    console.log('Enter presionado → aquí enviarías el chat / formulario');
  }

  if (event.key === 'Escape') {
    campoTeclas.value = '';
    salidaKey.textContent  = '–';
    salidaCode.textContent = '–';
  }

  // Ejemplo de atajo combinado: Ctrl + S
  if (event.ctrlKey && event.key.toLowerCase() === 's') {
    event.preventDefault(); // evita el "Guardar página" del navegador
    console.log('Ctrl+S detectado → simular guardado');
  }
});