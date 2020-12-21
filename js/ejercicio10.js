let numero1 = prompt("Escribe un número");
if (numero1 % 2 === 0 || numero1 % 3 === 0 || numero1 % 5 === 0 || numero1 % 7 === 0) {
    document.write("Es divisibe por 2, 3, 5 o 7");
} else { document.write("No es divisible por 2, ni por 3, ni por 5, ni por 7"); }