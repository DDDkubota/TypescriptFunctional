//currifición mantener un parametro inicial para llamar a una funcion que utiliza mas parametros
const getotal=(amount: number, tax:number)=>amount + (amount * tax );
function gettotalCurry(t: number){
    let tax: number = t;
    return (amount:number)=>amount + (amount * tax );


}
//pequeñas funcion de eejemplo para currificar de una funcion

console.log(getotal(100,0.16)); //150
console.log(getotal(200,0.16)); //150
console.log(getotal(300,0.16)); //150
//sin currificar
const calc= gettotalCurry(0.16);
console.log(calc(100)); //150
console.log(calc(200)); //150
console.log(calc(300)); //150
//con currificacion
console.log(gettotalCurry(0.16)(100)); //150
//otra forma de currificar, reaccion por nivel
