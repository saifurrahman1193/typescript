export class Player {
    constructor(name, age, country) {
        this.name = name;
        this.age = age;
        this.country = country;
    }
    play() {
        console.log(`Player name: ${this.name}, age: ${this.age}`);
    }
}
