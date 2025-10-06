const returnsTrue = () => {
    console.log("Retuns True");

    return true;
};

const returnsFalse = () => {
    console.log("Retuns False");

    return false;
};

/*
 * NEGACION
 */

console.info("*--- Negación Booleana (!) ---*");

console.log("!true devuelve false: ", !true);
console.log("!false devuelve true: ", !false);

/*
 * Operador &&
 */

console.log("*--- Operador AND (&&) ---*");

// Su valor es verdadero si, y sólo si, todas las proposiciones son verdaderas.

console.log(
    "Si p === true y q === true, entonces p && q === true",
    true && true
);

console.log(
    "Si p === true y q === false, entonces p && q === false",
    true && false
);

// Evaluación de corto circuito: la segunda función se ejecuta sólo si la primera es truthy.

console.log(
    "Si returnsTrue() devuelve verdadero, entonces se ejecuta returnsFalse(): ",
    returnsTrue() && returnsFalse()
);

console.log(
    "Si returnsFalse() devuelve false, entonces no se ejecuta returnTrue(): ",
    returnsFalse() && returnsTrue()
);

// En evaluaciones con &&, pon primero la condición más propensa a ser falsa para aprovechar el corto circuito.

console.log(
    "La evaluación se detiene en la primera condición falsa, sin ejecutar las siguientes."
);

const itsTrue = true;

console.log("false && true && true && true:", false && itsTrue && itsTrue && itsTrue);

/*
 * Operador ||
 */

console.log("*--- Operador OR (||) ---*");

// Su valor es verdadero con que al menos una de las proposiciones sea verdadera.

console.log(
    "Si returnsTrue() devuelve verdadero, entonces no se ejecuta returnsFalse(): ",
    returnsTrue() || returnsFalse()
);

console.log(
    "Si returnsFalse() devuelve false, entonces se ejecuta returnTrue(): ",
    returnsFalse() || returnsTrue()
);

// En evaluaciones con ||, pon primero la condición más propensa a ser verdadera para aprovechar el corto circuito.

console.log(
    "La evaluación se detiene en la primera condición verdadera, sin ejecutar las siguientes."
);

const itsUndefined = undefined;
const itsNull = null;
const itsFalse = false;

console.log(
    "true || false || false || false:",
    true || itsUndefined || itsNull || itsFalse
);
