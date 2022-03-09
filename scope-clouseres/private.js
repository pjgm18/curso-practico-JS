const person= ()=>{
    let nombre ="name";

    return {
        getName:()=>{
            return (nombre);
        },
        setName:(nom)=>{
            nombre = nom;
        },
        
};
};

newPerson = person();
console.log(newPerson.getName())
newPerson.setName("pedro guerrero")
console.log(newPerson.getName())

