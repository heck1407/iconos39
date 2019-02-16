/* Seleccionar selectores CSS en JS */

const theory = document.getElementById('theory');
console.log(theory);

const primerParrafo = document.querySelector('p');
console.log(primerParrafo);

const parrafos = document.querySelectorAll('p');
console.log(parrafos);

const primerTarjeta = document.querySelector('.card');
console.log(primerTarjeta);

const tarjetas = document.querySelectorAll('.card');
console.log(tarjetas);
console.log(tarjetas.length);

/* Manejo de Atributos */
console.log(document.documentElement.lang);
document.documentElement.lang = 'en';
console.log(document.documentElement.lang);

console.log(document.body.style);

document.body.style.backgroundColor = '#000';
document.body.style.color = 'greenyellow';

/* Actividad: Linkear documentación de MDN al enlace correspondiente */

const documentacion = document.getElementById('link-doc');

documentacion.href = 'https://developer.mozilla.org/es/docs/Web/JavaScript';
documentacion.target = '_blank';

/*
Actividad: Modificar el color del body en base a:
  De las 6hrs a las 12hrs de color azul claro;
  De las 13hrs a las 20hrs de color cafe, naranja, etc.
  Cualquier otra hora: color obscuro.
*/

let hora = new Date().getHours();
const saludo = document.getElementById('saludo');

if (hora >= 6 && hora <= 12) {
  document.body.style.backgroundColor = 'skyblue';
  saludo.innerText = 'Buenos Días';
} else if (hora >= 13 && hora <= 20) {
  document.body.style.backgroundColor = 'rosybrown';
  saludo.innerText = 'Buenos Tardes';
} else {
  document.body.style.backgroundColor = 'purple';
  saludo.innerText = 'Buenos Noches';
}

const contenidoDinamico = document.getElementById('contenido-dinamico');

contenidoDinamico.innerText = 'Hola este texto se ha insertado dinámicamente';
contenidoDinamico.innerHTML = 'Hola <b>este texto se ha insertado</b> dinámicamente';

/*
Eventos
objeto.addEventListener('evento', funcionAEjecutar);
*/

const btnSaludar = document.getElementById('btn-saludar');

function botonSaluda(e) {
  alert('Hola desde el botón');
  console.log(e);
  console.log(e.target);
  console.log(e.type);
}

btnSaludar.addEventListener('click', botonSaluda);

/*
Actividad:

Propuesta básica:
  Programa 2 botones para cambiar el tema (color) del HTML. Un botón para tema claro otro para tema obscuro.

Propuesta Avanzada:
  haz el ejercicio de los temas obscuro y claro, con un sólo botón.
*/
