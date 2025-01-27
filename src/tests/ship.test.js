import Ship from "../modules/ship.js";

it ('exists', () => {
    expect(Ship).toBeDefined();
})

it ('has hit function', () => {
    expect(Ship().hit).toBeDefined();
})


describe ('Ship hit function: increments ship.hits', () => {
    const patrolBoat = Ship(2);

    it ('exists', () => {
        expect(patrolBoat.hit).toBeDefined();
    })

    it ('increases hits from 0 to 1', () => {
        patrolBoat.hit();
        expect(patrolBoat.hits).toBe(1);
    })

    it ('increases hits from 1 to 2', () => {
        patrolBoat.hit();
        expect(patrolBoat.hits).toBe(2);
    })
})

describe ('Ship isSunk function: ship sinks when hits === length', () => {
    const patrolBoat = Ship(2);
    
    
    it ('exists', () => {
        expect(patrolBoat.isSunk).toBeDefined();
    })

    it ('returns null when length is 0', () => {
        const noLengthShip = Ship(0);
        expect(noLengthShip.isSunk()).toBe(null);
    })

    it ('returns true when hits and length are 1', () => {
        const hits1Length1 = Ship(1);
        hits1Length1.hit();
        expect(hits1Length1.isSunk()).toBe(true);
    })

    it ('returns false when hits === 0 and length === 1', () => {
        const hits0Length1 = Ship(1);
        expect(hits0Length1.isSunk()).toBe(false);
    })

    it ('returns true when hits === 2 and length === 2', () => {
        const hits2Length2 = Ship(2);
        hits2Length2.hit();
        hits2Length2.hit();
        expect(hits2Length2.isSunk()).toBe(true);
    })

    it ('returns false when hits === 1 and length === 2', () => {
        const hits1Length2 = Ship(2);
        hits1Length2.hit();
        expect(hits1Length2.isSunk()).toBe(false);
    })

    it ('returns true when hits === 3, length === 2', () => {
        const hits3Length2 = Ship(2);
        hits3Length2.hit();
        hits3Length2.hit();
        hits3Length2.hit();
        expect(hits3Length2.isSunk()).toBe(true);
    })
})