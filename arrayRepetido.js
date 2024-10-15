function repetidos(array){
    let arrayRep=[];
    let arrayNumUnicos=[];
    for (let i = 0; i < array.length; i++) {
        if(!arrayNumUnicos.includes(array[i])){ 
            /*Al principio no tenía el array de elementos únicos y estaba usando el arrayRep para hacer esta comparación, sin darme cuenta que ese
            array contenía el número de repeticiones, no el elemento que se repetía. Me ha costado entender por qué no funcionaba*/
            arrayNumUnicos.push(array[i]);
            arrayRep.push(array.filter(elemento => elemento == array[i]).length);
        }
    }
    return arrayRep;
}
let array=[5,5,2,5,7];
console.log(repetidos(array));