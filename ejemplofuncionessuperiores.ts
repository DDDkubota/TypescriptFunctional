interface Beer{
    name: string;
    alcohol: number;
}
const data: Beer[] = [
    {name: 'Pilsen', alcohol: 4.5},
    {name: 'Stella', alcohol: 5},
    {name: 'Budweiser', alcohol: 4.5},
]
//fucniones de grado superior son todas aquellas que reciben una funcion como parametro
//no modificar elementos externos
function getinfo(beers: Beer[], fn:(b: string[]) => void){
    const beersinfo= beers.map(e =>`cerveza: ${e.name} con alcohol ${e.alcohol}`); //fucniones de grado superior son todas aquellas que reciben una funcion como parametro
    fn(beersinfo);


}
function gshow(beers: string[]){
    beers.map(e=> console.log(e))
}
function gshowToUpper(beers: string[]){
    beers.map(e=> console.log(e.toUpperCase()))
}
function showOrdered(beers:string[]){
    beers.sort().map((e,index)=> console.log(`${index+1} ${e}`))
}
getinfo(data, gshowToUpper);
getinfo(data, showOrdered);