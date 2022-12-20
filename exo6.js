// fonction qui permet selon le nom de la colone choisit d'extrait ses contenus
function GetValues(array, key){
    let values = [];
    for(let i = 0; i < array.length; i++){
        values.push(array[i][key]);
    }
    return values;
}

const array = [
    {name: "John", age: 25},
    {name: "Jane", age: 24},
    {name: "Jack", age: 26}
];

console.log(GetValues(array, "age"));