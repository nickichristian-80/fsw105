const readline = require ("readline-sync");
const userName = readline.question("What is your name? ");

const strWelcome = ("Welcome " + userName + " to the Escape Room, Good Luck.") ;
console.log(strWelcome);

let isPlayerAlive =true;
let hasKey =false;

while(isPlayerAlive === true) {
    const myGameMenuOptions = readline.question("Enter 1- Put my hand in the hole \nEnter 2- Let me find the key \nEnter 3- Opens the door!!");
    console.log(myGameMenuOptions);
{
if (myGameMenuOptions == 1)
    console.log("Sorry " + userName + " this hole is a trap! You are now DEAD!! Game Over");
     isPlayerAlive =false;
}

if (myGameMenuOptions == 2 && hasKey == false)
{
    console.log(`${userName}, Great job you have located the KEY!`);
    hasKey =true;
    isPlayerAlive =true;
}

else if (myGameMenuOptions == 3 && hasKey == false)
{
    console.log("Congratulations " + userName + " you have found the key and opened the door");
    hasKey =true;
    isPlayerAlive =true;
}

}

