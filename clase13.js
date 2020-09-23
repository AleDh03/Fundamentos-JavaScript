var alejo = {
  name: "Alejandro",
  lastName: "Delgado H",
  age: 25,
  weight: 60,
};

console.log(`Al inicio del año ${alejo.name} pesa ${alejo.weight}kg`);

// function aumentarPeso(person) {
//   return (person.weight += 200);
// }

const INCREMENTO_PESO = 0.2; // .200 gramos
const DIAS_DEL_AÑO = 365; //dias

// Función donde se aumenta el valor del peso del objeto persona
const aumentarPeso = (person) => (person.weight += INCREMENTO_PESO);

// Función donde se baja el valor del peso del objeto persona
const adelgazar = (person) => (person.weight -= INCREMENTO_PESO);

// aca la simulación del transcúrso.

for (var i = 1; i <= DIAS_DEL_AÑO; i++) {
  var random = Math.random();
  if (random < 0.25) {
    aumentarPeso(alejo);
  } else if (random < 0.5) {
    aumentarPeso(alejo);
  }
}

console.log(
  `Al final del año ${alejo.name} pesa ${alejo.weight.toFixed(1)} kg`
);
