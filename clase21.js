function Persona(nombre, apellido, altura) {
  this.nombre = nombre;
  this.apellido = apellido;
  this.altura = altura;
}

Persona.prototype.saludar = function () {
  console.log(`Hola me llamo ${this.nombre} ${this.apellido} `);
};

Persona.prototype.soyAlto = function () {
  if (this.altura >= 1.8) {
    console.log(`Soy ${this.nombre} y soy alto porque mido ${this.altura}`);
  } else {
    console.log(`Soy ${this.nombre} y soy bajo porque mido ${this.altura}`);
  }
};

var alejo = new Persona("Alejandro", "Delgado", 1.74);
var lía = new Persona("Lía", "Fernanda", 1.69);
var karijen = new Persona("Karijen", "03", 1.82);

alejo.soyAlto();
lía.soyAlto();
karijen.soyAlto();
