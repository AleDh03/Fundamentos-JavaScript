var alejo = {
  nombre: "Alejandro",
  apellido: "Delgado",
  altura: 1.74,
};

var lia = {
  nombre: "Lía",
  apellido: "Gil",
  altura: 1.65,
};

var paula = {
  nombre: "Paula",
  apellido: "Miranda",
  altura: 1.84,
};

var luis = {
  nombre: "Luis",
  apellido: "Hernandez",
  altura: 1.82,
};

var miriam = {
  nombre: "Miriam",
  apellido: "Palermo",
  altura: 1.9,
};

const esBaja = (persona) => persona.altura < 1.8;
const esAlta = (persona) => persona.altura > 1.8;

var personas = [alejo, lia, paula, luis, miriam];

var personasBajas = personas.filter(esBaja);
var personasAltas = personas.filter(esAlta);

// var personasAltas = personas.filter(function (persona) {
//   return persona.altura > 1.8;
// });

const pasarAlturaACms = (persona) => ({
  ...persona,
  altura: (persona.altura *= 100),
});
//
//
var personasCms = personas.map(pasarAlturaACms);

console.log(personasCms);
// console.table(personasCms);
