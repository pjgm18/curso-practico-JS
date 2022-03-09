const notes=[
    {   course: "Educacion Fisica",
        note:10,
        credit:2
    
    },
    {   course: "Programacion",
        note:8,
        credit:5
    
    },

    {   course: "Finanzas personales",
        note:7,
        credit:5
    
    }
];

/*Multiplicar cada número de la lista por su peso
Vamos a usar de nuevo el método map de los arrays. Crearemos un nuevo arreglo de 
solo números a partir de multiplicar cada nota con sus créditos. */


const notesWithCreditos = notes.map(function(noteObject){
    return noteObject.note * noteObject.credit;
})
const sumOfNotesWithCredit = notesWithCreditos.reduce(function (valorAcumulado=0, nuevoElemento){
    return valorAcumulado + nuevoElemento;
})

const creditos = notes.map(function(elemento){
    return elemento.credit;
})

const sumaCredito= creditos.reduce(function(valorAcumulado=0, nuevoElemento){

    return valorAcumulado + nuevoElemento;

})

const ponderado= sumOfNotesWithCredit/sumaCredito

