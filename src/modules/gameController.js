import Player from "./player.js";
import Ship from "./ship.js";

const log = console.log;

export default function GameController() {
    
    //game set up
    let turnCount = 0;

    const player1 = Player();
    const player2 = Player();

    let activePlayerIndex = 0;
    let activePlayer = player1;
    const players = [player1, player2];

    (function _tempInitPlayers() {
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

    //Controller functionality
    function playRound(key) {
        //log(activePlayerIndex);
        const hitOrMiss = activePlayer.gameboard.receiveAttack(key);
        
        const resultData = {
            activePlayerIndex,
            key,
            hitOrMiss,
        }

        publish(resultData);
        
        turnCount++;
        switchPlayer();
    }

    function switchPlayer() {
        activePlayerIndex = turnCount % 2;
        activePlayer = players[activePlayerIndex];
    }

    //sub/pub
    const subscribers = [];
    function subscribe(callback) {
        subscribers.push(callback);
    };
    function unsubscribe(callback) {
        subscribers = subscribers.filter((item) => item !== callback);
    };
    function publish(data) {
        for (const subscriberFunction of subscribers) {
            subscriberFunction(data);
        }
    };

    return {
        subscribe,
        unsubscribe,
        publish,
        playRound,
        get activePlayerIndex() {
            return activePlayerIndex;
        }
    }
}