const funcion = ()=>{
    var hello = "Hola mundo dsad"
    console.log(hello)
}

funcion()

console.log(hello)



/* BLOCK SCOPE */

/*Var se establece en el scope local de la funcion, let y const se establecen en el scope
de bloque y no pueden ser accedidos por fuera del bloque */

const fruit =()=>{
    if (true){
        var fruit1 = "banana";
        let fruit2= "mango";
        const fruit3 = "kiwi";
        console.log(fruit2)
        console.log(fruit3)
    }

    console.log(fruit1)
    
}

fruit()


//utilizando let se mantienen los valores en los scope
let x = 1;
 {
     let x=2
     console.log(x)
 }
 console.log(x)

 //Utilizando var se puede reasignar el valor de la variable, el valor de x en el bloque se 
 //transmitio a x en global
 var x = 1;
 {
     var x=2
     console.log(x)
 }
 console.log(x)

