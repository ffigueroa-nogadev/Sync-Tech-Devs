// ----------------------- Código Renzo (go) --------------------------------
/*Diseña una función lógica que dados dos vectores, devuelva true si son iguales y
false en otro caso. Para este caso supondremos que dos vectores son iguales si
contienen los mismos elementos y en el mismo orden relativo, suponiendo que
el primer elemento sigue al último. Por ejemplo, si la entrada fuera:
['A', 'C', 'D', 'F', 'E']

['D', 'X', 'E', 'A', 'C']
La función devolvería true.*/
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