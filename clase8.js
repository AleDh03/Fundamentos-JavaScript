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

printNameUpperCase(alejandro);
printNameUpperCase(stiwie);

//  Va ir sumando un año de edad cada vez que la llamemos.
function birthDay(person) {
  return {
    //significa que la función "devuelve"
    ...person, // a los tres puntos se llaman operador de propagación (Spread Operator), implementación resiente, crea un duplicado de nuestro objeto para luego modificarlo según lo que necesitemos.
    age: person.age + 1, //acá unicamente estoy solicitando que modifique la propiedad.
  };

  //   person.age += 1;
}
