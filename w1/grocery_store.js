var shopper = {
    name: "Nicki",
    age: 40,
    isAlive: true,
    groceryCart: ["milk", "cheese", "bread"],
    fullInfo: function() { 
        return this.name + " " + this.groceryCart;                
    }     
}
console.log(shopper.fullInfo())