function counter(n: number=1){  
        let number=n;
        return ()=>{
        console.log("hola "+number++);
        }
}
//closure encargaados de proyeteger estados
const myClosure=counter();
const myClosure2=counter(50);

myClosure();
myClosure();
myClosure();
myClosure2();
myClosure2();
myClosure2();
myClosure();
//en abmos se protege la variable let number independiente de la funcion en la que se crea la referencia 
