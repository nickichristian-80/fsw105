//Broze Medal:
   //over age 18
var person = {
    name: "Bobby",
    age: 12,
}
if(person.age >= 18) {
    console.log("Bobby is allowed to go into movies")
} else {
    console.log("Bobby is not allowed to go into movies")
}

//if name begins with "B"
var person = {
    name: "Bobby",
    age: 12,
}
if(person.name ="B") {
    console.log("Bobby is allowed to go into movies")
} else {
    console.log("Bobby is not allowed to go into movies")
}

//both previous
var person = {
    name: "Bobby",
    age: 12,
}
if(person.age + person.name >= 18 +"B") {
    console.log("Bobby is allowed to go into movies")
} else {
    console.log("Bobby is not allowed to go into movies")
}


//Silver Medal:
var one = 1
    if("1"==="1"){console.log("strict")
    }else if("1"==="1")
    {console.log("abstract")
    }else{console.log("not equal at all")}


var one = 1
    if(one==="1"){console.log("strict")
    }else if("one"==1)
    {console.log("abstract")
    }else{console.log("not equal at all")}   


var one = 1
    if(one==="1"){console.log("strict")
    }else if(1===1)
    {console.log("abstract")
    }else{console.log("not equal at all")}  

 /* If the "else if" statement is changed to one of these your output is:
        ("one"==1) = Not equal at all
        (1===1) = abstract
    The "if" and "else is" statment has to be the same to get the "strict" output
        ("1"==="1") = Strict 
        
*/

//Gold Medal:
const val = "Dog";

if (typeof val === "string")
{
	console.log("Variable is a string");
}
else
{
	console.log("Variable is not a string");
}
//Output: Variable is a string

