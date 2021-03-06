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

let banco = {
  sentar: function () {
    console.log('sentar banco');
  }
}

banco.sentar()
/*
  Actividad en clase: Define un objeto con 5 atributos y 3 métodos.
*/

let persona = {
  nombre: 'Jon',
  edad: 34,
  contacto: {
    email: 'jonmircha@gmail.com',
    cel: '5512345678',
    web: 'jonmircha.com'
  },
  pasatiempos: ['Programar', 'Correr', 'Leer'],
  saludar: function () {
    return `Hola, me llamo ${this.nombre}, tengo ${this.edad} años`
  }
}

console.log(persona);
console.log(persona.contacto.email);
console.log(persona.pasatiempos[1]);
console.log(persona.saludar());
//Este this hace referencia al contexto (scope) global del archivo, el objeto Window
console.log(this);
console.log(persona.nombre);

/*
Porqué usar var es una mala práctica

un scope o bloque en JS esta definido por estructuras entre { }, ejemplo una función, un if, un else, un for, un while, etc.

Definir variables con var corremos el riesgo de que JS aplique el Hoisting, que es la elevación al contexto padre de las variables.

Por eso debes usar let o const en vez de var
*/

var name = 'Jonathan';
console.log(name)

if (5 < 6) {
  console.log('Esto es verdadero')
  var name = 'Ulises';
  console.log(name);
} else {
  console.log('esto es falso')
}

//La lógica de prográmación nos dice que debería imprimir Jonathan, sin embargo al usar var, JS hace Hoisting e imprime Ulises que fue el último valor asignado, si cambias las dos declaraciones de var por let, te va a imprimir el valor correcto que es Jonathan.
console.log(name);

/*
Uso de const
Se usa para definir una constante
*/
const PI = 3.1416;
console.log(PI);

//A una constante no le puedes cambiar el valor una vez definido
//PI = 2;

//Una constante no la puedes declarar vacia
//const colores;

const colores = ['negro', 'blanco', 'gris'];
console.log(colores);

colores.push('azul', 'rojo', 'verde');
console.log(colores);

const carro = {
  marca: 'Hyundai',
  modelo: 'Accent'
}

console.log(carro);

carro.modelo = 'Accent Hatchback';

console.log(carro);

carro.color = 'negro';

//carro = [];

console.log(carro);

/*
Estructuras de control
  Son mecanismos que nos permiten modificar el flujo de nuestra programación
    Estructuras condicionales
      if - else
      if - else if - else
      switch -case
    Estrcuturas repetitivas
      for
      while
*/
console.log(Date());

let fecha = new Date();
let hora = fecha.getHours();

console.log(hora)

/* el operador > o < sólos excluyen el valor dentro de la evaluación de la condición */
if (hora < 12) {
  console.log('La hora esta AM');
} else {
  console.log('La hora esta PM');
}

/* el operador compuesto incluye el valor dentro de la evaluación de la condición */
if (hora <= 11) {
  console.log('La hora esta AM');
} else {
  console.log('La hora esta PM');
}

/*
  Tipos de operadores
    Aritméticos: + - * / %
    Comparación: < > <= >= == ===
    Lógicos: AND - &&, OR - || y NOT - !
  */

/*
Actividad
Con base en la hora, manda los siguientes mensajes:
  0-5 = Vete a dormir.
  6-11 = Buenos días.
  12-18 = Buenas tardes.
  19-23 = Buenas noches.
*/

/* EL siguiente código esta intencionalmente diseñado para fallar en la lógica que plantea  */
if (hora <= 5) {
  console.log('Vete a dormir, la hora actual es:' + hora);
} else if (hora >= 6) {
  console.log('Buenos Días, la hora actual es:' + hora);
} else if (hora <= 11) {
  console.log('Buenos Días, la hora actual es:' + hora);
} else if (hora >= 12) {
  console.log('Buenos Tardes, la hora actual es:' + hora);
} else if (hora <= 18) {
  console.log('Buenos Tardes, la hora actual es:' + hora);
} else {
  console.log('Buenos Noches, la hora actual es:' + hora);
}

if (hora <= 5) {
  console.log('Vete a dormir, la hora actual es:' + hora);
} else if (hora >= 6 && hora <= 11) {
  console.log('Buenos Días, la hora actual es:' + hora);
} else if (hora >= 12 && hora <= 18) {
  console.log('Buenos Tardes, la hora actual es:' + hora);
} else {
  console.log('Buenos Noches, la hora actual es:' + hora);
}

/* Ejercicio: Imprimir el día de la semana en español con JS y la estructura switch-case */

let dia = fecha.getDay()
console.log(dia)

switch (dia) {
  case 0:
    console.log('Domingo');
    break;
  case 1:
    console.log('Lunes');
    break;
  case 2:
    console.log('Martes');
    break;
  case 3:
    console.log('Miércoles');
    break;
  case 4:
    console.log('Jueves');
    break;
  case 5:
    console.log('Viernes');
    break;
  case 6:
    console.log('Sábado');
    break;
  default:
    console.log('Opción incorrecta');
    break;
}

/*
for (inicializar variable; condición; incremento o decremento) {
  código del for que se ejecuta mientras la condición sea verdadera;
}
*/

for (let i = 1; i < 7; i++) {
  document.write(`<h${i}>Encabezado de Tipo ${i}</h${i}>`);
}





