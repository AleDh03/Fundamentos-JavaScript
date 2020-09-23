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

printCareer(alejo);

var stiwie = {
  name: "stiwie",
  lastName: "Isert",
  age: 25,
};
var lía = {
  name: "lía",
  lastName: "Gil",
  age: 12,
};

var hasni = {
  name: "hasni",
  lastName: "Ruthkowski",
  age: 18,
};

// Reto...
function printAdult(person) {
  if (person.age >= 18) {
    console.log(`${person.name} ${person.lastName} You are an adult`);
  } else {
    console.log(`${person.name} ${person.lastName} You are a baby`);
  }
}
printAdult(stiwie); // le indico que me la presente en la consola. de no ponerlo tendría que llamarla manual.
printAdult(lía);
printAdult(hasni);
