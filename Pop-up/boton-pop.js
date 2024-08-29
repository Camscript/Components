document.addEventListener('DOMContentLoaded', () => {
    const createButton = document.querySelector('.btn-crear');
    const popup = document.getElementById('popup');
    const overlay = document.getElementById('overlay');
    const okButton = document.getElementById('okButton');

    // Función para abrir el popup
    function openPopup(event) {
        event.preventDefault();
        popup.classList.add('open-popup');
        overlay.style.display = 'block';
    }

    // Función para cerrar el popup
    function closePopup() {
        popup.classList.remove('open-popup');
        overlay.style.display = 'none';
    }

    // Evento para abrir el popup al hacer clic en el botón
    createButton.addEventListener('click', openPopup);

    // Evento para cerrar el popup si se hace clic en el overlay
    overlay.addEventListener('click', closePopup);

    // Evento para cerrar el popup si se hace clic en el botón "OK"
    okButton.addEventListener('click', closePopup);

    // Animación del botón al pasar el cursor
    createButton.addEventListener('mouseenter', () => {
        createButton.style.transform = 'scale(1.05)';
    });

    createButton.addEventListener('mouseleave', () => {
        createButton.style.transform = 'scale(1)';
    });
});
