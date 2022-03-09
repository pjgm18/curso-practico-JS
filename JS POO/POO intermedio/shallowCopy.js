const obj1= {
    a: "A",
    b:"B"

}

const obj2={}

for(prop in obj1){
    obj2[prop]= obj1[prop]
}