
//********************Codigo del Cuadrado*********************************
console.group("Cuadrados")

function perimetroCuadrado(lado){

    return lado * 4;

}


function areacuadrado(lado){
    return lado * lado;
}

console.groupEnd()

//********************Codigo del Triangulo*********************************

 console.group("Triangulos")

const LadoTriangulo1 = 6;
const LadoTriangulo2 = 6;
const baseTriangulo  = 4;


console.log(
    "Los lados del triangulo miden "
    + LadoTriangulo1 + "cm "
    + LadoTriangulo2 + "cm " 
    + baseTriangulo + "cm "
     ); 


function perimetrotriangulo (lado1, lado2,base){

    return lado1+lado2+base

}


 
function areatriangulo (base,altura){

    return (base*altura)/2;

}




console.groupEnd()

//********************Codigo del Circulo*********************************

console.group("Circulos")


function diametroCirculo(radio){

    return radio *2
}



//PI

const PI = Math.PI;

//Circunferencia

function perimetroCirculo (radio){
    const diametro = diametroCirculo(radio)
    return diametro * PI
    
} 


function areaCirculo (radio){
    
    return (radio* radio)* PI
    
} 

console.groupEnd()

//*****************Interaccion con el HTML*******************************

function calcularPerimetroCuadrado (){
   const input= document.getElementById("InputCuadrado");
   const value = input.value;

   const perimtetro = perimetroCuadrado(value);
   alert(perimtetro)

}
function calcularAreaCuadrado (){
    const input= document.getElementById("InputCuadrado");
    const value = input.value;

   const area = areacuadrado(value);
   alert(area);

}




function AlturaTriangulo(){

    const input1= document.getElementById("InputLado1");
    const input2= document.getElementById("InputLado2");
    const input3= document.getElementById("InputBase");

    const lado1 = input1.value
    const lado2 = input2.value
    const base = input3.value

    if(lado1 === lado2 && base > 0){
        var  altura = Math.sqrt(Math.pow(lado1,2)-((Math.pow(base,2)/4)))
         alert(altura)
         return altura

    }
    else 
        alert ("No es un triangulo isosceles")
 
}

function calcularAreaTriangulo (){
    const input1= document.getElementById("InputLado1");
    const input2= document.getElementById("InputLado2");
    const input3= document.getElementById("InputBase");

    const lado1 = input1.value
    const lado2 = input2.value
    const base = input3.value

    const altura = AlturaTriangulo()
    //console.log("altura"+altura)

   const area = areatriangulo(base, altura)
   alert(area);
   return area
  
}

function calcularPerimetroTriangulo(){

    const input1= document.getElementById("InputLado1");
    const input2= document.getElementById("InputLado2");
    const input3= document.getElementById("InputBase");

    const lado1 =parseInt(input1.value) 
    const lado2 = parseInt(input2.value) 
    const base = parseInt(input3.value) 

    const perimetro = perimetrotriangulo(lado1,lado2,base)
    
    alert(perimetro)
    

}
function calcularDiametroCirculo(){

    const input1 = document.getElementById("InputCirculo");
    const radio = input1.value

    diametro = diametroCirculo(radio);

    alert (diametro)

}

function calcularPerimetroCirculo(){
    const input1 = document.getElementById("InputCirculo");
    const radio = input1.value

    const perimetro = perimetroCirculo(radio);

    alert (perimetro)

}
function calcularAreaCirculo(){
    const input1 = document.getElementById("InputCirculo");
    const radio = input1.value

    const area = areaCirculo(radio);

    alert (area)

}



