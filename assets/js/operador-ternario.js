const fecha = new Date();
const dia = fecha.getDay();
const hora = fecha.getHours();

// [0, 6].includes(dia)
const horaApertura = dia === 6 || dia === 0 ? 9 : 11;

const message =
  hora < horaApertura
    ? `Está cerrado, hoy abrimos a las ${horaApertura}.`
    : `Está abierto.`;

console.log(message);
