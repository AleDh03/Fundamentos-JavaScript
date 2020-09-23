// Hace referencía  a cuales variables puede acceder y el valor que tiene al momento de invocar la función
// Variable local: Variable dentro de una función sino por fuera de ella.
// Al hacer referencias directa a una variable global dentro de una función, podernos
// modificar su valor, esto se le denomina sideEffect, y esto lo vamos  a querer evitar.
// Para acceder a la variable global, hacemos referencia al objeto global, este caso por estar en el browser accedemos con window. nombre.

var name = "Alejandro";

// Tengo una función llamada Imprime Nombre en Mayúscula con un parámetro "n".
function printNameUpperCase(name) {
  name = name.toUpperCase();
  console.log(name);
}
printNameUpperCase(name);
