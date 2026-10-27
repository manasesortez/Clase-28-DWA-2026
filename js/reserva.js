// ============================================
// Ejercicio 1: formulario de reservación
// ============================================

const formulario    = document.querySelector('#form-reserva');
const mensajeError  = document.querySelector('#mensaje-error');
const mensajeOk     = document.querySelector('#mensaje-ok');

formulario.addEventListener('submit', (event) => {
  // 1. Detenemos el envío automático (recarga de página)
  event.preventDefault();

  // Limpiamos mensajes previos
  mensajeError.textContent = '';
  mensajeOk.textContent    = '';

  // 2. Leemos valores
  const nombre   = document.querySelector('#nombre-reservacion').value;
  const personas = Number(document.querySelector('#num-personas').value);

  // 3. Validaciones con return temprano
  if (nombre.trim() === '') {
    mensajeError.textContent = 'El nombre es obligatorio';
    return;
  }

  if (Number.isNaN(personas) || personas < 1) {
    mensajeError.textContent = 'Debe reservar al menos 1 persona';
    return;
  }

  // 4. Todo válido
  mensajeOk.textContent = `Reservación confirmada: ${nombre}, ${personas} persona(s).`;
  console.log(`Reservación confirmada: ${nombre}, ${personas} personas`);

  // Opcional: limpiar el formulario tras éxito
  formulario.reset();
});