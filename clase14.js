var alejo = {
  name: "Alejandro",
  lastName: "Delgado H",
  age: 25,
  weight: 60,
};

console.log(`Al inicio del año ${alejo.name} pesa ${alejo.weight}kg`);

const INCREMENTO_PESO = 0.3; // .300 gramos
const DIAS_DEL_AÑO = 365; //dias

const aumentarPeso = (person) => (person.weight += INCREMENTO_PESO);

const adelgazar = (person) => (person.weight -= INCREMENTO_PESO);

const comeMucho = () => Math.random() < 0.3;

const realizaDeporte = () => Math.random() < 0.4;

const META = alejo.weight - 3;

var dias = 0;
//while (condition){ este código se va ejecutar siempre a menos que la condición cambie}
while (alejo.weight > META) {
  if (comeMucho()) {
    aumentarPeso(alejo);
  }
  if (realizaDeporte()) {
    adelgazar(alejo);
  }
  dias += 1;
}

console.log(`Pasarón ${dias} días hasta que  ${alejo.name} adelgazo 3k`);
