//Section A
//Question 1
function fiveAndGreaterOnly(arr) {
    const result = arr.filter(function(num) {
        if (num >=  5 ) {
             return num
         }
     })
     return result
 }
 console.log(fiveAndGreaterOnly([3, 6, 8, 2,]));
 
 
//Question 2
 function evensOnly(arr) {
     const result = arr.filter(function (num) {
         if (num % 2 == 0) {
             return num
         }
     })
     return result
 }
 console.log(evensOnly([3, 6, 8, 2,]));
 
 
 //Section B
 //Question 1 
 function doubleNumbers(arr) {
     const result = arr.map(function(num) {
         return num + num
     })
     return result
 }
 console.log(doubleNumbers([2, 5, 100]));
 
 
//Question 2 
 function stringItUp(arr) {
     const result = arr.map(function (str) {
         return str.toString()
     })
     return result
 }
 console.log(stringItUp([2, 5, 100]));
 
 
//Question 3
 function capitalizeNames(arr) {
     const result = arr.map(function (str) {
         let extract = str.substring(1)
         return str[0].toUpperCase().concat(extract.toLowerCase())
     })
     return result
 }
 console.log(capitalizeNames(['john', 'JACOB', 'jinGleHeimer', 'schmidt']));
 
 
//Extra Credit 1
 function namesOnly(arr) {
     const result = arr.map(function (toStr) {
         return toStr.name
     })
     return result
 }
 console.log(namesOnly([
     {name: 'Angelina Jolie', age: 80}, 
     {name: 'Eric Jones', age: 2}, 
     {name: 'Paris  Hilton', age: 5}, 
     {name: 'Kayne West', age: 16}, 
     {name: 'Bob Ziroll', age: 100}]));
 
 
//Extra Credit 2
 function makeStrings(arr) {
     const result = arr.map(function (str) {
         if (str.age >= 18) {
             return `${str.name} can go to the Matrix`
         } else {
             return `${str.name} is under age!!`
         }
     })
     return result
 }
 console.log(makeStrings([
     { name: 'Angelina Jolie', age: 80 },
     { name: 'Eric Jones', age: 2 },
     { name: 'Paris  Hilton', age: 5 },
     { name: 'Kayne West', age: 16 },
     { name: 'Bob Ziroll', age: 100 }]));
 
//Section C 
//Question 1
 function total(arr){
     const result = arr.reduce(function (totalNum, totalTwo) {
         return totalNum = totalNum + totalTwo
     })
     return result
 }
 console.log(total([1, 2, 3,]));
 
     
//Question 2
 function stringConcat(arr) {
     const result = arr.reduce(function (final, str) {
         final = final + str.toString()
             return final
         })
     return result
 }
 console.log(stringConcat([1, 2, 3,]));
 
 
//Qusetion 3
 function totalVotes(arr) {
     const result = arr.reduce(function (final, voter) {
         if (voter.voted === true) {
             final++
         }
         return final
     }, 0) 
     return result
 }
 let voters = [
     { name: 'Bob', age: 30, voted: true},
     { name: 'Jake', age: 32, voted: true },
     { name: 'Kate', age: 25, voted: false },
     { name: 'Sam', age: 20, voted: false },
     { name: 'Phil', age: 21, voted: true },
     { name: 'Ed', age: 55, voted: true },
     { name: 'Tami', age: 54, voted: true },
     { name: 'Mary', age: 31, voted: false },
     { name: 'Becky', age: 43, voted: false },
     { name: 'Joey', age: 41, voted: true },
     { name: 'Jeff', age: 30, voted: true },
     { name: 'Zack', age: 19, voted: false }
 ];
 console.log(totalVotes(voters));
 
 
//Extra Credit 1
 function shoppingSpree(arr) {
     const result = arr.reduce(function (final, wishlistItem){
         final += wishlistItem.price
         return final
 }, 0)                                                                             
     return result
 }
 let wishlist = [
     { title: 'Tesla Model 5', price: 90000 },
     { title: '4 carat diamond', price: 45000 },
     { title: 'Fancy Hacky Sack', price: 5 },
     { title: 'Gold fidgit spinner', price: 2000 },
     { title: 'A second Tesla Model 5', price: 90000 },
 ];
 console.log(shoppingSpree(wishlist));
 
 
//Extra Credit 2
 function flatten(arr){
     const result = arr.reduce(function (final, array) {
          final += array.concat('')
             return final
     }, [])
     return result
 }
 let arrays = [
     ['1', '2', '3'],
     [true],
     [4, 5, 6]
 ];
 console.log(flatten(arrays));
 
 
//Section D
//Question 1
 function leastToGreatest(arr) {
     const result = arr.sort(function (a, b){
     return a - b
     })
     return result
 }
 console.log(leastToGreatest([1, 3, 5, 2, 90, 20]));
 
 
//Question 2
 function greatestToLeast(arr) {
     const result = arr.sort(function (a, b) {
         return b - a
     })
     return result
 }
 console.log(greatestToLeast([1, 3, 5, 2, 90, 20]));
 
 
//Question 3
 function lengthSort(arr) {
     const result = arr.sort(function (a, b) {
         return a.length - b.length 
     })
     return result
 }
 console.log(lengthSort(['dog', 'wolf', 'by', 'family', 'eaten']));
 
 
//Extra Credit 
 function alphabetical(arr) {
     const result = arr.sort()
         return result
 }
 console.log(alphabetical(['dog', 'wolf', 'by', 'family', 'eaten']));