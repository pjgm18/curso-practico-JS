const local =()=>{
    let hello ="hola"
console.log(hello)
}


local()
console.log(hello)






var scope = "hola world"

const  functionScope = ()=>{

    var scope = "i am local"
    var local = "mami"

    if(true){
        const funcion=()=>{
            console.log(local)
            
        }
        console.log(funcion());

    }

    const func=()=>{
        return scope
    }
    console.log(func());

}

functionScope();
