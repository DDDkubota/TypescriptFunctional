//funcion pura es cualquiera que no tenga efectos colaterales, no debe mutar si comprtamiento
const some = () => Math.random();
//no es una funcion pura

const suma = (a: number, b: number) => a + b;
console.log("suma: ", suma(1, 2));
//Es una funcion pura
