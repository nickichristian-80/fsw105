function capitilizeAndLowerCase(str) {
    var strUpper = str.toUpperCase();
    var strLower = str.toLowerCase();
    return strUpper + strLower;
}
console.log(capitilizeAndLowerCase("Hello"));


function findMiddleIndex(txt) {
   var middleOfString = Math.floor(txt.length/2);
   return middleOfString
}
console.log(findMiddleIndex("Hello"));


function returnFirstHalf(half){
    var sliceItem = half.slice(0, half.length/2)
    return sliceItem
}
console.log(returnFirstHalf("Hello World"));


function capitilizedAndLowerCase(goBack) {
var strUpper = goBack.slice(goBack.length/2).toLowerCase();
//strUpper = "hello world"
var strLower = goBack.slice(0, goBack.length/2).toUpperCase();
//strLower = "HELLO WORLD"
return strLower + strUpper;
        //HELLO WORLDhello world
}
console.log(capitilizedAndLowerCase("hello world"));





var fruit = ["banana", "apple", "orange", "watermelon"];
var vegetables = ["carrot", "tomato", "pepper", "lettuce"];

vegetables.pop()
//console.log("vegetables: ", vegetables)

fruit.shift()
//console.log("fruit: ", fruit)

let orangeIndex = fruit.indexOf("orange")
//console.log(orangeIndex)

fruit.push(orangeIndex)
//console.log("fruit: ", fruit)

let lengthOfVeg = vegetables.length;
//console.log(lengthOfVeg)

vegetables.push(lengthOfVeg)
//console.log(vegetables)

let food = fruit.concat(vegetables)
//console.log(food)

let newFood = food.splice(4, 2)
//console.log(food)

food.reverse()
//console.log(food)

 let all = food.toString()
 console.log(all)
