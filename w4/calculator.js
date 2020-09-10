var readlineSync = require('readline-sync');


var firstNum = readlineSync.questionInt("Please enter first number: "); 
var secondNum = readlineSync.questionInt("Please enter second number: ");
var operation = readlineSync.question("What operation whould you like? (enter add, subtract, multiply, divide, or quit) ");

//Set up calculator functions
function add(num1, num2) {
    return "Adding " + num1 + " and " + num2 + " equals: " + (num1 + num2);
}

function sub(num1, num2) {
    return "Subtracting " + num1 + " from " + num2 + " equals: " + (num1 - num2);
}

function mul(num1, num2) {
    return "Multiplying " + num1 + " and " + num2 + " equals: " + (num1 * num2);
}

function div(num1, num2) {
    return "Dividing " + num1 + " by " + num2 + " equals: " + (num1 / num2);
}

// Display results

        if (operation == "add") {
            console.log(add(firstNum, secondNum))
        }
        else if (operation == "subtract") {
            console.log(sub(firstNum, secondNum))
        }
        else if (operation == "multiply") {
            console.log(mul(firstNum, secondNum))
        }
        else if (operation == "divide") {
            console.log(div(firstNum, secondNum))
        }
        else if (operation == "quit") {
            console.log("Thank you, Goodbye");
        }