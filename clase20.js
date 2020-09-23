var alejo = {
  nombre: "Alejandro",
  apellido: "Delgado",
  cantidadDeLibros: 111,
};

var lia = {
  nombre: "Lía",
  apellido: "Gil",
  cantidadDeLibros: 78,
};

var paula = {
  nombre: "Paula",
  apellido: "Miranda",
  cantidadDeLibros: 132,
};

var luis = {
  nombre: "Luis",
  apellido: "Hernandez",
  cantidadDeLibros: 90,
};

var miriam = {
  nombre: "Miriam",
  apellido: "Palermo",
  cantidadDeLibros: 91,
};

var sancho = {
  nombre: "Sancho",
  apellido: "pansa",
  cantidadDeLibros: 182,
};

const esBaja = (persona) => persona.altura < 1.8;
const esAlta = (persona) => persona.altura > 1.8;

var personas = [alejo, lia, paula, luis, miriam];

var personasBajas = personas.filter(esBaja);
var personasAltas = personas.filter(esAlta);

/* var personasAltas = personas.filter(function (persona) {
//   return persona.altura > 1.8;
 });*/

const pasarAlturaACms = (persona) => ({
  ...persona,
  altura: (persona.altura *= 100),
});
//
//
var personasCms = personas.map(pasarAlturaACms);

/* Una manera de contabilizar cuantos libros suman los de todos en total
 var acumula = 0;
 for (var i = 0; i < personas.length; i++) {
   acumula += personas[i].cantidadDeLibros;
 }
 console.log(`En total todos tienen ${acumula} de libros`); */

const reducer = (acumula, { cantidadDeLibros }) => acumula + cantidadDeLibros;

var totalDeLibros = personas.reduce(reducer, 0);

console.log(`En total todos tienen ${totalDeLibros} de libros`);
