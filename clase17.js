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
  altura: 160,
};

var personas = [alejo, lia, paula, luis, miriam];

for (var i = 0; i < personas.length; i++) {
  var persona = personas[i];
  console.log(`${persona.nombre} mide ${persona.altura} centímetros`);
}
