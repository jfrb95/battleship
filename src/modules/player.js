import Gameboard from "./gameboard.js";

//players are human or computer
export default function Player() {
    const gameboard = Gameboard();

    return {
        gameboard,
    }
}