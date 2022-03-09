function calcularPrecioConDescuento(precio,descuento){


    const porcentajePrecioDescuento = 100 - descuento;
    const precioConDescuento = (precio * porcentajePrecioDescuento)/100

    // Escribe texto en HTML
    /*Se crea una constante resultP para asignarle el elemento <p> con id resultP y posteriormente
     usar un metodo .innerText para escribir en el HTML*/

   /* const resultP = document.getElementById("ResultP"); 
    resultP.innerText = "El precio con descuento es " + precioConDescuento*/
    return precioConDescuento 
}

const coupons = [
    {
        name: "JuanDC_es_Batman",
        discount: 15,
    },
    {
        name: "pero_no_le_digas_a_nadie",
        discount: 30,
    },
    {
        name: "es_un_secreto",
        discount: 25,
    },
];



 //Se crea la funcion que se usara con el boton de calcular descuento
    function onClickButtonPriceDiscount() {

       

    const inputPrice = document.getElementById("InputPrice");
    const priceValue = inputPrice.value;
   
    
    const inputCoupon = document.getElementById("InputCoupon");
    const couponValue = inputCoupon.value;
     /*Error first--La función array.includes() nos permite validar 
        si un elemento ha sido almacenado en el array.*/
        





//Encuentra un objeto en el array por una de sus propiedades

/*La funcion busca un objeto dentro del array por la propiedad nombre,
el parametro "coupon" se comporta como un indice para ir recorriendo los obejetos dentro
del array*/ 

//Expresion de funcion o funcion anonima
/*devuelve el valor del primer elemento del array que cumple la función de prueba proporcionada.
      En este caso devuelve el primer objeto que coincida con el nombre del cupon proporcionado por el 
       usuario.*/ 
       // https://www.youtube.com/watch?v=en5f0sYFJZE&ab_channel=hdeleon.net
       // coupon es un alias que representa los elemntos u objetos dentro del array
const isCouponValueValid = function (coupon) {
    
    return coupon.name === couponValue;
};

const userCoupon = coupons.find(isCouponValueValid);

/*Si el metodo .find no encuentra nada devuelve Undefined que es un valor falso,  enntonces
se niega este valor en el if con ! para que ejecute la sentencia y muestre el errror al usuario*/

if (!userCoupon) {
    alert("El cupón " + couponValue + " no es válido");
}
else{
    const descuento = userCoupon.discount;
    const precioConDescuento = calcularPrecioConDescuento(priceValue, descuento);



}




    }

