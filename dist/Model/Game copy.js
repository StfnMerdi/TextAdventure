"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Game {
    constructor(game) {
        this.title = game.title;
        this.creator = game.creator;
        this.gamePlaces = game.gamePlaces;
    }
    get gameTitle() {
        return this.title;
    }
    set gameTitle(value) {
        this.title = value;
    }
    get creatorName() {
        return this.creator;
    }
    set creatorName(value) {
        this.creator = value;
    }
}
//# sourceMappingURL=Game copy.js.map