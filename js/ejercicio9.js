let frase = prompt('Ingrese una frase');
longitudFrase = frase.length;


for (let i = 0; i < longitudFrase; i++) {
    if(frase.charAt(i) === 'a' || frase.charAt(i) === 'e' || frase.charAt(i) === 'i' || frase.charAt(i) === 'o' || frase.charAt(i) === 'u'){
        document.write(frase.charAt(i) + '-')
    }else if(frase.charAt(i) === 'A' || frase.charAt(i) === 'E' || frase.charAt(i) === 'I' || frase.charAt(i) === 'O' || frase.charAt(i) === 'U'){
        document.write(frase.charAt(i) + '-')
    }else  if(frase.charAt(i) === 'á' || frase.charAt(i) === 'é' || frase.charAt(i) === 'í' || frase.charAt(i) === 'ó' || frase.charAt(i) === 'ú'){
        document.write(frase.charAt(i) + '-')
    }
}