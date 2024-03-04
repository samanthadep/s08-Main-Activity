console.log("Hello World");

let trainer = {
    name: 'Ash',
    age: 19,
    region: 'Pade',
    speak: function(target){
        console.log(`I challenge you ${target.name}`);
    },
    pick: function(pokemon){
        console.log(`${this.name}: I choose ${pokemon.name}`);
    }
};

let trainer2 = {
    name: 'Eli',
    age: 23,
    region: 'Kento',
    speak: function(target){
        console.log(`I accept your challenge ${target.name}`);
    },
    pick: function(pokemon){
        console.log(`${this.name}: I choose ${pokemon.name}`);
    }
};

function Pokemon(name, health, attack, level, exp, isFaint){
    this.name = name;
    this.health = 2 * health;
    this.attack = attack;
    this.level = level;
    this.exp = exp;
    this.isFaint = false;

    // Attack method
    this.tackle = function(target){
        if(!this.isFaint){
            console.log(`${this.name} used tackle`);
            target.health -= this.attack;
            if(target.health <= 0){
                target.health = 0;
                console.log(`${target.name} had fainted`);
                target.isFaint = true;
                console.log(`${trainer.name} has defeated ${trainer2.name}`);
                this.level++;
                console.log(`${this.name} leveled up to ${this.level}!`);
            }
        }
        if(this.level === 16){
            let initialName = this.name;
            this.name = 'Marshtomp';
            console.log(`${initialName} has evolved to ${this.name}`);
        }
    };
}

// Pokémon Information
const Pikachu = new Pokemon('Pikachu', 60, 45, 10, 0);
const Charmander = new Pokemon('Charmander', 50, 55, 15, 0);

// Dialogue
trainer.speak(trainer2);
trainer2.speak(trainer);
trainer.pick(Pikachu);
trainer2.pick(Charmander);

// Battle
while(!Pikachu.isFaint && !Charmander.isFaint){
    Charmander.tackle(Pikachu);
    if(!Pikachu.isFaint){
        Pikachu.tackle(Charmander);
    }
}

