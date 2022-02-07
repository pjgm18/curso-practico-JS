//Helpers
function calcularMediaAritmetica(lista){

    const sumaLista =lista.reduce(
        function (valorAcumulado, nuevoValor){
            return valorAcumulado + nuevoValor
        }
    )

    const promedioLista= sumaLista/lista.length
    return promedioLista

}
//Calculadora Mediana


function medianasalarios(lista) {

    const mitad = parseInt(lista.length/2)
    console.log( "La mitad de la lista es "+ mitad)

    if(esPar(lista.length)){

        const personitaMitad1= lista[mitad]
        const personitaMitad2= lista[mitad-1]

        const mediana = calcularMediaAritmetica([personitaMitad1, personitaMitad2])
        console.log( "Es par")
        return mediana;
    
    }
    else {
        const personitaMitad = lista[mitad]
        console.log( "no es par")
        return personitaMitad
        
    }
    
}


function esPar(numerito) {

   return (numerito % 2 === 0);
}


//Mediana General
const salariosCol= colombia.map(
    function (personita){
    return personita.salary;
});

const salariosOrdenados = salariosCol.sort(
    function (salaryA, salaryB) {

        return salaryA - salaryB;
        
    }
);
const medianaGeneralCol= medianasalarios(salariosOrdenados)


//Mediana del topo 10%
const spliceStart = (salariosOrdenados.length * 0.9 );
const spliceCount= salariosOrdenados.length - spliceStart;

const salariosTop10 = salariosOrdenados.splice(
    spliceStart,
    spliceCount
)

const medianaTop10Col = medianasalarios(salariosTop10)




console.log({
    medianaGeneralCol,
    medianaTop10Col,
})