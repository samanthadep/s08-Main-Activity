console.log("Hello World");

// Pokemon Game
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
            targetPokemon.faint();
        }
    },
    faint: function() {
        console.log("The pokemon fainted");
    }
};

class Pokemon {
    constructor(name, level, health, attack) {
        this.name = name;
        this.level = level;
        this.health = health;
        this.attack = attack;
    }

    tackle(target) {
        console.log(`${this.name} tackled ${target.name}`);
        target.health -= this.attack;
        console.log(`${target.name}'s health is now reduced to ${target.health}`);
        if (target.health <= 0) {
            target.faint();
        }
    }

    faint() {
        console.log(`${this.name} fainted`);
    }

    attackOpponent(opponent) {
        console.log(`${this.name} attacks ${opponent.name}!`);
        opponent.health -= this.attack;
        console.log(`${opponent.name}'s health reduced to ${opponent.health}`);
    }
}

let pikachu = new Pokemon("Pikachu", 3, 100, 50);
let rattata = new Pokemon("Rattata", 3, 100, 50);

pikachu.tackle(rattata);

// Trainer object
let trainerAsh = {
    name: "Ash",
    age: 10,
    pokemonTeam: [pikachu, rattata],
    greet: function() {
        console.log("Hello, my name is " + this.name + " and I am a Pokemon Trainer!");
    }
};

console.log(trainerAsh.name);
console.log(trainerAsh.age);
trainerAsh.greet();

let bulbasaur = new Pokemon("Bulbasaur", 3, 100, 50);
let charmander = new Pokemon("Charmander", 3, 100, 50);

bulbasaur.tackle(charmander);

// Trainer object
let trainerEli = {
    name: "Eli",
    age: 19,
    pokemonTeam: [pikachu, rattata],
    greet: function() {
        console.log("Hello, my name is " + this.name + " and I am a Pokemon Trainer!");
    },
    addPokemon: function(pokemon) {
        this.pokemonTeam.push(pokemon);
        console.log(pokemon.name + " added to " + this.name + "'s team!");
    }
};

let squirtle = new Pokemon('Squirtle', 3, 100, 50);

pikachu.attackOpponent(charmander);
charmander.attackOpponent(squirtle);

console.log(trainerEli.name);
console.log(trainerEli.age);
trainerEli.greet();

trainerEli.addPokemon(pikachu);
trainerEli.addPokemon(charmander);
trainerEli.addPokemon(squirtle);
