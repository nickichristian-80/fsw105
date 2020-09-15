const readline = require ('readline-sync');


const playerName = readline.question('What is your name? ');
let playerCharacter = {
    name: playerName,
    hp: 20,
    minAttackPower: 1,
    maxAttackPower: 5,
    inventory: [],
    attack: function() {
        return Math.floor(Math.random() * (this.maxAttackPower - this.minAttackPower + 1)) + this.minAttackPower;
    },
    runAway: function() {
        return Math.floor(Math.random() * (2 - 1 + 1)) + 1;
    },
    rest: function() {
        return Math.floor(Math.random() * (10 - 3 + 1)) + 3;
    }
};

console.log(`Welcome to The Happy Forest, ${playerCharacter.name}.`)
console.log("Here you will continue walking down the path fighting Happiness, and collecting Magestic Items.")
console.log("Here are a list of commands you can use: 'w' to walk down the path, 'a' to fight any magic creature, 'r' to runaway from any magic creature, 'p' to view your hp and inventory, and 'q' to quit the game.")

//Creatures in game
let creaturesInGame = [];
let creatureInRoom = [];
let isEncounter = false;

//items
let items = ["Gummy Bear", "Sundae", "Unicorn Horn"];

let awardRandomItem = function() {
    return playerCharacter.inventory.push(items[Math.floor(Math.random() * items.length)]);
};


//new creatrures with stats
class CreatureCreator {
    constructor(name, hp, minAttackPower, maxAttackPower) {
        this.name = name,
        this.hp = hp,
        this.minAttackPower = minAttackPower,
        this.maxAttackPower = maxAttackPower;
    }
    attack() {
        return Math.floor(Math.random() * (this.maxAttackPower - this.minAttackPower + 1)) + this.minAttackPower;
    }
}
;

//creating monsters and putting them in the game
creaturesInGame.push(new CreatureCreator("Teddy Bear", 5, 1, 3));
creaturesInGame.push(new CreatureCreator("Box of Puppies", 8, 1, 5));
creaturesInGame.push(new CreatureCreator("Magestic Unicorn", 10, 1, 7)) 

//random encounter generator
let creatureEncounterGen = function() {
    targetNumber = Math.floor(Math.random() * (3 - 1 + 1)) + 1;
    if(targetNumber == 3) {
        isEncounter = true;
         return creatureInRoom.push(creaturesInGame[Math.floor(Math.random() * creaturesInGame.length)]);
    };
};

//path info
let walking = "You walk further down the path.";




//game loop
while(playerCharacter.hp > 0) {
    playerCommands = readline.question("What would you like to do: ");
    if(playerCommands == "w" && isEncounter == true) {
        console.log("You can't do that right now, you are being attacked");
    } if(playerCommands == "w" && isEncounter == false) {
        console.log(walking);
        creatureEncounterGen();
        if(isEncounter == true) {
            console.log(`A ${creatureInRoom[0].name} is running towards you!`);
        };
    } if(playerCommands == "r" && isEncounter == true) {
        if(playerCharacter.runAway() == 2) {
            console.log(`You ran away from the ${creatureInRoom[0].name}`);
            creatureInRoom = [];
            isEncounter = false;
        } else {
            console.log("You were not able to run away.");
            playerCharacter.hp -= creatureInRoom[0].attack();
            console.log(`The ${creatureInRoom[0].name} attacks you. Your HP is now ${playerCharacter.hp}.`);
        };
    } if(playerCommands == "a" && isEncounter == false) {
        console.log("There is nothing to attack");
    } if(playerCommands == "a" && isEncounter == true) {
        console.log(`You attack the ${creatureInRoom[0].name}.`);
        creatureInRoom[0].hp -= playerCharacter.attack();
        if(creatureInRoom[0].hp <= 0) {
            console.log(`You killed the ${creatureInRoom[0].name}!`);
            awardRandomItem()
            console.log(`You found a ${playerCharacter.inventory[playerCharacter.inventory.length -1]} on the ${creatureInRoom[0].name}.`);
            console.log(`The ${playerCharacter.inventory[playerCharacter.inventory.length -1]} has been added to your inventory.`);
            creatureInRoom = [];
            isEncounter = false;
            if(playerCharacter.hp < 20) {
                playerCharacter.hp += playerCharacter.rest();
                if(playerCharacter.hp > 20) {
                    playerCharacter.hp = 12;
                };
            };
            console.log(`You eat cake after the fight. Your current HP is now ${playerCharacter.hp}.`);
        } else if (creatureInRoom[0].hp > 0) {
            playerCharacter.hp -= creatureInRoom[0].attack();
            console.log(`The ${creatureInRoom[0].name} attacks you. Your HP is now ${playerCharacter.hp}.`);
        };
    } if (playerCommands == "q") {
        break;
    } if(playerCommands == "p" || playerCommands == "print") {
        console.log(`Name: ${[playerCharacter.name]}\nCurrent HP: ${playerCharacter.hp}\nInventory items: ${playerCharacter.inventory}`);
    };
};

if(playerCharacter.hp <= 0) {
    console.log(`${playerCharacter.name}, DEATH BY JOY OVERLOAD! \nLets see all the things you collected. ${playerCharacter.inventory}.\nConratulations, hope you come back soon!`);
};