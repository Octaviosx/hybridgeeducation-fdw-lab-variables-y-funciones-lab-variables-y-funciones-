// Ejercicio 3: Suma de Dos Números
// Declara una función llamada "sumar" que acepte dos parámetros (a y b) y retorne su suma

//Escribe tu función aquí
function sumar(a, b) {
    return a + b;
}

let x = sumar(3, 5);

console.log(x);
// Exporta la función para que pueda ser utilizada en las pruebas
module.exports = {
    sumar
};
