class Persona{
    constructor(nombre, apellido, altura) {
        this.nombre = nombre;
        this.apellido = apellido;
        this.altura = altura;

}
    saludar(fn){
        var {nombre, apellido} = this;
        console.log(`Hola me llamo ${nombre} ${apellido} `);
        if(fn){
            fn(nombre, apellido)
        } 
    }
    soyAlto(){
        return this.altura > 1.8;
    }
}

// 
// 

class Desarrollador extends Persona {
    constructor(nombre, apellido, altura) {
  super(nombre, apellido, altura)

    }
saludar(fn){
    // var nombre = this.nombre;
    // var apellido = this.apellido;
    var {nombre, apellido} = this
    console.log(`Hola me llamo ${nombre} ${apellido} y soy desarrolladora`);
 if(fn){
            fn(nombre, apellido, true)
         }
    }
}

function responderSaludo(nombre, apellido, esDev) {
    console.log(`Buen día ${nombre} ${apellido}`)
    if (esDev){
        console.log(`A mirá, no sabía que eres desarrolladora`)
    }
}

// 

var alejo = new Persona("Alejandro", "Delgado", 1.74);
var lía = new Desarrollador("Lía", "Fernanda", 1.69);
var karijen = new Persona("karijen", "03", 1.82);

alejo.saludar();
karijen.saludar(responderSaludo);
lía.saludar(responderSaludo);
