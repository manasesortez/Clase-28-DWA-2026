// ============================================
// Ejemplo base (pág. 5): event.target
// Un solo listener para varios botones
// ============================================

const salidaBotones = document.querySelector('#salida-botones');

// Seleccionamos TODOS los botones dentro de .mini-tarjeta
document.querySelectorAll('.mini-tarjeta button').forEach((boton) => {
  boton.addEventListener('click', (event) => {
    // event.target = el <button> exacto que recibió el clic
    console.log('Botón presionado:', event.target.textContent);

    // También podemos subir al contenedor con closest()
    const tarjetaPadre = event.target.closest('.mini-tarjeta');
    const titulo = tarjetaPadre.querySelector('h4').textContent;

    salidaBotones.textContent =
      `Presionaste "${event.target.textContent}" en ${titulo} ` +
      `(event.type: ${event.type})`;
  });
});