//

let name = "Alejandro",
 lastName = "Delgado H.";

  // Con esta función logro que el string en Mayúscula.

let nameUpperCase = name.toUpperCase();

// con esta que salga en Minúscula.

let lastNameLowerCase = lastName.toLowerCase();

// Con esta para saber cual es el primer carácter de un string, esta si que requiere un parámetro.

let firstLetterOfName = name.charAt(0);

// con esta la ultima letra de mi string.

let lastLetterOfName = name.charAt(8);

// Esta ees solo un atributo por eso no usamos los paréntesis que son los que invocan las funciones.
let numberOfLetter = name.length;

// Para con concatenar dos string

let completeName = name + " " + lastName;

// Inter-polacion de texto otra manera de concatenar es mas actual y mas ágil
// para se usan las comillas invertidas el signo de dolar y llaves con el nombre de la letiable

let completeName = `${name} ${lastName.toUpperCase()}`;

//Accediendo a un substring osea acceder a un string mas pequeño
// una manera de hacerlo es con charAt y el numero de la posición.

let str = name.charAt(1) + name.charAt(2);
//Otra manera
let str1 = name.substr(1, 2);
