const lista1 = [
    500,   
    200,
    300,
    500
]

/* let sumaLista1=0;

for(let i=0; i<lista1.length; i++){

    sumaLista1= sumaLista1 + lista1[i];

} */

//EL metodo reduce suma los valores de un array

function promedio(lista){

    const fsumaLista = function (valorAcumulado=0, nuevoElemento){
        return valorAcumulado + nuevoElemento;
    
    } 
    const sumaLista = lista.reduce(fsumaLista)
    
    const value = document.getElementById("escribir");
    
    const promedioLista = sumaLista/lista.length
    
    value.innerText = "El resultado es "+ promedioLista;

}

promedio (lista1)




