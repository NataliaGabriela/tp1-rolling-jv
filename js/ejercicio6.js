const numero1 = parseInt(prompt("Ingrese un numero"));
const numero2 = parseInt(prompt("Ingrese un numero"));

if (numero1 > numero2) {
  document.write("<p>El numero " + numero1 + " es mayor que " + numero2 + "</p></br>");
} else if (numero2 > numero1) {
  document.write("<p>El numero " + numero2 + " es mayor que " + numero1 + "</p></br>");
} else {
  document.write("<p>Los números ingresados son iguales </p></br>");
}