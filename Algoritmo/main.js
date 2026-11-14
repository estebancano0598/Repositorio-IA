
let numeros = [2, 7, 5];

numeros.sort( (a, b) => {
    if (a == b) {
        return 0;
    }
    if (a < b) {
        return -1;
    }
    return 1;
});

console.log(numeros);
