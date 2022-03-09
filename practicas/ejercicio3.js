const estudiantes = [];
estudiantes.push({
  name: "Camila",
  sexo: "femenino",
});
estudiantes.push({
    name: "a",
    sexo: "femenino",
  });
  estudiantes.push({
    name: "b",
    sexo: "femenino",
  });
  estudiantes.push({
    name: "Camila",
    sexo: "femenino",
  });
  estudiantes.push({
    name: "Camila",
    sexo: "femenino",
  });
  estudiantes.push({
    name: "Camila",
    sexo: "masculino",
  });
  estudiantes.push({
    name: "Camila",
    sexo: "masculino",
  });

  const sexoEstudiantes = estudiantes.map(
    function (personita){
    return personita.sexo;
});

console.log(sexoEstudiantes)






const lista1Count={};
function calcularModa(lista){
lista.map(
    function (elemento){
      
        if(lista1Count[elemento]){
        

        lista1Count[elemento] +=1;
    }
    else{
        lista1Count[elemento]=1;
    }

    }
    
    );
    console.log(lista1Count)
    const lista1Array = Object.entries(lista1Count)
    console.log(lista1Array)
    let porcM = parseInt((lista1Array[0][1]*100)/7)
    let porcF = parseInt((lista1Array[1][1]*100)/7) 


    console.log("porcentaje masculino "+porcM)

    console.log("porcentaje femenino "+porcF)

}
calcularModa(sexoEstudiantes)

function hola(){
    if (true){
        var global= 2;
    }
    console.log(global)
}

hola()








 

