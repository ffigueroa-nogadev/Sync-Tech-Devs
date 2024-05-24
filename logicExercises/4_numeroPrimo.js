/*
 * Escribe un programa que se encargue de comprobar si un número es o no primo.
 * Hecho esto, imprime los números primos entre 1 y 100.
 */

const esPrimo = (numero) => {
  if (numero === 0) return false;
  if (numero === 1) return true;

  for (let i = 2; i < numero; i++) {
    const resto = numero % i;
    if (resto === 0) {
      return false;
    }
  }
  return true;
}
const listarPrimos = ()=>{
  const numberList = [];
  for (let number = 0; number <= 100; number++) {
    if (esPrimo(number)) {
      numberList.push(number)
    }
  }
  console.log(numberList);
}

listarPrimos();