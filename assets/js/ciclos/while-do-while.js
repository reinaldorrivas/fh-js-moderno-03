const cars = ["Ford", "Mazda", "Honda", "Toyota"];

let i = 0;

/*
* Mientras la condición sea verdadera, el while se ejecutará.
*/

console.log("First while() example: ");

while (i < cars.length) {
  console.log(cars[i]);

  i++;
}

/*
 * Esto funciona debido a que un index mayor al número de elementos que tiene el array
 * va a devolver undefined.
 */

console.log("Second while() example: ");

i = 0;

while (cars[i]) {
  console.log(cars[i]);

  i++;
}

/*
 * Puedes salirte del ciclo con la palabra reservada "break".
 */

console.log("Third while() example: ");

i = 0;

while (cars[i]) {
  if (i === 2) break;

  console.log(cars[i]);

  i++;
}

/*
 * Puedes saltarte una iteración con la palabra reservada "continue";
 */

console.log("Fourth while() example: ");

i = 0;

while (cars[i]) {
  if (i === 1) {
    i++;
    continue;
  }

  console.log(cars[i]);

  i++;
}

/*
 * Do - While
 */

console.log("First do-while() example: ");

i = 0;

do {
  console.log(i);
  i++;
} while (cars[i]);

/*
 * do-while entra al menos una vez, mientras que while, no.
 */

console.log("Second do-while() example: ");

i = 10; // A pesar que esta variable de control no concuerda con el tamaño del array, ni con la condición, va a entrar al menos una vez.

do {
  console.log(i);
  i++;
} while (cars[i]);
