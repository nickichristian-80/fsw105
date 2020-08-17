//a function that accepts two numbers as parameters, and returns the sum.
function sum(num1, num2){
    return num1 + num2
}
var result = sum(10, 20)
console.log(result)


//a function that accepts three numbers as parameters, and returns the largest of those numbers

function maxOfThree(num1, num2, num3){
    if ((num1 >=num2)  && (num1 >= num3)){
        return num1;
    } else if ((num2 >= num1) && (num2 >= num3)){
        return num2;
    } else {
        return num3;
    }    
}

console.log(maxOfThree(276,593,497))


//a function that accepts one number as a parameter, and returns whether that number is even or odd
function evenOdd(number) {
    let reminder = number % 2;
    if (reminder == 0) {
        console.log("even");
    } else if (reminder == Math.round(reminder)) {
        console.log("odd");
    } else {
        console.log("invalid");
    }
}
 
evenOdd(13);


/*a function that accepts a string as a parameter. If the length of the string is less than or equal to twenty 
characters long, return the string concatenated with itself (string + string). If the string is more than 
twenty characters long, return the first half of the string.*/