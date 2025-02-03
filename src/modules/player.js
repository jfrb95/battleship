import Gameboard from "./gameboard.js";

const log = console.log;

//players are human or computer
export default function Player(type='human') {
    const gameboard = Gameboard();

    return {
        get gameboard() {
            return gameboard;
        },
    }
}