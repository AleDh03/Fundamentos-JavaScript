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

const MAYORÍA_DE_EDAD = 18;

// En JavaScript se permite asignarle un función a una variable.
// esta función pasa a ser un función anónima pues el nombre se le pasa a asignar en var.
// asignando que es una constante consta que es una function

// var esMayorDeEdad = function (person) {
//   return person.age >= MAYORÍA_DE_EDAD;
// };
const esMayorDeEdad = (person) => person.age >= MAYORÍA_DE_EDAD;

function printIfAdult(person) {
  if (esMayorDeEdad(person)) {
    console.log(`${person.name} Is an Adult`);
  } else {
    console.log(`${person.name} You are a little kid`);
  }
}

function authorizeAccess(person) {
  if (!esMayorDeEdad(person)) console.log("Acceso denegado");
}
