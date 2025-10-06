/*
 * Pase de parámeteros por valor:
 * Los tipos primitivos (number, string, boolean, null, undefined, symbol) se pasan por valor.
 * Esto significa que cuando asignamos una variable a otra, se crea una copia del valor.
 * Por lo tanto, si cambiamos el valor de una variable, la otra no se ve afectada.
 */
let a = 10;
let b = a;

a = 30;

console.log({ a, b });

/*
 * Pase de parámeteros por referencia:
 * Los tipos de datos complejos (objetos, arrays, funciones) se pasan por referencia.
 * Esto significa que cuando asignamos una variable a otra, ambas variables apuntan al mismo objeto en memoria.
 * Por lo tanto, si cambiamos una propiedad del objeto a través de una variable, la otra variable también verá ese cambio.
 */

// Ejemplo con objeto:
const juan = { nombre: "Juan" };
const ana = juan;

ana.nombre = "Ana";

console.log({ juan, ana });

// Ejemplo con función:
const cambiarNombre = (persona) => {
  persona.nombre = "Tony";
  return persona;
};

const peter = { nombre: "Peter" };
const tony = cambiarNombre(peter);

console.log({ peter, tony });

// Ejemplo con array:
const original = [1, 2, 3];
const referencia = original;

referencia.push(4);

console.log({ original, referencia });

/*
 * Para evitar que un objeto o array comparta referencia con el original,
 * es recomendable crear una copia independiente. Para objetos, se puede utilizar
 * el operador de propagación (spread operator) o la función structuredClone().
 * En el caso de arrays, se puede emplear Array.prototype.slice() o también el spread operator.
 */

// Copia independiente de un objeto
const pedro = { nombre: "Pedro" };
const maria = { ...pedro };

maria.nombre = "María";

console.log({ pedro, maria });

// Ejemplo con función que crea una copia
const cambiarNombreCopia = ({ ...persona }) => {
  persona.nombre = "Joker";
  return persona;
};

const bruce = { nombre: "Bruce" };
const joker = cambiarNombreCopia(bruce);

console.log({ bruce, joker });

// Otra forma de clonar un objeto (más profunda)
const clark = { nombre: "Clark", direccion: { ciudad: "Metrópolis" } };
const lois = structuredClone(clark);

lois.nombre = "Lois";
lois.direccion.ciudad = "Smallville";

console.log({ clark, lois });

// Copia independiente de un array
const arrayOriginal = [1, 2, 3];
const copiaArray = [...arrayOriginal];

copiaArray.push(4);

console.table({ arrayOriginal, copiaArray });

// Ejemplo con Array.prototype.slice()
const anotherArray = [4, 5, 6];
const slicedArray = anotherArray.slice();

slicedArray.push(7);

console.log({ anotherArray, slicedArray });

const otroArray = [4, 5, 6];
const otroArraySliced = otroArray.slice();

// Copia profunda de un array de objetos
const arrayObjetos = [{ id: 1 }, { id: 2 }];
const copiaProfundaArray = structuredClone(arrayObjetos);

copiaProfundaArray[0].id = 10;

console.table({ arrayObjetos, copiaProfundaArray });

/*
 * Resumen:
 * - Tipos primitivos se pasan por valor.
 * - Tipos complejos se pasan por referencia.
 * - Usar técnicas de copia para evitar efectos secundarios no deseados.
 */
