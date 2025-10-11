const heroes = ["Batman", "Superman", "Mujer Maravilla", "Aquaman"];

console.log("--- Traditional for() ---");

for (let i = 0; i < heroes.length; i++) {
  console.log(heroes[i]);
}

console.log("--- for-in ---");

// Devuelve las llaves del objeto en cada iteración.

for (let i in heroes) {
  console.log(i);
  console.log(heroes[i]);
}

console.log("--- for-of ---");

// Devuelve los valores del objeto en cada iteración.

for (let heroe of heroes) {
  console.log(heroe);
}
