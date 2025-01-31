import Gameboard from '../modules/gameboard.js';
import Ship from '../modules/ship.js';

const log = console.log;

it ('exists', () => {
    expect(Gameboard).toBeDefined();
})

describe (`receiveAttack: that takes a pair of coordinates, 
           determines whether or not the attack hit a ship 
           and then sends the hit() function to the correct 
           ship, or records the coordinates of the missed shot.`, 
    () => { 
    
    it ('exists', () => {  
        expect(Gameboard().receiveAttack).toBeDefined();
    })

    let game;

    beforeEach(() => {
        game = Gameboard();
    })

    it ('correctly hits a ship at 1, 1', () => {
        const ship11 = Ship(2);
        game.putShipAtCoordinate(ship11, [1, 1]);
        jest.spyOn(ship11, 'hit');

        expect(game.receiveAttack([1, 1])).toBe('hit');
        expect(ship11.hit).toHaveBeenCalledTimes(1);
    })

    it ('correctly hits a ship at 1, 2', () => {
        const ship12 = Ship(2);
        game.putShipAtCoordinate(ship12, [1, 2]);
        jest.spyOn(ship12, 'hit');

        expect(game.receiveAttack([1, 2])).toBe('hit');
        expect(ship12.hit).toHaveBeenCalledTimes(1);
    })

    it ('correctly misses a ship at 3, 4', () => {
        expect(game.receiveAttack([3, 4])).toBe('miss');
        expect(game.board.get('34')).toBe(null);
    })

    it ('correctly misses a ship at 0, 0', () => {
        expect(game.receiveAttack([0, 0])).toBe('miss');
        expect(game.board.get('00')).toBe(null);
    })

    it ('correctly records shot missed at 5, 2', () => {
        game.receiveAttack([5, 2]);
        expect(game.missedShots).toContainEqual('52');
    })

    it ('correctly records shot missed at 3, 4', () => {
        game.receiveAttack([3, 4]);
        expect(game.missedShots).toContainEqual('34');
    })
        
});

describe (`allAreSunk(): returns true if all ships on the board have
           taken their maximum damage, and false otherwise`,
    () => {
    
    it ('exists', () => {
        expect(Gameboard().allAreSunk).toBeDefined();
    })

    let game;

    beforeEach(() => {
        game = Gameboard();
    })

    it ('returns true with only 1 ship that is sunk', () => {
        const ship1 = Ship(2);
        game.putShipAtCoordinate(ship1, [4, 6]);
        ship1.hit();
        ship1.hit();
        expect(game.allAreSunk()).toBe(true);
    })

    it ('returns true with only 2 ships that are sunk', () => {
        const ship1 = Ship(2);
        game.putShipAtCoordinate(ship1, [4, 6]);
        ship1.hit();
        ship1.hit();
        const ship2 = Ship(1);
        game.putShipAtCoordinate(ship2, [5, 2]);
        ship2.hit();
        ship2.hit();
        expect(game.allAreSunk()).toBe(true);
    })

    it ('returns false with only 1 ship that is not sunk', () => {
        const ship1 = Ship(2);
        game.putShipAtCoordinate(ship1, [2, 1]);
        expect(game.allAreSunk()).toBe(false);
    })

    it ('returns false with only 1 ship that is sunk and 1 that is not sunk', () => {
        const ship1 = Ship(3);
        const ship2 = Ship(1);
        game.putShipAtCoordinate(ship1, [6, 3]);
        game.putShipAtCoordinate(ship2, [4, 3]);
        ship2.hit();
        expect(game.allAreSunk()).toBe(false);
    })
})