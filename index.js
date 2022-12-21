/** console.log ("hello world");
const square= number =>  number*number
const number= square(2)
console.log(number)
const myArray= [50,30,100];
/**
 *  @param {*} numbers : an array of number
 * 
const myArray1= [10,30,100,500]
function getMaxNumber(numbers) {
    let max = numbers [0]; 
    for (let i = 0; i< numbers.length; i++) {
            if(numbers[i]> max) {
                max = numbers[i];
            }
    }
    return max;
} 
const result = getMaxNumber(myArray1)


console.log (result)
//console.log (Math.max(myArray));
*/

//TP1
//EXO1
/**function sum(numberOne, numberTwo) {
    // retourne la somme des deux paramètres
   return numberOne + numberTwo;
 }
 
 
 let somme = sum(50, 10);
 
 console.log(somme); // Affiche 60
 
 //EXO2
 const myArray1= [10,30,100,500]
function getMaxNumber(numbers) {
    let max = numbers [0]; 
    for (let i = 0; i< numbers.length; i++) {
            if(numbers[i]> max) {
                max = numbers[i];
            }
    }
    return max;
} 
const result = getMaxNumber(myArray1)
*/
const fs = require ('fs')
fs.readFile('test.txt','utf-8',(err,data) => {
    if (err) {
        console.log(err)
        return
    }
    console.log(data)
})