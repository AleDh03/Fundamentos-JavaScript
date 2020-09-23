var age = 25;

// a esto se le llama aumento que es tomar la variable que tengo y sumarle 1.

age += 1; // age = age + 1;

var weight = 60;

// acá le esto diciendo que a la variable peso que equivale a 60 restarle 2
// o bien dependiendo de lo que se le indique que sume o reste

//que al valor que ya tengo, se le resten 2 aca indico la acción con símbolo menos -= e igual.
weight -= 2; // weight = weight - 2

// acá voy a demostrame como sumar dos números sumando peso por lo que me comí en este ejemplo el sandwich.
var sandwich = 1;

weight += sandwich; // weight = weight + sandwich;

// otra variable continuando con el ejemplo, al hacer la rutina le sumo tres entonces a peso le sumo 3.

var exerciseRoutine = 3;

// weight = weight - exerciseRoutine; de la siguiente manera es mas eficiente.
weight -= exerciseRoutine;

// ejemplo con decimales

var winePrice = 200.3;
// por la compra de un vino son 200.3 pero si quisiera comprar tres vinos.

// var total = winePrice * 3; de esta manera me dará un resultado con decimales muy extensos por lo que es preferible lo siguiente.
// aca incluyo una cuenta accediendo a un modulo de Js global que es el de matemáticas con Math.round.
var total = Math.round(winePrice * 100 * 3) / 100;

// acá con total.toFixed para indicarle cuantos decimales incluir con un numero dentro de los paréntesis.
var totalStr = total.toFixed(3);

//en operaciones con decimales debo realizar operaciones adicionales para conseguir un resultado preciso. Ej. var total = ( precioDeVino * 100 * 3) / 100 a números con decimales con parseFloat() puntos flotantes osea decimales.
var total2 = parseFloat(totalStr);

// DIVISIONES
// En este ejemplo voy a dividir una pizza de 8 pedazos entre 2 comensales(personas).

var pizza = 8;

var person = 2;

var slicesPerPerson = pizza / person;
