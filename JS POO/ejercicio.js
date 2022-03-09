class Student3 {
    constructor({
        name,
        email,
        username,
        twitter= undefined,
        instagram=undefined,        
        facebook=undefined, 
        approvedCourses=[],
        escuela= [],     
    })
    {   this.name=name,
        this.email=email,
        this.username=username,
        this.socialMedia= {
            instagram,
            twitter,
            facebook

        }
        
        this.approvedCourses = approvedCourses,
        this.escuela = escuela
    
}
    
}

class Courses{
    constructor({
        name,
        teacher,
        clases=[]
    })

    {
        this.name=name,
        this.teacher=teacher,
        this.clases = clases
    }
}

class LearnigPaths{
    constructor({
        name,
        courses=[]
        
    })
    {
        this.name = name,
        this.courses= courses
    }

    
}


/* *****************Instancias Cursos********************************* */

const PB = new Courses({
    name:"Curso de ProgramacionBasica",
    teacher:"JuanDC"
})

const JS = new Courses({
    name:"Curso de JS",
    teacher:"JuanDC"
})
const POO = new Courses({
    name:"Curso de POO",
    teacher:"Evelia"
})

/* *****************Instancias Escuelas********************************* */

const escuelaDesarrolloWeb = new LearnigPaths({
    name:"Escuel de desarrollo Web",
    courses :[PB,JS,POO]
})

const escuelaData = new LearnigPaths({
    name:"Escuel de Data Science",
    courses :[JS,POO]
})

const escuelaMachine = new LearnigPaths({
    name:"Escuel de Machine Learning",
    courses :[JS,POO]
})

/* *****************Instancias de Estudiantes********************************* */

const juan = new Student3({
    name: "Juan",
    username: "juanDC",
    emial: "juanito@juanito.com",
    twitter:"fjuandc",
     escuela : [desarrolloWeb] 
})
console.log(juan.escuela)




