import Ship from './ship.js';

const log = console.log;

export default function Gameboard(size=10) {
    //place ships at specific coordinates by calling Ship

    const board = [];

    for (let i = 0; i < size; i+=1) {
        const row = [];
        for (let i = 0; i < size; i+=1) {
            row.push('.');
        }
        board.push(row);
    }

    function putShipAtCoordinate(ship, coordinate) {
        
    }

    return {
        get boardString() {
            const str = board.reduce(function boardToString(acc, curr) {
                return acc.concat(curr.join(' ') + '\n');
            }, '')
            
            return str;
        }
    }
    
}