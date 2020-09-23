let signo = prompt("cual es tu signo?");
const horóscopos = {
  aries: "21 marzo - 19 abril",
  tauro: "20 abril - 20 mayo",
  geminis: "21 mayo - 20 junio",
  cancer: "21 junio - 22 julio",
  leo: "23 julio - 22 agosto",
  virgo: "23 agosto - 22 septiembre",
  libra: "23 septiembre - 22 octubre",
  escorpión: "23 octubre - 21 noviembre",
  sagitario: "22 noviembre - 21 diciembre",
  capricornio: "22 diciembre - 19 enero",
  acuario: "20 enero - 18 febrero",
  piscis: "19 febrero - 20 marzo",
};

const calcularSigno = function (signo) {
  switch (signo.toLowerCase()) {
    case "aries":
      console.log(horóscopos[signo]);
      break;
    case "tauro":
      console.log(horóscopos[signo]);
      break;
    case "géminis":
    case "geminis":
      console.log(horóscopos[signo]);
      break;
    case "cáncer":
    case "cancer":
      console.log(horóscopos[signo]);
      break;
    case "leo":
      console.log(horóscopos[signo]);
      break;
    case "virgo":
      console.log(horóscopos[signo]);
      break;
    case "libra":
      console.log(horóscopos[signo]);
      break;
    case "escorpión":
      console.log(horóscopos[signo]);
      break;
    case "sagitario":
      console.log(horóscopos[signo]);
      break;
    case "capricornio":
      console.log(horóscopos[signo]);
      break;
    case "acuario":
      console.log(horóscopos[signo]);
      break;
    case "piscis":
      console.log(horóscopos[signo]);
      break;
    default:
      console.log("Este signo no Existe");
      break;
  }
};
calcularSigno(signo);
