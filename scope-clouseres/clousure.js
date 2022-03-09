function person(){
    let contador = 0

    return function incrementar() {
        
        contador = contador +1 ;
        console.log (contador)
        return contador;
    }

}

const contador1 = person();

contador1();
contador1();
contador1();
contador1();

//https://platzi.com/blog/la-diferencia-entre-let-y-var/
const lista =[];
function contador(){
   
    for(var i=0; i<3; i++){
    
    setTimeout(()=>{
         lista[i]= i;
        console.log(lista)
    },1000)
    
}
}
console.log(i)

contador()



const fruits = () => {
     var fruit = 'apple';
      console.log(fruit);
     }