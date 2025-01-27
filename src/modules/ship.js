export default function Ship(length) {

    let hits = 0;
    let sunk = false;

    return {
        hit() {
            hits += 1;
        },
        isSunk() {
            if (length === 0) {
                return null;
            } else if (hits >= length) {
                return true;
            } else {
                return false;
            }
            
        },

        get hits() {
            return hits;
        }
    }

}