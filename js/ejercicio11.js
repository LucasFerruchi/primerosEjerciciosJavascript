let numero1 = prompt("Escribe un número");
if (numero1 % 2 === 0 || numero1 % 3 === 0 || numero1 % 5 === 0 || numero1 % 7 === 0) {
    if (numero1 % 2 === 0) {
        document.write("Es divisible por 2");
    }
    if (numero1 % 3 === 0) {
        document.write("<br>Es divisible por 3");
    }
    if (numero1 % 5 === 0) {
        document.write("<br>Es divisible por 5");
    }
    if (numero1 % 7 === 0) {
        document.write("<br>Es divisible por 7");
    } else { document.write("No es disible por los demás"); }
}