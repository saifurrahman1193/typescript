import { Player } from "./classes/Player.js";
const mashrafi = new Player('Mashrafi', 35, 'Bangladesh');
let shakib;
shakib = new Player('Shakib', 35, 'Bangladesh');
shakib.name = 'Shakibul Islam';
const players = [];
console.log(players);
players.push(mashrafi);
players.push(shakib);
console.log(players);
console.log(shakib.play());