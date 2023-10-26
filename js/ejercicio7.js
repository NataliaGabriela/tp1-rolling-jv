const num1 = parseInt(prompt("Ingrese el primer numero"));
const num2 = parseInt(prompt("Ingrese el segundo numero"));
const num3 = parseInt(prompt("Ingrese el tercer numero"));

if(num1 > num2 && num1 > num3){
    document.write(`El numero 1 (${num1}) es mayor que el numero 2 (${num2}) y el 3 (${num3})`)
}else if (num3 > num2){
    document.write(`El numero 3 (${num3}) es mayor que el numero 2 (${num2}) y el 1 (${num1})`)
}else if (num2 > num3){
    document.write(`El numero 2 (${num2}) es mayor que el numero 1 (${num1}) y el 3 (${num3})`)
}else{
    document.write(`Los números son iguales`)
}