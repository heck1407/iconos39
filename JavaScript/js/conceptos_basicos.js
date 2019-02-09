//alert('Hola Mundo');

//comentario de una linea

/*
Comentario
de
varias
lineas
*/

/* Declaración de variables */

/*
  Para declarar una variable en JS se usa la palabra let o const
    let - para valores mutables
    const - para valores inmutables
    var desde 2015 ya no se usa, es un amala práctica

  JS es 'case sensitive', distingue entre mayúsuclas y minúsculas
*/

/* Tipos de datos Primitivos */

/*
  Cadenas de texto - Strings

  Puedes encerrar el contenido de una string con:
    'Comillas Simples'
    "Comillas Dobles"
    `Acento invertido para interpolar una variable`
*/
let nombre = 'Jonathan';
let NOMBRE = 'Ulises';
let Nombre = 'Jonathan Ulises';

console.log(nombre, '-', NOMBRE, '-', Nombre);

let saludo = 'Hola Mundo';
console.log(saludo);

saludo = "Hello World";
console.log(saludo);

saludo = `hola mundo`;
console.log(saludo);

/*
  Cuando queremos unir el valor de una cadena de texto estática con el valor de una variable podemos usar la concatenación o la interpolación

  La concatenación une variables con cadenas de texto, através del símbolo +
  La interpolación agrega el valor de una variable dentro de una cadena de texto
  */

let edad = 34;
let concatenacion = 'Hola mi nombre es ' + nombre + ' y mi edad es ' + edad;
console.log(concatenacion);

concatenacion = "Hola mi nombre es " + NOMBRE + " y mi edad es " + edad;
console.log(concatenacion);

let interpolacion = `Hola mi nombre es ${Nombre} y mi edad es ${edad}`;
console.log(interpolacion);

let imagenConDobleComilla = "<img src=\"https://placeimg.com/400/400/animals\">";
document.write(imagenConDobleComilla);

let imagenConComillasSencillas = '<img src="https://placeimg.com/800/600/nature">';
document.write(imagenConComillasSencillas);

let codigoConComillasSencillas = '<details><summary> Título del acordeón</summary><p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores cum harum cumque dolorum, ipsa accusantiumquis ex tenetur numquam? Ea saepe quas distinctio sequi voluptatum rem totam doloribus quos nam.</p><p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed quidem amet quisquam minima voluptatem eum iureneque nemo iusto a exercitationem autem laudantium nam, quas facere distinctio facilis, necessitatibusarchitecto?</p></details >';

document.write(codigoConComillasSencillas);

/* Template String o Plantilla de cadena: Con los acentos invertidos, dentro de una cadena de texto puedes agregar saltos de línea, indentaciones y espacios, muy útil cuando trabajas con código HTML dinámico.  */
let codigoConAcentoInvertido = `
  <details>
    <summary>${nombre}</summary>
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores cum harum cumque dolorum, ipsa accusantium
      quis ex tenetur numquam? Ea saepe quas distinctio sequi voluptatum rem totam doloribus quos nam.</p>
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed quidem amet quisquam minima voluptatem eum iure
      neque nemo iusto a exercitationem autem laudantium nam, quas facere distinctio facilis, necessitatibus
      architecto?</p>
  </details>
`;

document.write(codigoConAcentoInvertido);

/* Números - Numbers en JS no hay una división entre diferentes precisiones para números (enteros o fraccionarios) */
let entero = 10;
let decimal = 7.5;

console.log(entero, decimal);

entero = .9;
decimal = 90;

console.log(entero, decimal);

let suma = entero + decimal;
console.log(suma);

entero = '80';

suma = entero + decimal;
console.log(suma);

suma = decimal + entero;
console.log(suma);

/* Booleanos son true y false */
let verdadero = true;
let falso = false;

console.log(verdadero, falso);

/* Null y Undefined */

/* Declaración de variable y asignación del valor */
let cadena = 'Hola';

/* Aquí sólo declaro la variable */
let nulo;

console.log(nulo);

nulo = null;

console.log(nulo);

/* Tipos de datos complejos */

/*
  Arreglos:
    Es un conjunto de elementos agrupados en una sola variable, cada elemento puede ser de diferente tipo de dato
    Las posiciones de los elementos de un arreglo siempre empezarán en 0.
    Los elementos de un arreglo se separan por comas, el último no lleva coma
  */

let arreglo = ['negro', 'blanco', 'naranja', 'azul', 9, true, 'Hola', false, .13];
console.log(arreglo);
console.log(arreglo[2]);
console.log(arreglo.length);

let estudiantes = [
  ['Verónica', 'veronicabadillo@yahoo.com.mx', 'Diseño Gráfico'],
  ['Raúl', 'rauldavila1990@gmail.com', 'Historia'],
  ['Ricardo', 'ricardo.bugarin@gmail.com', 'Diseño Gráfico']
];

console.log(estudiantes);
console.log(estudiantes[0][0]);
console.log(estudiantes[2][1]);
console.log(estudiantes[1]);

/*
  Funciones
    Una función es un conjunto de líneas de código que se ejecutan de manera secuencial y que se pueden reutilizar tantas veces como sea necesario.

    Una función puede recibir o no parámetros.

    Una función puede retornar o no un valor.
*/

/* Declaración de funciones */
function saludar() {
  let nombre = prompt('Dame tu nombre');
  alert(`Hola ${nombre}, gusto en saludarte`);
}

/* Ejecutar o Invocar una función */
//saludar();


function sumar(a, b) {
  let c = a + b;
  return c;
}

console.log(sumar(7, 8));
console.log(sumar(-500, 300));
console.log(sumar(.34, .58));

function tarjetaEstudiante(estudiante) {
  return `
      <div class="estudiante">
        <h2>${estudiante[0]}</h2>
        <a href="mailto:${estudiante[1]}">${estudiante[1]}</a>
        <br>
        <small>${estudiante[2]}</small>
      </div>
    `;
}

document.write(tarjetaEstudiante(estudiantes[0]));
document.write(tarjetaEstudiante(estudiantes[1]));
document.write(tarjetaEstudiante(estudiantes[2]));


/*
Tarea:
  En arreglos JS, generá código dinámico HTML de algún elemento de tu proyecto que sea repetitivo y que se pueda generar dinámicamente.

  Usa las cards de Bootstrap para mostrarlo en el HTML.
*/

/*
  Objetos

  Son el tipo de dato más importante en JS, existe una frase que dice "Todo es un objeto en JS"

  Un objeto es un un conjunto de pares de clave-valor, donde podemos tener atributos (características o propiedades) y métodos (acciones o funciones que ese objeto puede hacer).
*/

let objeto = {};
console.log(objeto);

let silla = {
  material: 'Madera',
  respaldo: true,
  patas: 4,
  sentar: function () {
    console.log('Se han sentado, estoy cumpliendo mi propósito');
  },
  hacerPalanca: function (aQue) {
    return `Estoy sirviendo como palanca en una ${aQue}`;
  }
};

console.log(silla);
console.log(silla.material);
console.log(`Una silla tiene ${silla.patas} patas.`);
silla.sentar();
console.log(silla.hacerPalanca('puerta'));
console.log(silla.hacerPalanca('persona'));
