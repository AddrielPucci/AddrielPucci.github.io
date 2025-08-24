  <script>
    function toggleLike(element) {
      element.classList.toggle('activo');
      element.textContent = element.classList.contains('activo') ? '❤️' : '♡';
    }
    document.getElementById('mensaje-btn').addEventListener('click', function() {
  const mensaje = document.getElementById('mensaje');
  mensaje.classList.toggle('oculto');
});

function toggleLike(element) {
  element.classList.toggle('activo');
}
  </script>