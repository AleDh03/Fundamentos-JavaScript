class Persona{
    constructor(nombre, apellido, altura) {
        this.nombre = nombre;
        this.apellido = apellido;
        this.altura = altura;

}
    saludar(){
        console.log(`Hola me llamo ${this.nombre} ${this.apellido} `);
    }
    soyAlto(){
        return this.altura > 1.8;
    }
}

class Desarrollador extends Persona {
    constructor(nombre, apellido, altura) {
  super(nombre, apellido, altura)

    }
saludar(){
    console.log(
      `Hola me llamo ${this.nombre} ${this.apellido} y soy desarrolladora`
    );

}
}


// var alejo = new Persona("Alejandro", "Delgado", 1.74);
// var lía = new Persona("Lía", "Fernanda", 1.69);
// var karijen = new Persona("Karijen", "03", 1.82);
