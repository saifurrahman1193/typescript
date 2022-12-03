import {IsPlayer} from '../interfaces/IsPlayer.js'

export class Player implements IsPlayer 
{
    constructor(public name:string, public age: number, readonly country: string){}

    play()
    {
        console.log(`Player name: ${this.name}, age: ${this.age}`);
    }
}