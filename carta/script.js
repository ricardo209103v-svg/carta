// Seleccionamos los elementos del HTML
const btnNo = document.getElementById('btnNo');
const btnSi = document.getElementById('btnSi');
const carta = document.getElementById('carta');
const mensajeOculto = document.getElementById('mensajeOculto');

// Función para mover el botón "No" de forma aleatoria
function moverBotonNo() {
    // Calculamos el ancho y alto disponible en la ventana del navegador
    const anchoVentana = window.innerWidth - btnNo.offsetWidth;
    const altoVentana = window.innerHeight - btnNo.offsetHeight;

    // Generamos posiciones aleatorias dentro del límite de la pantalla
    const xAleatoria = Math.floor(Math.random() * anchoVentana);
    const yAleatoria = Math.floor(Math.random() * altoVentana);

    // Cambiamos el comportamiento a posición fija para que se mueva por TODA la pantalla
    btnNo.style.position = 'fixed';
    btnNo.style.left = `${xAleatoria}px`;
    btnNo.style.top = `${yAleatoria}px`;
}

// Eventos para cuando intenten tocar o clickear el botón "No"
btnNo.addEventListener('mouseenter', moverBotonNo); // Para computadoras (pasar el mouse)
btnNo.addEventListener('touchstart', (e) => {
    e.preventDefault(); // Evita clics fantasma en celulares
    moverBotonNo();
}); // Para celulares (pantallas táctiles)

// Evento para cuando den clic en el botón "Sí"
btnSi.addEventListener('click', () => {
    carta.classList.add('oculto'); // Oculta la carta original
    mensajeOculto.classList.remove('oculto'); // Muestra el mensaje de éxito
});