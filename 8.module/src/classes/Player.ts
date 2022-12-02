export class Player 
{
    constructor(public name:string, private age: number, readonly country: string){}

    play()
    {
        console.log(`Player name: ${this.name}, age: ${this.age}`);
    }
}