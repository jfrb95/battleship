import Gameboard from "./gameboard.js";

const log = console.log;

//players are human or computer
export default function Player(type='human') {
    const gameboard = Gameboard();

    const unexploredCoords = [];
    for (let i = 0; i < 10; i+=1) {
        for (let j = 0; j < 10; j+=1) {
            unexploredCoords.push(`${i}${j}`);
        }
    }

    function randomKeyChoice() {
        const randomIndex = Math.floor(Math.random() * unexploredCoords.length);
        const key = unexploredCoords[randomIndex];
        unexploredCoords.splice(randomIndex, 1);
        return key
    }

    return {
        randomKeyChoice,
        get gameboard() {
            return gameboard;
        },
        get type() {
            return type;
        }
    }
}