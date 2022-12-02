class Player 
{
    constructor(public name:string, private age: number, readonly country: string){}

    play()
    {
        console.log(`Player name: ${this.name}, age: ${this.age}`);
    }
}

const mashrafi = new Player('Mashrafi', 35, 'Bangladesh');
const shakib = new Player('Shakib', 35, 'Bangladesh');
shakib.name = 'Shakibul Islam';

const players : Player[] = [];

console.log(players);
players.push(mashrafi);
players.push(shakib);
console.log(players);
