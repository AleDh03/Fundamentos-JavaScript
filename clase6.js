// los objetos se definen con {} los objetos los conforman propiedades : valores se en listan con una coma.
// Key : Value
var alejandro = {
  name: "Alejandro",
  lastName: "Delgado",
  age: 25,
};

var stiwie = {
  name: "Stiwie",
  lastName: "Gil",
  age: 26,
};
// Diferentes formas de representar una función

// #1
// function printNameUpperCase(person) {
//   var name = person.name.toUpperCase();
//   console.log(name);
// }

// #2
function printNameUpperCase(person) {
  console.log(person.name.toUpperCase());
}

// #3 la mas resiente
function printNameUpperCase({ name }) {
  console.log(name.toUpperCase());
}
printNameUpperCase(alejandro);
printNameUpperCase(stiwie);
// printNameUpperCase({ name: "lía" }); se agrega al console.log
