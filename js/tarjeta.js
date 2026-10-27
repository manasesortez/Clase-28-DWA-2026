// ============================================
// Ejercicio 3: tarjeta con detalle al pasar el mouse
// ============================================

const tarjeta = document.querySelector('#tarjeta-producto');
const detalle = tarjeta.querySelector('.detalle');

// Escuchamos en el CONTENEDOR, no en el texto interno
// (evita el "parpadeo" al mover el mouse entre hijos)
tarjeta.addEventListener('mouseover', () => {
  detalle.hidden = false;
  tarjeta.classList.add('activa');       // reto: cambiar color de fondo
});

tarjeta.addEventListener('mouseout', () => {
  detalle.hidden = true;
  tarjeta.classList.remove('activa');
});