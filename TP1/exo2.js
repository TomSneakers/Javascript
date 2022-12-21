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
console.log(result)