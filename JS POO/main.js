/*Objeto literal */

const natalia={
    name: "Natalia",
    age:20,
    cursosAprobados:[
        "Curso Definitivo de HTML y CSS",
        "Curso Practico de HTML y CSS",
        
    ],

   /*  aprobarCurso: function(cursito){
        this.cursosAprobados.push(cursito)
    } */
    aprobarCurso(cursito){
        this.cursosAprobados.push(cursito)

    }
};

//Hacer que Natalia apruebe otro curso

natalia.aprobarCurso("Curso de Python")
console.log(natalia.cursosAprobados)


class Student{
    constructor(name,age, cursosAprobados){
        this.name= name;
        this.age =age;
        this.cursosAprobados= cursosAprobados;
    }
   
    aprobarCurso(cursito){
        this.cursosAprobados.push(cursito)

    }
}
/* Student.prototype.aprobarCurso= function(cursito){
    this.cursosAprobados.push(cursito)
} */

const maria = new Student(
    "Maria",
    25,
    ["Curso analisis de negocios","curso 1" , "curso 2"]
)

/*obejtos como parametros */

class Student2{
    constructor({
        name,
        age, 
        cursosAprobados=[]
    
    }){ 
        this.name= name;
        this.age =age;
        this.cursosAprobados= cursosAprobados;
    }
   
    aprobarCurso(cursito){
        this.cursosAprobados.push(cursito)

    }
}

const pedrito = new Student2(
    {
        name: "Pedro",
        age: 28,
        cursosAprobados:["Ciencias de la computacion"]
    }
)
   
console.log(pedrito)


/*Objetos dentro de Obejetos para enviar paramentros */



/**Escribir en varios lados a la vez
alt + click

Mover una línea hacia arriba y abajo
alt + flecha hacia arriba (o flecha hacia abajo)

Copiar una línea hacia arriba o abajo
alt + shift + flecha hacia arriba (o flecha hacia abajo)

Borrar una línea completa a la vez
shift + supr */