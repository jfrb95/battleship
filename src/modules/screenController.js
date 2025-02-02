import Gameboard from "./gameboard.js";
import Player from "./player.js";
import Ship from "./ship.js";
import { displayBoard, displaySquare } from "./displayElements.js";

const log = console.log;

export default function ScreenController() {

    const boardContainer = document.querySelector('#board-container');

    const player1 = Player();
    const player2 = Player();

    (function tempInitPlayers() {
        const ship11 = Ship(2);
        const ship12 = Ship(3);
        const ship13 = Ship(4);

        player1.gameboard.putShipAtCoordinate(ship11, [3, 4]);
        player1.gameboard.putShipAtCoordinate(ship11, [3, 5]);
        player1.gameboard.putShipAtCoordinate(ship12, [1, 2]);
        player1.gameboard.putShipAtCoordinate(ship12, [2, 2]);
        player1.gameboard.putShipAtCoordinate(ship12, [3, 2]);
        player1.gameboard.putShipAtCoordinate(ship13, [6, 7]);
        player1.gameboard.putShipAtCoordinate(ship13, [7, 7]);
        player1.gameboard.putShipAtCoordinate(ship13, [8, 7]);
        player1.gameboard.putShipAtCoordinate(ship13, [9, 7]);

        const ship21 = Ship(2);
        const ship22 = Ship(3);
        const ship23 = Ship(4);

        player2.gameboard.putShipAtCoordinate(ship21, [4, 3]);
        player2.gameboard.putShipAtCoordinate(ship21, [5, 3]);
        player2.gameboard.putShipAtCoordinate(ship22, [2, 1]);
        player2.gameboard.putShipAtCoordinate(ship22, [2, 2]);
        player2.gameboard.putShipAtCoordinate(ship22, [2, 3]);
        player2.gameboard.putShipAtCoordinate(ship23, [7, 6]);
        player2.gameboard.putShipAtCoordinate(ship23, [7, 7]);
        player2.gameboard.putShipAtCoordinate(ship23, [7, 8]);
        player2.gameboard.putShipAtCoordinate(ship23, [7, 9]);
    }());

    const player1BoardDisplay = displayBoard().render(boardContainer);
    const player2BoardDisplay = displayBoard().render(boardContainer);
}