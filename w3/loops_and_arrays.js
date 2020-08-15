var peopleWhoWantToSeeMadMaxFuryRoad = [
{
    name: "Mike",
    age: 12,
    gender: "male"
},{
    name: "Madeline",
    age: 80,
    gender: "female"
},{
    name:"Cheryl",
    age: 22,
    gender: "female"
},{
    name: "Sam",
    age: 30,
    gender: "male" 
},{
    name: "Suzy",
    age: 4,
    gender: "female"
}
];

function isOldEnough() {
    for (var i = 0; i < peopleWhoWantToSeeMadMaxFuryRoad.length; i++) {
        if (peopleWhoWantToSeeMadMaxFuryRoad[i].age >= 18){
            console.log("Old Enough");
        }
        else if(peopleWhoWantToSeeMadMaxFuryRoad[i].age > 0 && peopleWhoWantToSeeMadMaxFuryRoad[i].age < 18) {
            console.log("Not Old Enough")
        }
    }
}
isOldEnough();
console.log("----");


//Log to the console a personalized message
function oldEnoughName(){
    for (var i = 0; i < peopleWhoWantToSeeMadMaxFuryRoad.length; i++){
        if (peopleWhoWantToSeeMadMaxFuryRoad[i].age >= 18){
            console.log(peopleWhoWantToSeeMadMaxFuryRoad[i].name + " is of age to see Mad Max.")
        }
        else if(peopleWhoWantToSeeMadMaxFuryRoad[i].age < 18){
            console.log(peopleWhoWantToSeeMadMaxFuryRoad[i].name + " is NOT of age to see Mad Max")
        }
    }
}
oldEnoughName();
console.log("----");



//Check to see if the movie goer is a male or female for an even more personalized message
function isOldEnoughWithName() {
    for (var i = 0; i < peopleWhoWantToSeeMadMaxFuryRoad.length; i++) {
        if (peopleWhoWantToSeeMadMaxFuryRoad[i].gender == "male"){
            pronoun = "He's";
        }
        else if (peopleWhoWantToSeeMadMaxFuryRoad[i].gender == "female"){
            pronoun = "She's";
        };
        if (peopleWhoWantToSeeMadMaxFuryRoad[i].age >= 18){
            console.log(peopleWhoWantToSeeMadMaxFuryRoad[i].name + " is old enough to see Mad Max." + " " + pronoun + " allowed into the movies.")
        }
        else if(peopleWhoWantToSeeMadMaxFuryRoad[i].age < 18){
            console.log(peopleWhoWantToSeeMadMaxFuryRoad[i].name + " is to young to see Mad Max." + " " + pronoun + " NOT allowed into the movies.")
        };
    }
}
isOldEnoughWithName();
console.log("----");



//Create a for loop that iterates through 101 numbers (from 0 - 100). If the current iteration is an Odd number, print "Odd" to the console, otherwise print "Even".
for (var i = 0; i < 101; i++){
    if (i % 2 == 0) {
        console.log("The number is even.")
    }else{
        console.log("The number is odd.")
    }
}

console.log("----");