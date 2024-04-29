/*
 * Escribe un programa que muestre por consola (con un print) los
 * números de 1 a 100 (ambos incluidos y con un salto de línea entre
 * cada impresión), sustituyendo los siguientes:
 * - Múltiplos de 3 por la palabra "fizz".
 * - Múltiplos de 5 por la palabra "buzz".
 * - Múltiplos de 3 y de 5 a la vez por la palabra "fizzbuzz".
 */


for (let i = 0; i <= 100; i++) {
  if (i % 3 === 0 && i % 5 === 0) {
    console.log('fizzbuzz')
  } else if (i % 3 === 0) {
    console.log('Fizz');
  } else if (i % 5 === 0) {
    console.log('Buzz');
  } else {
    console.log(i);
  }
}

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
