# Comparación de vectores

## Enunciado

Diseña una función lógica que, dados dos vectores, devuelva `true` si son iguales y `false` en otro caso. Para este caso supondremos que dos vectores son iguales si contienen los mismos elementos y en el mismo orden relativo, suponiendo que el primer elemento sigue al último.

Por ejemplo, si la entrada fuera:
- `['A', 'C', 'D', 'F', 'E']`
- `['D', 'F', 'E', 'A', 'C']`

La función devolvería `true`.

## 1. Renzo y Marlene (C++)

```c++

#include <iostream>

using namespace std;

int main(){
	char puntero = -1;	//0.    1.   2.   3.   4. 
	char arregloUno[5] = {'A', 'B', 'C', 'D', 'E'};
	char arregloDos[5] = {'D', 'E', 'A', 'B', 'C'};

	// Recorrer el segundo arreglo para verificar si contiene
	// el primer elemento del arregloUno
	for(int i=0; i < 5; i++){
		if( arregloUno[0] == arregloDos[i]){
			puntero = i; // Puntero valdría 2
		}
	}

	if(puntero < 0 ){
		std::cout << "Los arreglos son diferentes por que no encontré el 1° elemento";
		return 0;
	}

	for(int j=1; j < 5; j++){

		// Verificar el tamaño del arreglo
		if(puntero + j < 5){
			if(arregloUno[j] != arregloDos[puntero + j]){
				std::cout << "Los arreglos son diferentes";
				break; 
			}
		} else {
			if(arregloUno[j] != arregloDos[puntero + j - 5]){
				std::cout << "Los arreglos son diferentes";
				break; 
			}
		}

		
	}

	return 1;
}
```
## 2. Renzo (go)
```go

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
```
## 3. Lautaro y Facundo (JavaScript)
```JavaScript
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
```
