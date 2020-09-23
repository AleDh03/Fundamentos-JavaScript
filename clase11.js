var alejo = {
  name: "alejo",
  lastName: "Delgado",
  age: 25,
  developer: true,
  mechanic: false,
  singer: true,
  cool: true,
  dancing: true,
  adult: true,
};

var lía = {
  name: "lía",
  age: "13",
};

// Acá tengo una function que sigue condiciones Booleanas si es true or false le asigno con if el recorrido.
function printCareer(person) {
  console.log(`${person.name} is:`);
  if (person.developer) {
    console.log("developer");
  }
  if (person.mechanic) {
    console.log("mechanic");
  } else {
    console.log("Isn't mechanic"); // con un else le digo que en caso de que sea falso el statement anterior procede hacer otra acción que se le indique.
  }
  if (person.singer) {
    console.log("singer");
  }
  if (person.cool) {
    console.log("cool");
  }
  if (person.dancing) {
    console.log("dancing");
  }
}

// printCareer(alejo); invoca la función en la web.

// Explicación del reto
const MAYORÍA_DE_EDAD = 18; // esto en const por ser un numero que no se va modificar se es adulto luego de los 18 pero se aclara con esta buena practica.
function esMayorDeEdad(person) {
  return person.age >= MAYORÍA_DE_EDAD;
}

function printIfAdult(person) {
  if (esMayorDeEdad(person)) {
    console.log(`${person.name} Is an Adult`);
  } else {
    console.log(`${person.name} You are a little kid`);
  }
}
