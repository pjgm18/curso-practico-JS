
class Course {
    constructor({
      name,
      classes = [],
    }) {
      this._name = name;
      this.classes = classes;
    }
  
    get name() {
      return this._name;
    }
  
    set name(nuevoNombrecito) {
      if (nuevoNombrecito === "Curso Malito de Programación Básica") {
        console.error("Web... no");
      } else {
        this._name = nuevoNombrecito; 
      }
    }
  }
  
  const cursoProgBasica = new Course({
    name: "Curso Gratis de Programación Básica",
  });
  























/* 

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

    get name(){
        return this.name
    };
    set name(nuevoNombrecito) {
        if (nuevoNombrecito === "Curso Malito de Programación Básica") {
          console.error("Web... no");
        } else {
          this.name = nuevoNombrecito; 
        }
      }
    
}



const POO = new Courses(
    {
        name: "Programacion Orientada a Objetos",

    }
)
/* POO.name="pedro" */
/* console.log(POO.name) */ 