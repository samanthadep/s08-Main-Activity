console.log("Hello World");

let myPokemon = {
    name: 'Pikachu',
    level: 3,
    health: 100,
    attack: 50,
    tackle: function(targetPokemon) {
        console.log("The pokemon tackled the " + targetPokemon.name);
        targetPokemon.health -= this.attack;
        console.log(targetPokemon.name + "'s health is now reduced to " + targetPokemon.health);
        if (targetPokemon.health <= 0) {
            targetPokemon.health = 0;
            console.log(targetPokemon.name + " had fainted");
            this.level++;
            console.log(this.name + " leveled up to " + this.level + "!");
        }
    }
};

function Pokemon(name, level, health, attack) {
    this.name = name;
    this.level = level;
    this.health = health;
    this.attack = attack;
}

Pokemon.prototype.attackOpponent = function(opponent) {
    console.log(`${this.name} attacks ${opponent.name}!`);
    opponent.health -= this.attack;
    console.log(`${opponent.name}'s health reduced to ${opponent.health}`);
};

let pikachu1 = new Pokemon('Pikachu', 3, 100, 50);
let charmander1 = new Pokemon('Charmander', 3, 100, 50);
let squirtle1 = new Pokemon('Squirtle', 3, 100, 50);

pikachu1.attackOpponent(charmander1);
charmander1.attackOpponent(squirtle1);

let trainer1 = {
    name: 'Sam',
    age: 19,
    region: 'Paldea',
    speak: function(target) {
        console.log(`I challenge you ${target.name}`);
    },
    pick: function(pokemon) {
        console.log(`${this.name}: I choose ${pokemon.name}`);
    }
};

let trainer2 = {
    name: 'Eli',
    age: 23,
    region: 'Kanto',
    speak: function(target) {
        console.log(`I accept your challenge ${target.name}`);
    },
    pick: function(pokemon) {
        console.log(`${this.name}: I choose ${pokemon.name}`);
    }
};

function MyPokemon(name, health, attack, level, exp, isFaint) {
    this.name = name;
    this.health = 2 * health;
    this.attack = attack;
    this.level = level;
    this.exp = exp;
    this.isFaint = false;

    this.tackle = function(target) {
        if (!this.isFaint) {
            console.log(`${this.name} used tackle`);
            target.health -= this.attack;
            if (target.health <= 0) {
                target.health = 0;
                console.log(`${target.name}'s health is reduced to ${target.health}`);
                console.log(`${target.name} had fainted`);
                target.isFaint = true;
                console.log(`${trainer1.name} has defeated ${trainer2.name}`);
                this.level++;
                console.log(`${this.name} leveled up to ${this.level}!`);
            }
            if (this.level === 16) {
                let initialName = this.name;
                this.name = 'Marshtomp';
                console.log(`${initialName} has evolved to ${this.name}`);
            }
        }
    };
}

const Pikachu = new MyPokemon('Pikachu', 100, 50, 3, 0);
const Charmander = new MyPokemon('Charmander', 100, 50, 3, 0);

// Dialogue
trainer1.speak(trainer2);
trainer2.speak(trainer1);
trainer1.pick(Pikachu);
trainer2.pick(Charmander);

// Battle
while (!Pikachu.isFaint && !Charmander.isFaint) {
    Charmander.tackle(Pikachu);
    if (!Pikachu.isFaint) {
        Pikachu.tackle(Charmander);
    }
}


