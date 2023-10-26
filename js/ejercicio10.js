const numero1 = parseInt(prompt("Ingrese un numero"));



if (numero1 % 2 == 0) {
    document.write("<p>El numero " + numero1 + " es divisible por 2 </p></br>");
  } else if(numero1 % 3 == 0){
    document.write("<p>El numero " + numero1 + " es divisible por 3 </p></br>");
  } else if(numero1 % 5 == 0){
    document.write("<p>El numero " + numero1 + " es divisible por 5 </p></br>");
  } else if(numero1 % 7 == 0){
    document.write("<p>El numero " + numero1 + " es divisible por 7 </p></br>");
  }else{
    document.write("<p>El numero " + numero1 + " no es divisible por 2,3,5,7 </p></br>");
  }
 