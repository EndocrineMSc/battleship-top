export default class Ship {
    #length = null;

    #hits = 0;

    #isSunk = false;

    constructor(length) {
        this.#length = length;
    }

    hit() {
        this.#hits += 1;

        if (this.#hits >= this.#length) {
            this.#isSunk = true;
        }
    }

    get isSunk() {
        return this.#isSunk;
    }  
}

// test comment