// los objetos se definen con {} los objetos los conforman propiedades : valores se en listan con una coma.
// Key :  Value
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

// #3 la mas resiente
function printNameUpperCase(person) {
  // var name = person.name <---
  var { name } = person;
  console.log(name.toUpperCase());
}

// printNameUpperCase(alejandro);
// printNameUpperCase(stiwie);
// printNameUpperCase({ name: "lía" }); se agrega al console.log

var person = [{
  name: 'Alejandro',
  lastName: 'Delgado',
  age: 25,
},
{
  name: 'Stiwie',
  lastName: 'Isert',
  age: 72,
  }
];

function printNameAndAge (person) {
  for (var i = 0; < person.length i++) {
    console.log('Hola soy ' + person[i] ["name"] + "y tengo" + person[i] ["edad"]);
  }
}

function printNameAndAge (person){
  for (var i = 0; < person.length; 1++){
    console.log("Hola soy ${Persona [i].nombre} y tengo ${}")
  }
}