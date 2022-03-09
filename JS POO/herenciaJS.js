
class Coment{
    constructor({
        content,
        studentName,
        studentRole="estudiantes"
    })
    {
        this.content= content;
        this.studentName=studentName;
        this.studentRole=studentRole;
        this.meGusta = 0;

    }

    publicar(){
        console.log(this.studentName + "("+ this.studentRole+ ")")
        console.log(this.meGusta + " Likes")
        console.log(this.content)
    }

    
}







class Courses{
    constructor({
        name,
        teacher,
        isFree= false,
        lang="spanish",
        clases=[]
    })

    {
        this.name=name,
        this.teacher=teacher,
        this.clases = clases,
        this.isFree = isFree,
        this.lang = lang
    }
}


class Student {
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
    publicarComentario(commentContent,likes){

        const comment = new Coment({
            content: commentContent,
            studentName: this.name,
           
        })
        comment.meGusta=likes;

        comment.publicar();

    }
    
}

/*Al crear el constructor con el parametro porps estamos recibiendo en la calse freeStudent
las propiedades que declaren las instancias de esta y asimismo con la palabra super se le envian a la 
clase padre Student */
class FreeStudent extends Student{
    constructor(props){
        super(props);

    }
/*Si el nuevo curso es gratis el FreeStudent va a poder tomarlo y se le agrega a la propiedad 
 array approvedCourse
 */
    approveCourses(newCourse){
        if(newCourse.isFree){
            this.approvedCourses.push(newCourse)
        }   
        else{
            console.warn("Lo sentimos"+ this.name+ ", solo puedes tomar cursos abiertos.")
        }

    }

}

class BasicStudent extends Student{
    constructor(props){
        super(props);

    }
    approveCourses(newCourse){
        if(newCourse.lang !== "english"){
            this.approvedCourses.push(newCourse)
        }   
        else{
            console.warn("Lo sentimos"+ this.name+ ", no puedes tomar cursos en ingles .")
        }

    }
}

class ExpertStudent extends Student{
    constructor(props){
        super(props);

    }
    approveCourses(newCourse){
        
            this.approvedCourses.push(newCourse)
    }
}

class TeacherStudent extends Student{
    constructor(props){
        super(props);

    }
    approveCourses(newCourse){
        
            this.approvedCourses.push(newCourse)
    }

    /*Polimorfismo  */
    publicarComentario(commentContent,likes){

        const comment = new Coment({
            content: commentContent,
            studentName : this.name,
            studentRole : "Profesor",
           
        })
            comment.meGusta= likes;

        comment.publicar();

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





const PB = new Courses({
    name:"Curso de ProgramacionBasica",
    isFree: true,
    teacher:"JuanDC"
})

const JS = new Courses({
    name:"Curso de JS",
    lang: "english",
    teacher:"JuanDC"
})
const POO = new Courses({
    name:"Curso de POO",
    teacher:"Evelia"
})


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




const juan = new FreeStudent({
    name: "Juan",
    username: "juanDC",
    email: "juanito@juanito.com",
    twitter:"fjuandc",
     escuela : [escuelaData] 
})

const miguelito = new BasicStudent({
    name: "miguel",
    username: "juanDC",
    email: "juanito@juanito.com",
    twitter:"fjuandc",
     escuela : [escuelaDesarrolloWeb] 
})

const freddy = new TeacherStudent({
    name: "freddy",
    username: "freddVV",
    email: "fredd@juanito.com",
    twitter:"freddddd",
     
})

/* const comment1 = new Coment({
    content: "commentContent",
    studentName : "pedro",
    studentRole : "Estudante",
   
})
comment1.meGusta= 25; */




