const lista1 =[
  1,6,5,1,4,3,2,8,2
    
    
    
]
// Ordena el array utilizando un ciclo For

/*function fOrderList(lista1){
    const aTot = lista1.length;
    let vAux;
    for (let i = 0; i < aTot; i++) {
            // |0|-|1|-|2|-|3|   
         for (let j = aTot-1; j >= i; j--) { 
            if (lista1[j-1] > lista1[j]) {
                vAux = lista1[j-1];
                lista1[j-1] = lista1[j];
                lista1[j] = vAux;
            }
         }
         alert(lista1)
    }
    return lista1.length;
}*/


 lista1.sort(function(a,b){
     return a-b;
 })

 


//Calcula el promedio y recibe como argumento una lista
function promedio(lista){

    const fsumaLista = function (valorAcumulado=0, nuevoElemento){
        return valorAcumulado + nuevoElemento;
    
    } 
    //EL metodo reduce suma los elementos de una lista
    const sumaLista = lista.reduce(fsumaLista)
    
    const promedioLista = sumaLista/lista.length
    
   return  promedioLista;

}



function calcularMediana(lista){

    const mitadLista1 = parseInt(lista.length/2) 
    console.log(mitadLista1)

    function esPar(numerito){
    
        //Calculando el modulo o residuo de una division para determinar si es par
    
        if(numerito % 2 === 0){
    
            return true;
        }
        else{
            return false;
        }
    
    }
    
    let mediana;
    
    if(esPar(lista.length)){
    
        const elemento1 = lista[mitadLista1-1]
        const elemento2 = lista[mitadLista1]
        
        const promedioELemento1y2 = promedio([elemento1,elemento2])
        mediana = promedioELemento1y2
        console.log("La mediana es "+ mediana)
    
    
    }
    else{
        mediana = lista[mitadLista1];
        console.log("la mediana es  "+mediana)
    
    }
    

}





