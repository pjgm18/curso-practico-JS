/*Calcular monto de interes a pagar de un prestamo con interes simple y compuesto

capital
tasaInteres
plazo

InteresSimple = capital* tasaInteres * plazo
intresCompuesto = capital * (((1+tasaInteres)^plazo)-1)



*/

function interesSimple(capital,tasaInteres,plazo) {

    const intereses = (capital * tasaInteres * plazo)
    console.log(intereses)

    return intereses
    
}

function interesCompuesto(capital, tasaInteres,plazo) {
    const A= 1+ tasaInteres;
    const intereses = capital * ((Math.pow(A,plazo))-1)
    
    return intereses
    
}




 


