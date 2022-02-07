const lista1 =[
    1,
    2,
    3,
    1,
    1,
    2,
    2,
    2,
    3,
    3,
    4,
    4,
    4,
    5,
    6,
    8
]


// Objeto vacio
const lista1Count={};


function calcularModa(lista){
        //EL metodo map ayuda a recorrer el array.

    /*NOta: Recorre el array y cuenta cuantas veces aparece un numero o elemento dentro de la lista, para esto*/
    lista.map(
        //La funcion recibe el elemento de cada una de las iteraciones
        function (elemento){
            /* si el elemento que estamos recibiendo en cada iteracion del array existe como un elemento dentro
            de nuestro objeto le sumamos 1*/
            if(lista1Count[elemento]){
            
            //sumarle 1  a cada una de las posiciones dentro de nuestros objetos cuando se repite

            lista1Count[elemento] +=1;
        }
        //Cuando aun no exista el elemento se crea y por defecto ha aparecido solo una vez.
        else{
            lista1Count[elemento]=1;
        }

        }
        
        );
        //https://www.freecodecamp.org/espanol/news/ordenar-arreglos-en-javascript-como-usar-el-metodo-sort/

   /* El método Object.entries() devuelve una matriz de arrays de pares propios
      de una propiedad enumerable [key, value] de un objeto dado */

      /*Se crea una nueva lista con arrays transformando el objeto lista1Count con el metodo Object.entries
      y ademas se ordena de menor a mayor con el metodo .sort teniendo encuenta la segunda posicion de cada
      array dentro de la lista que es el que indica la cantidad de veces que se repite cada elemento. 
      Finalmente la ultima posicion de listaArray va a ser la moda. */ 

    const lista1Array = Object.entries(lista1Count).sort(
        function (valorAcumulado, nuevoValor){

            
            return valorAcumulado[1]-nuevoValor[1]
        }

        

        
    );
    console.log(lista1Array)
    const moda = lista1Array[lista1Array.length-1];
    return moda;

}




     
    
    

    



     