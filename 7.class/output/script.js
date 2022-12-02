"use strict";
class Player {
    constructor(name, age, country) {
        this.name = name;
        this.age = age;
        this.country = country;
    }
    play() {
        console.log(`Player name: ${this.name}, age: ${this.age}`);
    }
}
const mashrafi = new Player('Mashrafi', 35, 'Bangladesh');
const shakib = new Player('Shakib', 35, 'Bangladesh');
shakib.name = 'Shakibul Islam';
const players = [];
console.log(players);
players.push(mashrafi);
players.push(shakib);
console.log(players);
