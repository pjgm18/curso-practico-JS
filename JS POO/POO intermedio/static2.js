const juan={
    name: "Pedro",
    age:28,
    approvedCourse:["Curso1"],
    addCourse(newCourse){
        this.approvedCourse.push(newCourse)
    }
};

/* console.log(Object.keys(juan))
console.log(Object.getOwnPropertyNames(juan))
console.log(Object.entries(juan)) */




/*crear nuevas propiedades para el objeto juan, no solo asigna valores a propiedades si no define valores de los 
atributos adicionales*/


Object.defineProperty(juan,"pruebaNasa",{
    value:"extraterrestres",
    enumerable: false,
    writable: false,
    configurable: false,


});
Object.defineProperty(juan,"navigator",{
    value:"Chrome",
    enumerable: false,
    writable: true,
    configurable: true,


});
Object.defineProperty(juan,"editor",{
    value:"VSCode",
    enumerable: true,
    writable: false,
    configurable: true,


});
Object.defineProperty(juan,"terminal",{
    value:"WSL",
    enumerable: true,
    writable: true,
    configurable: false,


});
//Muestra los atributos del objeto pasado por parametro en forma de objetos que a su vez contienen otras propiedades

console.log(Object.getOwnPropertyDescriptors(juan))


//No permite editar las porpiedades(sobreescribir ) del objeto pero si se pueden delet
Object.seal(juan)

//No permite editar las porpiedades del objeto either delet
Object.freeze(juan)

