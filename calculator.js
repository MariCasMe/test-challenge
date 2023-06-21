const calculator = {
    sum(a, b) {
        return a + b;
    },
    substract(a, b) {
        return a - b;
    },
    multiply(a, b) {
        return a * b;
    },
    divide(a, b) {
        return a / b;
    },
    power: (a,b) => a ** b,//Esta linea fue modificada, pues no pasó el test
}


module.exports = calculator;