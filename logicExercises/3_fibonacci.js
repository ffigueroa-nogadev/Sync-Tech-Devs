
/*
 * Escribe un programa que imprima los 50 primeros números de la sucesión
 * de Fibonacci empezando en 0.
 * - La serie Fibonacci se compone por una sucesión de números en
 *   la que el siguiente siempre es la suma de los dos anteriores.
 *   0, 1, 1, 2, 3, 5, 8, 13...
 */


const fibonacci = [0, 1];

function sumarDosAnteriores(a, b) {
  return a + b;
}
function iterarSucesion() {
  const ultimoValor = fibonacci[fibonacci.length - 1];
  const penUltimoValor = fibonacci[fibonacci.length - 2];
  const nuevoValor = sumarDosAnteriores(penUltimoValor, ultimoValor);
  fibonacci.push(nuevoValor);
}

for (let i = 0; i < 48; i++) {
  iterarSucesion()
  console.log(fibonacci[i]);
}
