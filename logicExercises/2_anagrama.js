/*
 * Escribe una función que reciba dos palabras (String) y retorne
 * verdadero o falso (Bool) según sean o no anagramas.
 * - Un Anagrama consiste en formar una palabra reordenando TODAS
 *   las letras de otra palabra inicial.
 * - NO hace falta comprobar que ambas palabras existan.
 * - Dos palabras exactamente iguales no son anagrama.
 */

console.log('palabra'.split('').sort())
console.log('alabrap'.split('').sort())

const isAnagram = (wordA, wordB) => {
  // primero pasamos a minúsculas las palabras
  const lowerCaseWordA = toLowerCaseString(wordA);
  const lowerCaseWordB = toLowerCaseString(wordB);

  //limpiamos espacios en blanco
  const cleanedWordA = clearBlankSpaces(lowerCaseWordA)
  const cleanedWordB = clearBlankSpaces(lowerCaseWordB)
  // comparamos si las palabras son exactamente iguales
  if (cleanedWordA === cleanedWordB) {
    return {isAnagram: false, message: 'Las palabras son iguales'};
  }
  // separamos las palabras en un array de letras
  const wordListA = splitWords(cleanedWordA);
  const wordListB = splitWords(cleanedWordB);
  // ordenamos las letras en orden alfabético
  const sortedWordListA = sortLetters(wordListA);
  const sortedWordListB = sortLetters(wordListB); 
  // unimos las letras para formar una palabra con sus caracteres 
  const joinedLettersA = joinLetters(sortedWordListA);
  const joinedLettersB = joinLetters(sortedWordListB);
  // comparamos si las palabras son iguales
  if (joinedLettersA === joinedLettersB) {
    return {isAnagram: true, message: `Con la palabra ${wordA} se puede formar la palabra ${wordB}`};
  }else{
    return {isAnagram: false, message: `Con la palabra ${wordA} no se puede formar la palabra ${wordB}`};
  }
}

const toLowerCaseString = (text) => {
  return text.toLowerCase();
}

const clearBlankSpaces = (text) => {
  return text.trim();
}

const splitWords = (text) => {
  return text.split('');
}

const sortLetters = (letters) => {
  return letters.sort();
}

const joinLetters = (letters)=>{
  return letters.join('');
}


const result = isAnagram('Castor', 'castro');
console.log(result);