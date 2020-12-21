let frase = prompt("Escriba una frase");
console.log(frase);
console.log(frase.length);
console.log(frase.substr(0, 1))

for (let i = 0; i < frase.length; i++) {
    if (frase.substr(i, 1) == "a" || frase.substr(i, 1) == "e" || frase.substr(i, 1) == "i" || frase.substr(i, 1) == "i" || frase.substr(i, 1) == "o" || frase.substr(i, 1) == "u") {
        document.write(frase.substr(i, 1));
    }
}