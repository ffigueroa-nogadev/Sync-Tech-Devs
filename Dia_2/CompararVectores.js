// Diseña una función lógica que dados dos vectores, devuelva true si son iguales y
// false en otro caso. Para este caso supondremos que dos vectores son iguales si
// contienen los mismos elementos y en el mismo orden relativo, suponiendo que
// el primer elemento sigue al último. Por ejemplo, si la entrada fuera:
// ['A', 'C', 'D', 'F', 'E']
// ['D', 'F', 'E', 'A', 'C']
// La función devolvería true.

// ----------------------- Código Facu y Lauti --------------------------------
const vector1 = ['A', 'B', 'C', 'D', 'E']
const vector2 = ['D', 'E', 'A', 'B', 'C']
const vector3 = ['E', 'D', 'A', 'B', 'C']
const vector4 = ['D', 'A', 'B', 'C']


const compararVectores = (vectorA, vectorB)=>{
  // Si tienen distintas cantidades de elementos retorna falso
  if (vectorA.length !== vectorB.length) {
    return false;
  }
  // tomar el índice del primer vector
  const primerLetra = vectorA[0];
  // Se divide el vector en base a la primer letra
  const [segundaParte, primeraParte] = vectorB.join('').split(primerLetra);
  // Se une el vector en un string
  const vectorUnido = primerLetra + primeraParte + segundaParte
  // Se transforma el string en un array
  const nuevoVectorB = vectorUnido.split('');
  // Se comparan los elementos uno por uno
  for (let i = 0; i < vectorA.length; i++) {
    // Si alguno no coincide retorna falso directamente
    if (vectorA[i] !== nuevoVectorB[i]) {
      return false
    }
  }
  // Si llegó hasta acá el proceso significa que coinciden los vectores
  return true;
}

const result = compararVectores(vector1, vector1);
console.log(result);

