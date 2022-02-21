//referenciar entre mutable y no mutable
//no deben de modifcarse valores externos

const numbers:number[]= [1,2,3,4,5,6,7,8,9,10];
function sort (list:number[]){
    return list.sort()
}
//no tiene tranparencia
console.log(sort(numbers));
console.log(numbers);
const numbers2: readonly number[] = [1,2,3,4,5,6,7,8,9,10];
//tiene tranparencia
function sort2 (list:readonly number[]){
    return [...list].sort();
}
console.log(sort2(numbers2));
console.log(numbers2);