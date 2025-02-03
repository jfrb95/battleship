import Ship from './ship.js';

const log = console.log;

export default function Gameboard(size=10) {

    const board = new Map();
    for (let i = 0; i < 10; i+=1) {
        for (let j = 0; j < 10; j+=1) {
            board.set(`${i}${j}`, null);
        }
    }

    const missedShots = new Set();

    function coordsToKey(x, y) {
        let key;
        if (!y) {
            key = x;
        } else {
            key = [x, y];
        }

        return `${key[0]}${key[1]}`;
    }

    function putShipAtCoordinate(ship, coordinate) {
        const key = coordsToKey(...coordinate);
        board.set(key, ship);
    }

    return {
        receiveAttack(coord) {
            const key = coordsToKey(coord);

            if (board.get(key) === null) {
                missedShots.add(key);
                return 'miss';
            }
            
            board.get(key).hit();
            return 'hit';
        },
        allAreSunk() {
            //currently returns true when no ships are on the board
            //  might be an issue later
            let result = true;
            board.forEach(function shipIsSunk(value, key) {
                if (value !== null && !value.isSunk()) {
                    result = false;
                }
            })
            return result;
        },
        get board() {
            return board;
        },
        get missedShots() {
            return missedShots;
        },

        putShipAtCoordinate
    }
    
}