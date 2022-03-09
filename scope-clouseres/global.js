
/*Con el scope global se puede acceder las siguientes variables 
desde cualquier parte del codigo*/
var hello="hola"
let world = "Hello world"
const helloWorld= "Hola mundo"

console.log(hello);

const anotherFunction = ()=>{
    console.log(hello);
    console.log(world);
    console.log(helloWorld);


}
anotherFunction()

/*Utilizando  let y const no se pueden declarar variables con el mismo nombre  para reasignar 
un valor,  a diferencia de  var.*/

var hello="hola"
var hello="hola ppp"
let world = "Hello world"
let world = "Hello world+"
const helloWorld= "Hola mundo"

console.log(hello);

const anotherFunction = ()=>{
    console.log(hello);
    console.log(world);
    console.log(helloWorld);


}
anotherFunction()

/*Es malaa practica declarar variables globales dentro de un funcion */    

const helloWorld=()=>{

    globalVar = "Hola mundo"

}
helloWorld()
console.log(globalVar)