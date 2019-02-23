//alert('funciona');

const form = document.getElementById('contact-form');


//Función anónima
form.addEventListener('submit', function () {
  alert('El formulario se ha enviado');
  form.enviar.disabled = true;
});
