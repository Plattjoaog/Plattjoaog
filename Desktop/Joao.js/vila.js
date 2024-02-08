const caractere = "E";

if ("AEIOUaeiou".includes(caractere)) {
    if ("AEIOU".includes(caractere)) {
        console.log("Vogal maiúscula");
    } else {
        console.log("Vogal minúscula");
    }
} else if ("1234567890".includes(caractere)) {
    console.log("Número");
} else {
    console.log("Consoante");
}

